import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const AllReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})

    // const url = 

    useEffect( () => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-5xl'>Your submitted reviews {reviews.length}</h2>
        </div>
    );
};

export default AllReviews;