import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SoloService = () => {
    const service = useLoaderData()
    const { picture, balance, name, about } = service
    // console.log(service);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={"https://placeimg.com/260/400/arch"} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                        <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-10'>
                <h2 className='text-3xl font-bold'>Leave a review here</h2>
                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
            </div>

        </div>
    );
};

export default SoloService;