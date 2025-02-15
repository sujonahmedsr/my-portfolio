/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export const metadata: Metadata = {
    title: "Project Deatils",
    description: "Explore my latest blogs on web development, programming, and tech trends. Stay updated with insights, tutorials, and coding tips!",
};

const ProjectDetailsPage = async ({ params }: { params: any }) => {
    const { id } = await params

    const res = await axios.get(`http://localhost:5000/api/projects/${id}`)

    const project = res?.data?.data


    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className="bg-gray-100 py-10 px-4 dark:bg-gray-900 dark:text-white">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg dark:bg-gray-800 border">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={700} height={500}
                    className="w-full h-72 rounded-lg mb-6"
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
                <p className="text-gray-800 text-2xl font-bold mb-6 dark:text-gray-300">{project.title}</p>
                <p
                    className="text-gray-600 text-sm mb-4 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, "<br/>") }}
                >
                </p>
                <h1><span className='text-lg font-semibold'>Technologies</span>: {project?.technologies
                    ?.split(",") // Comma diye split kora
                    ?.map((tech: string, i: number) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 rounded mr-2">
                            {tech.trim()} {/* Extra space remove kora */}
                        </span>
                    ))}
                </h1>
                <div className="mt-6 text-center">
                    <Link href="/projects">
                        <p className="text-blue-600 hover:text-blue-700 font-medium dark:text-blue-400 dark:hover:text-blue-500">
                            ← Back to Projects Page
                        </p>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default ProjectDetailsPage;
