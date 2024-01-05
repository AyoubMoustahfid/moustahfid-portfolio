import React from 'react'
import Image from "next/image"
import { useTranslations } from "next-intl";


import icon_api_dev from "../../../assets/icons/api-development.png"
import icon_solving_problem from "../../../assets/icons/solving-problem.png"
import icon_database from "../../../assets/icons/database.png"
import icon_frontend_dev from "../../../assets/icons/front-end.png"
import icon_fullstack from "../../../assets/icons/full-stack.png"

export default function Sevices() {
    const t = useTranslations("Services");

    const data = [
        {
            image: icon_fullstack,
            title: t('items.01.title'),
            description: t('items.01.description'),
        },
        {
            image: icon_api_dev,
            title: t('items.02.title'),
            description: t('items.02.description'),
        },
        {
            image: icon_database,
            title: t('items.03.title'),
            description: t('items.03.description'),
        },
        {
            image: icon_frontend_dev,
            title: t('items.04.title'),
            description: t('items.04.description'),
        },
        {
            image: icon_solving_problem,
            title: t('items.05.title'),
            description: t('items.05.description'),
        }
    ]

  return (
    <section>
          <div className="py-14 container space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
                <div className=" ">
                    <h6 className="text-blue-600 font-medium">
                        {t('title')}
                    </h6>
                    <h1 className="text-4xl font-bold">
                        {t('sectionTitle')}
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-8">
                {data.map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-600 rounded-md p-6 space-y-3 col-span-4 sm:col-span-2 lg:col-span-1 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] group relative hover:bg-blue-600 dark:hover:bg-blue-600">
                        <div className='flex flex-col items-center text-center space-y-3 justify-between'>
                            <div className="bg-blue-600 group-hover:bg-gray-50 grid place-items-center w-16 h-16 rounded-full">
                                <Image
                                    src={item.image}
                                    className="invert group-hover:invert-0"
                                    alt=""
                                    width="30"
                                    height="30"
                                />
                            </div>
                            <h5 className="font-semibold text-lg capitalize group-hover:text-white">
                                {item.title}
                            </h5>
                            <p className="text-gray-400 dark:text-gray-300 text-xs leading-loose group-hover:text-white">
                                {item.description}
                            </p>
                        </div>
                        <div>
                            <span className="absolute top-0 right-0">
                                <svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
                                    <circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
                                </svg>
                            </span>
                            <span className="absolute left-1 bottom-1">
                                <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                                    <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                                    <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                                    <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                                    <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                                    <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                                    <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                                    <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                                    <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                                    <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                                    <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                                    <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                                </svg>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}
