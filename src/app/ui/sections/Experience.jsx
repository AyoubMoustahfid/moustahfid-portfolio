import React from 'react';

const Experience = () => {
    return (
        <section className="container py-14">
            <div className="text-center space-y-3 max-w-xl mx-auto mb-10">
                <div className="space-x-1">
                    <h6 className="text-blue-600 font-medium">My Experience</h6>
                    <h2 className="text-4xl font-bold">My Educational Background And Certification</h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 justify-between">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="col-span-2 md:col-span-1">
                        <div className="flex gap-x-3">
                            <div className="w-16 text-end">
                                <span className="text-xs text-gray-500 dark:text-gray-400">12:05PM</span>
                            </div>

                            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                                <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                                </div>
                            </div>

                            <div className="grow pt-0.5 pb-8">
                                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                    {index === 0 ? (
                                        <>
                                            <svg
                                                className="flex-shrink-0 w-4 h-4 mt-1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="16" x2="8" y1="13" y2="13" />
                                                <line x1="16" x2="8" y1="17" y2="17" />
                                                <line x1="10" x2="8" y1="9" y2="9" />
                                            </svg>
                                            Created "Preline in React" task
                                        </>
                                    ) : (
                                        'Release v5.2.0 quick bug fix 🐞'
                                    )}
                                </h3>
                                {index === 2 && (
                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                        Finally! You can check it out here.
                                    </p>
                                )}
                                <button
                                    type="button"
                                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    {index === 1 && (
                                        <span className="flex flex-shrink-0 justify-center items-center w-4 h-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                                            A
                                        </span>
                                    )}
                                    James Collins
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
