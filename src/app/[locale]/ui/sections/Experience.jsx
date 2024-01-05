import React from 'react';
import { useTranslations } from "next-intl";


const Experience = () => {
    const t = useTranslations("Experience");

    const experiences = [
        {experience: [
            {
                id: 1,
                date: "Jul 2023 – Sep 2023",
                info: t('experiences.01.info'),
                details: {
                    detail: t('experiences.01.details.01'),
                    detail: t('experiences.01.details.02')
                },
                company: "Seidan Inc."
            },
            {
                id: 2,
                date: "Jun 2021 – Oct 2022",
                info: t('experiences.02.info'),
                details: {
                    detail: t('experiences.02.details.01'),
                    detail: t('experiences.02.details.02'),
                    detail: t('experiences.02.details.03')
                },
                company: "Algorizmie."
            },
            {
                id: 3,
                date: "May 2021",
                info: t('experiences.03.info'),
                company: "IR4LAB Africa"
            },
            {
                id: 4,
                date: "Oct 2020",
                info: t('experiences.04.info'),
                company: "Fikralabs"
            },
            {
                id: 4,
                date: "Jul 2020 – Sep 2020",
                info: t('experiences.05.info'),
                company: "OMAINVEST"
            },
        ]},
        {
            educations: [
                {
                    id: 1,
                    date: "November 2023",
                    info: t('educations.01.info'),
                    company: t('educations.01.company')
                },
                {
                    id: 2,
                    date: "September 2023",
                    info: t('educations.02.info'),
                    company: t('educations.02.company')
                },
                {
                    id: 3,
                    date: "Nov 2021 – Dec 2021",
                    info: t('educations.03.info'),
                    company: t('educations.03.company'),
                    details: {
                        detail: t('educations.03.details.01'),
                        detail: t('educations.03.details.02'),
                    },
                },
                {
                    id: 4,
                    date: "May 2021 – Jun 2021",
                    info: t('educations.04.info'),
                    company: t('educations.04.company'),
                    details: {
                        detail: t('educations.04.details.01'),
                        detail: t('educations.04.details.02'),
                        detail: t('educations.04.details.03'),
                    },
                },
                {
                    id: 5,
                    date: "Feb 2021",
                    info: t('educations.05.info'),
                    company: t('educations.05.company'),
                    details: {
                        detail: t('educations.05.details.01')
                    },
                },
                {
                    id: 6,
                    date: "Jan 2021 – Feb 2021",
                    info: t('educations.06.info'),
                    company: t('educations.06.company'),
                    details: {
                        detail: t('educations.06.details.01'),
                        detail: t('educations.06.details.02'),
                        detail: t('educations.06.details.03'),
                    },
                },
                {
                    id: 7,
                    date: "Oct 2020 – Nov 2020",
                    info: t('educations.07.info'),
                    company: t('educations.07.company'),
                    details: {
                        detail: t('educations.07.details.01'),
                        detail: t('educations.07.details.02')
                    },
                },
                {
                    id: 8,
                    date: "Apr 2020 – May 2020",
                    info: t('educations.08.info'),
                    company: t('educations.08.company'),
                    details: {
                        detail: t('educations.08.details.01'),
                        detail: t('educations.08.details.02')
                    },
                },
                {
                    id: 9,
                    date: "Jan 2021 – Feb 2021",
                    info: t('educations.09.info'),
                    company: t('educations.09.company'),
                },
                {
                    id: 10,
                    date: "Jan 2021 – Feb 2021",
                    info: t('educations.10.info'),
                    company: t('educations.10.company'),
                },
                {
                    id: 11,
                    date: "Jan 2021 – Feb 2021",
                    info: t('educations.11.info'),
                    company: t('educations.11.company'),
                    details: {
                        detail: t('educations.11.details.01'),
                    },
                },
            ]
        }
    ]

    return (
        <section className="container py-14">
            <div className="text-center space-y-3 max-w-xl mx-auto mb-10">
                <div className="space-x-1">
                    <h6 className="text-blue-600 font-medium">
                        {'title'}
                    </h6>
                    <h2 className="text-4xl font-bold">
                        {'talkAbout'}
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 justify-between">
                {experiences.map((category, categoryIndex) =>
                    category[Object.keys(category)[0]].map((item, index) => (
                        <div key={index} className="col-span-2 md:col-span-1">
                            <div className="ps-2 my-2 first:mt-0">
                                <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-gray-400">
                                    {item.date}
                                </h3>
                            </div>
                            <div className="flex gap-x-3">

                                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                                    <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                        <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600"></div>
                                    </div>
                                </div>

                                <div className="grow pt-0.5 pb-8">
                                    <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                        {categoryIndex === 0 && index === 0 ? (
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
                                                {item.info}
                                            </>
                                        ) : (
                                            item.info
                                        )}
                                    </h3>
                                    {item.details && (
                                        <div>
                                            {Array.isArray(item.details) ? (
                                                <ul className="list-disc pl-5">
                                                    {item.details.map((detail, detailIndex) => (
                                                        <li key={detailIndex} className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                            - {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div>
                                                    {Object.values(item.details).map((value, detailIndex) => (
                                                        <p key={detailIndex} className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                                            - {value}
                                                        </p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Experience;
