import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
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
    }
];

const Projects = () => {
    return (
        <>
            <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white transition-all">
                <div className="my-14 container mx-auto px-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">What I Do</h3>
                    <div className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl"><span className="text-4xl">💻</span> <span className="font-semibold">Web Development</span> – Building modern and responsive web applications.</Card>
                        <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl"><span className="text-4xl">🎨</span> <span className="font-semibold">UI/UX Enthusiast</span> – Focused on creating seamless user experiences.</Card>
                        <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl"><span className="text-4xl">🚀</span> <span className="font-semibold">Continuous Learning</span> – Exploring new technologies like Redux, Next.js, Node.js and SQL Backend.</Card>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center my-6">My Projects</h2>
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
                <div className="flex justify-center mt-6">
                    <Link href="/projects">
                        <Button className="px-6 py-2 rounded text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white">View All Projects</Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Projects;
