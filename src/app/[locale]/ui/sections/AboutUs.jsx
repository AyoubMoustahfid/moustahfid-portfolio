"use client"


import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";

import img_about_me from '../../../assets/images/img_about_me.jpg';

export default function AboutUs() {
    const  t  = useTranslations("AboutUs");

    const soft_skills = [
        {
            skill: t('soft_skill_01'),
        },
        {
            skill: t('soft_skill_02'),
        },
        {
            skill: t('soft_skill_03'),
        },
        {
            skill: t('soft_skill_04'),
        },
        {
            skill: t('soft_skill_05'),
        },
        {
            skill: t('soft_skill_06'),
        },
    ];

    return (
        <section className="py-14 bg-gray-100 dark:bg-gray-900">
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2 container">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h6 className="text-blue-600 font-medium">{t('title')}</h6>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none">
                            {t('talkAbout')}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-200 text-base">{t('introMe')}</p>
                    </div>
                    <p className="mb-4 text-sm font-bold tracking-widest uppercase">Soft Skills:</p>
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        {soft_skills.map((skill, index) => (
                            <ul className="space-y-3" key={index}>
                                <li className="flex">
                                    <span className="mr-1">
                                        <svg
                                            className="w-5 h-5 mt-px text-green-500"
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
                                    {skill.skill}
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div>
                    <Image
                        src={img_about_me}
                        className="object-cover w-full h-modal rounded shadow-lg"
                        alt="image about me"
                    />
                </div>
            </div>
        </section>
    );
}
