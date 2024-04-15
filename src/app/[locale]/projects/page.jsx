"use client"
import React, {useState, useEffect} from 'react'
import Card from '../ui/components/service/Card'
import { useTranslations } from "next-intl";


import img_project_1 from "../../assets/images/img_project_01.jpeg"
import img_project_2 from "../../assets/images/img_project_02.png"
import img_project_3 from "../../assets/images/img_project_03.jpeg"
import img_project_4 from "../../assets/images/img_project_04.png"
import img_project_5 from "../../assets/images/img_project_05.jpeg"
import img_project_6 from "../../assets/images/img_project_06.png"
import img_project_7 from "../../assets/images/img_project_07.png"
import img_project_8 from "../../assets/images/img_project_08.png"
import img_project_9 from "../../assets/images/img_project_09.png"

function Projects() {
    const t = useTranslations("RecentWork");


    const projects = (int) => {
        const links = [
            {
                img: img_project_1,
                href: 'https://github.com/AyoubMoustahfid/Restaurant-System-management-MERN'
            },
            {
                img: img_project_2,
                href: 'https://github.com/AyoubMoustahfid/get-color-from-image-javascript'
            },
            {
                img: img_project_3,
                href: 'https://github.com/AyoubMoustahfid/Project-business-corporate-website'
            },
            {
                img: img_project_4,
                href: 'https://github.com/AyoubMoustahfid/Project-SaaSbold-Landing-Page-Tailwind'
            },
            {
                img: img_project_5,
                href: 'https://github.com/AyoubMoustahfid/Project-Agency-And-Startup-Template'
            },
            {
                img: img_project_6,
                href: 'https://github.com/AyoubMoustahfid/Project-Dashboard-Admin-Template'
            },
            {
                img: img_project_7,
                href: 'https://github.com/AyoubMoustahfid/javascript-challenge/tree/master/object-class-check'
            },
            {
                img: img_project_7,
                href: 'https://github.com/AyoubMoustahfid/javascript-challenge/tree/master/memoize-function'
            },
            {
                img: img_project_7,
                href: 'https://github.com/AyoubMoustahfid/javascript-challenge/tree/master/substring_concatenation_solution'
            },
            {
                img: img_project_8,
                href: 'https://github.com/AyoubMoustahfid/app-sheduler-meeting'
            },
            {
                img: img_project_9,
                href: 'https://github.com/AyoubMoustahfid/online-board'
            },
        ]

        return {
            id: int,
            image: links[int - 1].img,
            title: t(`projects.${int}.title`),
            intro: t(`projects.${int}.intro`),
            category: t(`projects.${int}.category`),
            link: links[int - 1].href
        };
    };

    const projectCount = 11; // Adjust this based on the actual number of projects

    // Generate project arrays based on the number of projects
    const allProjects = Array.from({ length: projectCount }, (_, index) => projects(index + 1));

    const [activeTab, setActiveTab] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProjects, setFilteredProjects] = useState([]);

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentProjects.map((project, index) => (
                    <Card info={project} key={index} index={index} />
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
      <div className="container py-14 relative">
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-5 lg:col-span-1">
                  <ul className="flex flex-wrap justify-center lg:justify-start lg:flex-col gap-3 text-sm font-medium  text-gray-500 dark:text-gray-400 lg:fixed relative">
                    {['All', t('projects.3.category'), t('projects.1.category'), t('projects.7.category')].map((tab, index) => (
                        <li key={index} className="me-2">
                            <a
                                href={`/#${tab.toLowerCase().replace(' ', '_')}`}
                                className={`inline-block px-4 py-3 rounded-lg lg:w-full text-center lg:text-left
                                 ${activeTab === tab
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
            </div>

            <div className="col-span-5 lg:col-span-4 ">
                  {renderProjectCards()}
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
        </div>
    </div>
  )
}

export default Projects