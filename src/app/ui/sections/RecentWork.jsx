"use client"

import React, { useState } from 'react';
import Image from "next/image"

export default function RecentWork() {
    const [activeTab, setActiveTab] = useState('All');

    // Example project data
    const projects = [
        { 
            id: 1, 
            title: 'Project 1', 
            intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            category: 'Web Design' 
        },
        { 
            id: 2, 
            title: 'Project 2', 
            intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            category: 'Graphics' 
        },
        { 
            id: 3, 
            title: 'Project 3', 
            intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            category: 'App' 
        },
        { 
            id: 4, 
            title: "Project 4", 
            intro: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            category: 'Problem-solving' 
        }
    ];

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filterProjectsByCategory = (category) => {
        if (category === 'All') {
            return projects; 
        }
        return projects.filter((project) => project.category === category);
    };

    const renderProjectCards = () => {
        const filteredProjects = filterProjectsByCategory(activeTab);

        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="">
                        <img
                            src="https://portfolio-tailwind.preview.uideck.com/images/personal.jpg"
                            alt=""
                            className="w-full"
                        />
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-500 text-sm">{project.intro}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="bg-gray-50">
            <div className="container space-y-10 py-8">
                <div className="text-center space-y-3 max-w-xl mx-auto">
                    <div className="space-x-1">
                        <h6 className="text-blue-600 font-medium">Creative Portfolios</h6>
                        <h2 className="text-4xl font-bold">Recent Works</h2>
                    </div>
                    <p className="text-gray-400 ">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio inventore quam vel? Optio recusandae eos autem facilis. Molestias, dicta doloremque.
                    </p>
                </div>
                <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {['All', 'Web Design', 'Graphics', 'App', 'Problem-solving'].map((tab) => (
                        <li key={tab} className="me-2">
                            <a
                                href={`#${tab.toLowerCase().replace(' ', '_')}`}
                                className={`inline-block px-4 py-3 rounded-lg ${activeTab === tab
                                    ? 'text-white bg-blue-600'
                                    : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
                                    }`}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>{renderProjectCards()}</div>
            </div>
        </section>
    );
}
