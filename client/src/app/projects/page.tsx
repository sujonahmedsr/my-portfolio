import Image from "next/image";
import React from "react";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
    title: "My Projects",
    description: "Explore my portfolio of projects, showcasing my expertise in web development. From front-end designs to full-stack applications, see what I've built!",
};



const projects = [
    {
        id: '1',
        title: "Cycle Labs",
        description: "A full-stack bicycle store application with authentication, payment integration, and product management.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: '2',
        title: "Coaching Center Management",
        description: "A web app for managing student records, attendance, and online classes.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: '3',
        title: "Time Management App",
        description: "A productivity tool to track and manage tasks efficiently.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: '4',
        title: "Time Management App",
        description: "A productivity tool to track and manage tasks efficiently.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        liveLink: "#",
        githubLink: "#",
    }
];

const ProjectsPage = () => {
    return (
        <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
                {projects.map((project) => (
                    <Card key={project.id} className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all dark:bg-gray-800">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500} height={500}
                            className="rounded-lg w-full h-64 object-cover"
                        />
                        <div className="flex items-center justify-between py-4">
                            {/* Live Demo Link with Icon */}
                            <a
                                href={project.liveLink}
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
                        <div className="text-start">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 text-sm my-2 dark:text-gray-300">{project.description}</p>

                            <div className="text-center">
                                <a
                                    href={`/projects/${project.id}`}
                                    className="text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
