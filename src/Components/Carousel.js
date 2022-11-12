import React from 'react';
import car_img from '../asset/car-img.gif'

const Carousel = () => {
    return (
        <section>
            <div className="dark:bg-orange-300">
                <div className="container flex flex-col items-center px-4 lg:pt-18 py-8 pb-24 mx-auto text-center lg:pb-44 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Keep Moment's Alive</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor</p>
                    {/* <div className="flex flex-wrap justify-center">
                        <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
                        <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Services</button>
                    </div> */}
                </div>
            </div>
            

            <img src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-3/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
        </section>
    );
};

export default Carousel;