"use client"

import React from 'react';
import { useTranslations } from "next-intl";


const Testimonials = () => {

    const t = useTranslations("Testimonials");

    const testimonials = [
        {
            content: t('testimonials.01.content'),
            author: t('testimonials.01.author'),
            position: t('testimonials.01.position'),
        },
        {
            content: t('testimonials.02.content'),
            author: t('testimonials.02.author'),
            position: t('testimonials.02.position'),
        },
        {
            content: t('testimonials.03.content'),
            author: t('testimonials.03.author'),
            position: t('testimonials.03.position'),
        },
      
    ];

    return (
        <section className="container py-14">
            <div className="relative max-w-full mx-auto overflow-hidden ">
                <div className="text-center space-y-3 max-w-xl mx-auto">
                    <div className="space-x-1">
                        <h6 className="text-blue-600 font-medium">
                            {t('sectionTitle')}
                        </h6>
                        <h2 className="text-4xl font-bold">
                            {t('subsectionTitle')}
                        </h2>
                    </div>
                    <p className="text-gray-400 ">
                        {t('description')}                  
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col relative bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
                            <div className="flex-auto p-4 md:p-6 relative">
                                <svg
                                    className="absolute top-0 start-0 h-16 w-16 text-gray-200 sm:h-24 sm:w-24 dark:text-gray-700"
                                    width="16"
                                    height="13"
                                    viewBox="0 0 16 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z" fill="currentColor" />
                                </svg>
                                <span className="relative z-10  text-gray-800 dark:text-gray-200">
                                    {testimonial.content}
                                </span>
                            </div>

                            <div className="p-4 rounded-b-xl md:px-6">
                                <h3 className="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
                                    {testimonial.author}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {testimonial.position}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
                   
        </section>
    );
};

export default Testimonials;
