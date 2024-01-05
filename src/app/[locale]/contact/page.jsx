"use client"

import React from 'react';
import Form from "./FormContact"
import { useTranslations } from "next-intl";


export default function Contact() {
    const t = useTranslations('Contact')

    return (
        <section className="">
            <div className="container">
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-2xl lg:max-w-5xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                                {t('title')}
                            </h1>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                {t('talkAbout')}
                            </p>
                        </div>
                        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                            <div className="flex-1 hidden lg:block">
                                <img src="https://images.unsplash.com/photo-1697135807547-5fa9fd22d9ec?auto=format&fit=crop&q=80&w=3387&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-screen object-cover" />
                            </div>
                            <div className="flex flex-col  rounded-xl p-4 sm:p-6 lg:p-8 ">
                                <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    {t('titleForm')}
                                </h2>
                                <Form/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
