import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const AllReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        console.log(user);
        if(!user?.email){
            return
        }
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are sure for delete')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully')
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReviews(remaining)
                }
            })
        }
    }

    return (
        <div>
            <h2 className='text-5xl'>Your submitted reviews {reviews.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Service Name</th>
                            <th>Reviews</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                          reviews?.map(rev => <ReviewRow
                            key={rev._id}
                            rev={rev}
                            handleDelete={handleDelete}
                          ></ReviewRow>)  
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReviews;