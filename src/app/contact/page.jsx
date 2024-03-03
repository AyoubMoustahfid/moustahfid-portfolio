"use client"

import React from 'react';
import Form from "./FormContact"

export default function Contact() {


    return (
        <section className="">
            <div className="container">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-2xl lg:max-w-5xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                                Contact Me
                            </h1>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                I&lsquo;d love to talk about how I can help you.
                            </p>
                        </div>
                        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                            <div className="flex flex-col  rounded-xl p-4 sm:p-6 lg:p-8 ">
                                <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    Fill in the form
                                </h2>
                                <Form/>
                            </div>
                            <div className="divide-y divide-gray-200 dark:divide-gray-800">
                                <div className=" flex gap-x-7 py-6">
                                    <svg className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" /><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" /></svg>
                                    <div className="grow">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Contact me by email</h3>
                                        <p className="mt-1 text-sm text-gray-500">If you wish to write me an email instead please use</p>
                                        <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                            ayoub.moustahfid@zohomail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex gap-x-7 py-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <div className="grow">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Address Point</h3>
                                        <p className="mt-1 text-sm text-gray-500">Lot Militaire Bensergao, 80100, Agadir Morocco.</p>
                                        
                                    </div>
                                </div>
                                <div className="flex gap-x-7 py-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <div className="grow">
                                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Call Me</h3>
                                        <p className="mt-1 text-sm text-gray-500">+212 708 011 665</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
