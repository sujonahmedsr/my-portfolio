import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
    {
        id: 1,
        title: "Cycle Labs",
        description: "A full-stack bicycle store application with authentication, payment integration, and product management.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Coaching Center Management",
        description: "A web app for managing student records, attendance, and online classes.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Time Management App",
        description: "A productivity tool to track and manage tasks efficiently.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        link: "#",
    },
    {
        id: 4,
        title: "Time Management App",
        description: "A productivity tool to track and manage tasks efficiently.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        link: "#",
    }
];

const ProjectsPage = () => {
    return (
        <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
                {projects.map((project) => (
                    <Card key={project.id} className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all dark:bg-gray-800">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={500} height={500}
                            className="rounded-lg w-full h-40 object-cover mb-4"
                        />
                        <CardContent>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-600 text-sm my-2 dark:text-gray-300">{project.description}</p>
                            <a
                                href={project.link}
                                className="text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                            >
                                View Project
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
