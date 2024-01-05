"use client"

import React, { useState, useEffect } from 'react';
import Card from '../components/service/Card';
import { useTranslations } from "next-intl";


import img_project_01 from "../../../assets/images/img_project_01.jpeg"
import img_project_02 from "../../../assets/images/img_project_02.png"
import img_project_03 from "../../../assets/images/img_project_03.jpeg"
import img_project_04 from "../../../assets/images/img_project_04.png"
import img_project_05 from "../../../assets/images/img_project_05.jpeg"
import img_project_06 from "../../../assets/images/img_project_06.png"
import img_project_07 from "../../../assets/images/img_project_07.png"



export default function RecentWork() {
    const t = useTranslations("RecentWork");

    // Example project data
    const projects = [
        { 
            id: 1, 
            image: img_project_01,
            title: t('projects.01.title'), 
            intro: t('projects.01.intro'),
            category: t('projects.01.category'),
            link: "https://github.com/AyoubMoustahfid/Restaurant-System-management-MERN" 
        },
        { 
            id: 2, 
            image: img_project_02,
            title: t('projects.02.title'),
            intro: t('projects.02.intro'),
            category: t('projects.02.category'),
            link: "https://github.com/AyoubMoustahfid/get-color-from-image-javascript" 
        },
        { 
            id: 3, 
            image: img_project_03,
            title: t('projects.03.title'),
            intro: t('projects.03.intro'),
            category: t('projects.03.category'),
            link: "https://github.com/AyoubMoustahfid/Project-business-corporate-website" 
        },
        { 
            id: 4, 
            image: img_project_04,
            title: t('projects.04.title'),
            intro: t('projects.04.intro'),
            category: t('projects.04.category'),
            link: "https://github.com/AyoubMoustahfid/Project-SaaSbold-Landing-Page-Tailwind" 
        },
        {
            id: 5,
            image: img_project_05,
            title: t('projects.05.title'),
            intro: t('projects.05.intro'),
            category: t('projects.05.category'),
            link: "https://github.com/AyoubMoustahfid/Project-Agency-And-Startup-Template"
        },
        {
            id: 6,
            image: img_project_06,
            title: t('projects.06.title'),
            intro: t('projects.06.intro'),
            category: t('projects.06.category'),
            link: "https://github.com/AyoubMoustahfid/Project-Dashboard-Admin-Template"
        },
        {
            id: 7,
            image: img_project_07,
            title: t('projects.07.title'),
            intro: t('projects.07.intro'),
            category: t('projects.07.category'),
            link: "https://github.com/AyoubMoustahfid/javascript-challenge/tree/master/object-class-check"
        },
        {
            id: 8,
            image: img_project_07,
            title: t('projects.08.title'),
            intro: t('projects.08.intro'),
            category: t('projects.08.category'),
            link: "https://github.com/AyoubMoustahfid/javascript-challenge/tree/master/memoize-function"
        },
        {
            id: 8,
            image: img_project_07,
            title: t('projects.09.title'),
            intro: t('projects.09.intro'),
            category: t('projects.09.category'),
            link: "https://github.com/AyoubMoustahfid/javascript-challenge/tree/master/substring_concatenation_solution"
        },
    ];

    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProjects, setFilteredProjects] = useState([]);

    // Assuming `projects` is the array of all projects
    const allProjects = projects;

    useEffect(() => {
        // Filter projects whenever activeTab changes
        setFilteredProjects(filterProjectsByCategory(activeTab));
        setCurrentPage(1); // Reset to the first page when switching tabs
    }, [activeTab]);

    const projectsPerPage = 6;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const filterProjectsByCategory = (category) => {
        if (category === 'All') {
            return allProjects;
        }
        return allProjects.filter((project) => project.category === category);
    };

    const renderProjectCards = () => {
        const indexOfLastProject = currentPage * projectsPerPage;
        const indexOfFirstProject = indexOfLastProject - projectsPerPage;
        const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

        return (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProjects.map((project, index) => (
                    <Card info={project} key={index} />
                ))}
            </div>
        );
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };


    return (
        <section className="bg-gray-100 dark:bg-gray-900">
            <div className="container space-y-10 py-8">
                <div className="text-center space-y-3 max-w-xl mx-auto">
                    <div className="space-x-1">
                        <h6 className="text-blue-600 font-medium">
                            {t('title')}
                        </h6>
                        <h2 className="text-4xl font-bold">
                            {t('sectionTitle')}
                        </h2>
                    </div>
                    <p className="text-gray-400 ">
                        {t('sectionSubtitle')}
                    </p>
                </div>
                <ul className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {['All', t('projects.03.category'), t('projects.01.category'), t('projects.07.category')].map((tab, index) => (
                        <li key={index} className="me-2">
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
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`mx-2 px-4 py-2 text-gray-500 dark:text-gray-300 rounded-md border border-gray-300 bg-white dark:bg-gray-800 ${currentPage !== 1 && 'hover:bg-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 hover:text-white'}`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage * projectsPerPage >= filteredProjects.length}
                        className={`mx-2 px-4 py-2 text-gray-500 dark:text-gray-300 rounded-md border border-gray-30 bg-white dark:bg-gray-800 ${(currentPage * projectsPerPage <= filteredProjects.length) && 'hover:bg-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 hover:text-white'}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
