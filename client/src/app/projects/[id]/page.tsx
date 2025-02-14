/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import React from 'react';

const ProjectDetailsPage = async ({params}: {params: any}) => {
    const {id} = await params
    console.log(id);
    
    
    const project = {
        id: 4,
        title: "Time Management App",
        description: "A productivity tool to track and manage tasks efficiently.",
        image: "https://img.freepik.com/premium-vector/project-management-marketing-analysis-development-online-successful-strategy-motivation_501813-2156.jpg",
        link: "#",
    }  // Find the project by its ID

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section className="bg-gray-100 text-center py-10 dark:bg-gray-900 dark:text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg dark:bg-gray-800">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={500} height={500}
                        className="w-full h-80 object-cover rounded-lg mb-6"
                    />
                    <p className="text-gray-600 text-lg mb-6 dark:text-gray-300">{project.description}</p>
                    <div className="text-center">
                        <a
                            href={project.link}
                            className="text-blue-600 font-medium hover:underline dark:text-blue-400 dark:hover:text-blue-500"
                        >
                            Visit Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailsPage;
