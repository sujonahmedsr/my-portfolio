import React from "react";
import { Metadata } from "next";
import Cards from "@/components/projects/Cards";

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
                {projects.map((project, index) => (
                    <Cards key={index} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
