import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviews from '../../Components/AllReviews';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { _id, name, about, balance, picture } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const fullName = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'No Email Found';
        const photoURL = form.photoURL.value
        const review = form.review.value;

        const order = {
            service: _id,
            serviceName: name,
            balance,
            customer: fullName,
            email,
            photoURL,
            review
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged){
                    alert('order placed successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-orange-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{about}</p>
                        <button className="btn btn-primary">{balance}</button>
                    </div>
                </div>
            </div>

            <AllReviews></AllReviews>

            <div className="p-6 sm:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                    <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />
                    <div className="flex flex-col">
                        <h4 className="text-lg font-semibold text-center md:text-left">Leroy Jenkins</h4>
                        <p className="dark:text-gray-400">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
                    </div>
                </div>
            </div>


            <section className="p-6 dark:text-gray-50">
                <form onSubmit={handleReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Personal Inormation</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstName" className="text-sm">First name</label>
                                <input name='firstName' id="firstName" type="text" placeholder="First name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastName" className="text-sm">Last name</label>
                                <input name='lastName' id="lastName" type="text" placeholder="Last name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm">Email</label>
                                <input name='email' id="email" type="email" placeholder="Email" defaultValue={user?.email} className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" readOnly />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="photoURL" className="text-sm">Photo URL</label>
                                <input name='photoURL' id="photoURL" type="photoURL" placeholder="Photo URL" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <div className='text-center'>
                                    <h2 className='text-2xl font-bold'>Leave a review here</h2>
                                    <input name='review' type="text" placeholder="Type here" className="input text-gray-700 input-bordered input-primary w-full h-16" />
                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <div className='text-center'>
                                    <p>Your opinion should help us to improve our services</p>
                                    <button type='submit' className="btn mt-5 btn-warning">Submit</button>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                </form>
            </section>



        </div>
    );
};

export default MyReview;