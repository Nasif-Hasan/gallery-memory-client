import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    // console.log(service);
    const { _id, picture, balance, name, about } = service
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">

            <div>

                <PhotoProvider>

                    <PhotoView src={picture}>
                        <img src={picture} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    </PhotoView>

                </PhotoProvider>

                <h2 className="mb-1 text-3xl py-3 text-orange-400 font-semibold">{name}</h2>
                <p className="text-sm dark:text-gray-400">{about}</p>
            </div>
            <div className="flex flex-wrap justify-between">


                <div className='text-xl text-orange-400'>
                    Price: {balance}
                </div>


                <div className="flex space-x-2 text-sm dark:text-gray-400">
                    <Link to={`/review/${_id}`}>
                        <button className='btn btn-outline bg-orange-400 dark:text-gray-900 font-bold'>See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;