/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Project Deatils",
    description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};

const ProjectDetailsPage = async ({ params }: { params: any }) => {
    const { id } = await params
    console.log(id);


    const project = {
        id: "4",
        title: "Time Management App",
        description: "A productivity tool to track and manage tasks efficiently.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        liveLink: "#",
        githubLink: "#",
        technologies: [
            'Next.js',
            'React.js',
            'Tailwind CSS',
            'TypeScript',
            'MongoDB',
            'Express'
        ]
    }  // Find the project by its ID

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className="bg-gray-100 py-10 dark:bg-gray-900 dark:text-white">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg dark:bg-gray-800 border">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={700} height={500}
                    className="w-full h-[60vh] object-cover rounded-lg mb-6"
                />
                <div className="flex items-center justify-between py-4">
                    {/* Live Demo Link with Icon */}
                    <a
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                    >
                        <FaExternalLinkAlt className="h-5 w-5 mr-2" /> Live Demo
                    </a>
                    {/* GitHub Link with Icon */}
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                    >
                        <FaGithub className="h-5 w-5 mr-2" /> GitHub
                    </a>
                </div>
                <p className="text-gray-600 text-lg mb-6 dark:text-gray-300">{project.description}</p>
                <h1><span className='text-lg font-semibold'>Technologies</span>: {
                    project?.technologies?.map((item, index) => <span key={index}>{item}, </span>)
                }</h1>
            </div>
        </section>
    );
};

export default ProjectDetailsPage;
