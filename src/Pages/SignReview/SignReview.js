import React, { useContext, useEffect, useState } from 'react';
import ReviewRow from '../../Components/ReviewRow';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignReview = () => {
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

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/review/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                const remaining = reviews.filter(rev => rev._id !== id)
                const approving = reviews.find(rev => rev._id !== id)
                approving.status = "Approved"

                const newReview = [ approving, ...remaining]
                setReviews(newReview)
            }
        })
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
                handleStatusUpdate={handleStatusUpdate}
              ></ReviewRow>)  
            }
           
        </tbody>
    </table>
</div>
        </div>
    );
};

export default SignReview;