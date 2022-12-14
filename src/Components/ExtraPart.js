import React from 'react';

const ExtraPart = () => {
    return (
        <div>
            {/* part one */}

            <div className="px-4 py-16 bg-orange-200 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto  sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Brand new
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="fdca20a0-aeb4-4caf-ba1b-4351eee42363"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#fdca20a0-aeb4-4caf-ba1b-4351eee42363)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">The</span>
                        </span>{' '}
                        new and exciting packages are here
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                    We collected the 39 best photographer we could find. Take a look at these portfolios to find new ideas for showcasing your photographs.
                    </p>
                </div>
                <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:mr-4">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-900 text-orange-400">
                                <svg
                                    className="w-12 h-12  text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">The full wedding cover</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                We will cover your full wedding event and give you the best experience you have ever had.
                            </p>
                            <ul className="mb-4 -ml-1 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-1 ">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Two Photographer
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    One Videographer
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Unlimited Photo
                                </li>
                            </ul>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:mr-4">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-900 text-orange-400">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">Product video shoot</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                For your business shop or any restaurant we are giving you a full package of product videography.
                            </p>
                            <ul className="mb-4 -ml-1 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    One advertisement video
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Three full poster
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Banner Design
                                </li>
                            </ul>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="sm:mr-4">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-900 text-orange-400">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h6 className="mb-2 font-semibold leading-5">Model Portfolio</h6>
                            <p className="mb-3 text-sm text-gray-900">
                                For start a career on media you have to get some awesome photographs.
                                So here we are for your model photoshoot.
                            </p>
                            <ul className="mb-4 -ml-1 space-y-2">
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    One full portfolio
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    Over hundred pictures
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                            stroke="currentColor"
                                            viewBox="0 0 52 52"
                                        >
                                            <polygon
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                fill="none"
                                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                            />
                                        </svg>
                                    </span>
                                    A short video
                                </li>
                            </ul>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* part two */}
            <div>
                <section className="my-8">
                    <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                        <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                    </div>
                    <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                        <div className="flex flex-col items-center mx-12 lg:mx-0">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 text-lg italic">"Absolutely amazing experience with Classic Photography. The photographers were amazing and we had such a blast with them. Worth every penny!!" </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-12 h-1 my-2 rounded-lg dark:bg-orange-400"></span>
                            <p>Leroy Jenkins</p>
                        </div>
                        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                            <div className="relative text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                    <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                    <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                </svg>
                                <p className="px-6 py-1 text-lg italic">"Classic Photographers is such an amazing company! They always called back promptly & answered all questions. My Photographer was Stew, he was amazing. I have no words, he made my husband & I's wedding day perfect & magical!"</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                    <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                    <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                </svg>
                            </div>
                            <span className="w-12 h-1 my-2 rounded-lg dark:bg-orange-400"></span>
                            <p>Taylor A</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ExtraPart;