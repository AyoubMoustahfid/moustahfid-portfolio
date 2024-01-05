"use client"

import React from 'react';
import { useTranslations } from "next-intl";



const Blogs = () => {
    const  t  = useTranslations("Blogs");

    const blogsData = [
        {
            category: t('blogs.01.category'),
            imageSrc: 'https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            title: t('blogs.01.title'),
            content: t('blogs.01.content'),
            author: {
                name: t('blogs.01.author.name'),
                date: t('blogs.01.author.date'),
                avatarSrc: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
            },
        },
        {
            category: t('blogs.02.category'),
            imageSrc: 'https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            title: t('blogs.02.title'),
            content: t('blogs.02.content'),
            author: {
                name: t('blogs.02.author.name'),
                date: t('blogs.02.author.date'),
                avatarSrc: 'https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
            },
        },
        {
            category: t('blogs.03.category'),
            imageSrc: 'https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
            title: t('blogs.03.title'),
            content: t('blogs.03.content'),
            author: {
                name: t('blogs.03.author.name'),
                date: t('blogs.03.author.date'),
                avatarSrc: 'https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
            },
        },
        // Add more blog entries as needed
    ];
    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="container py-14">
                <div className="text-center space-y-3 max-w-lg mx-auto mb-10">
                    <div className="space-x-1">
                        <h6 className="text-blue-600 font-medium">
                            {t('sectionTitle')}
                        </h6>
                        <h2 className="text-4xl font-bold">
                            {t('sectionSubtitle')}
                        </h2>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                   {blogsData.map((blog, index) => (
                       <a key={index} className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                           <div className="relative pt-[50%] sm:pt-[70%] rounded-se-xl overflow-hidden">
                               <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out " 
                                    src={blog.imageSrc} 
                                    alt="Image Description"
                                />
                                <span className="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">
                                   {blog.category}
                                </span>
                           </div>

                           <div className="p-6">
                               <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-600 dark:group-hover:text-gray-200 dark:text-gray-200">
                                   {blog.title}
                               </h3>
                               <p className="mt-3 text-sm text-gray-400 dark:text-gray-200">
                                   {blog.content}
                               </p>
                               <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium text-xs cursor-pointer">
                                   Read more
                                   <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                               </p>
                           </div>
                       </a>
                   ))}
                </div>

            </div>
        </section>
    );
};

export default Blogs;
