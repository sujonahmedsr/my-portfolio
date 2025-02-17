"use client"

import { useEffect } from "react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaDownload } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiTypescript, SiMysql, SiPrisma } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600 text-5xl" />, color: 'text-orange-600' },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 text-5xl" />, color: 'text-blue-600' },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 text-5xl" />, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500 text-5xl" />, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400 text-5xl" />, color: 'text-blue-400' },
    { name: 'React.js', icon: <FaReact className="text-blue-500 text-5xl" />, color: 'text-blue-500' },
    { name: 'Redux', icon: <SiRedux className="text-purple-600 text-5xl" />, color: 'text-purple-600' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black text-5xl" />, color: 'text-black' },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-5xl" />, color: 'text-green-600' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-5xl" />, color: 'text-green-500' },
    { name: 'Mongoose', icon: <BiLogoMongodb className="text-green-500 text-5xl" />, color: 'text-green-500' },
    { name: 'MySQL', icon: <SiMysql className="text-gray-500 text-5xl" />, color: 'text-gray-500' },
    { name: 'PostgreSQL', icon: <BiLogoPostgresql className="text-gray-500 text-5xl" />, color: 'text-gray-500' },
    { name: 'Prisma', icon: <SiPrisma className="text-green-500 text-5xl" />, color: 'text-green-500' },
    { name: 'Git', icon: <FaGitAlt className="text-red-600 text-5xl" />, color: 'text-red-600' }
];

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration for animations
        });
    }, []);
    return (
        <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-all">
            <div className="container mx-auto px-4">
                <div className="md:grid flex flex-col-reverse  grid-cols-1 md:grid-cols-2 justify-between gap-8 mx-auto">
                    <div>
                        <div className="mt-4 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="400">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                                Hi, I&apos;m <br />
                                <p className="text-blue-600 dark:text-blue-400 mt-5">Shofiqul Islam Sujon</p>
                            </h1>
                            <p className="mt-5">
                                a passionate
                                <span className="font-semibold text-blue-600 dark:text-blue-400"> Front-End Developer</span> with expertise in
                                <span className="font-semibold text-blue-600 dark:text-blue-400"> HTML, CSS, JavaScript, Tailwind CSS, and React.js</span>.
                                Currently, I&apos;m learning new <span className="font-semibold">Technologies</span>, aiming to become a
                                <span className="font-semibold text-blue-600 dark:text-blue-400"> Full-Stack Web Developer</span>.
                            </p>
                        </div>

                        <p className="mt-4 text-gray-700 dark:text-gray-300" data-aos="fade-up" data-aos-delay="600">
                            I enjoy problem-solving through code and exploring new technologies. My goal is to become a proficient full-stack developer.
                        </p>


                        {/* Experience */}
                        <div className="mt-6" data-aos="fade-up" data-aos-delay="700">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                                💼 <span className="font-semibold">Front-End Developer</span> - 1+ Year of experience in web development.
                                <br />
                                🔹 Proficient in <span className="font-semibold text-blue-600 dark:text-blue-400">React.js, Tailwind CSS, Redux, JavaScript, and TypeScript</span>.
                                <br />
                                🚀 Building scalable and responsive web applications.
                            </p>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-6 flex items-center md:justify-start justify-center gap-5" data-aos="fade-up" data-aos-delay="800">
                            <a href="/resume.pdf" download="Shofiqul Islam Resume (MERN)"
                                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
                                <FaDownload /> Resume
                            </a>
                            {/* Social Media Links */}
                            <a href="https://www.facebook.com/sujonahmeds81" className="text-3xl text-blue-600 hover:text-blue-700" data-aos="fade-up" data-aos-delay="1000">
                                <FaFacebook />
                            </a>
                            <a href="#" className="text-3xl text-blue-700 hover:text-blue-800" data-aos="fade-up" data-aos-delay="1100">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-3xl text-blue-400 hover:text-blue-500" data-aos="fade-up" data-aos-delay="1200">
                                <FaTwitter />
                            </a>
                            <a href="https://github.com/sujonahmedsr" className="text-3xl text-gray-800 hover:text-gray-900" data-aos="fade-up" data-aos-delay="1300">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center" data-aos="fade-left">
                        <div className="relative w-72 h-72 rounded overflow-hidden border-4 border-blue-600 shadow-lg mx-auto transform rotate-6 hover:rotate-0 hover:shadow-xl transition-all duration-500" data-aos="fade-left" data-aos-delay="500">
                            <Image src={profile} alt="Shofiqul Islam Sujon" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>


                {/* Skills */}
                <div className="mt-20 w-full">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">
                        My Skills
                    </h3>
                    <div className="mt-4 flex flex-wrap justify-center gap-12">
                        {skills.map((skill, index) => (
                            <div className="flex flex-col items-center" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                                {skill.icon}
                                <span className="text-gray-700 dark:text-gray-300 mt-2">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Educational Qualification */}
                <div className="mt-14">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">Educational Qualification</h3>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
                        <Card className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg" data-aos="fade-right">
                            <CardContent className="space-y-2">
                                <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">Diploma in Computer Technology</h4>
                                <p className="text-lg font-semibold">Sirajganj Polytechnic Institute</p>
                                <p className="text-base text-gray-500">Session: 2020-2021 (End: 2024)</p>
                                <p className="text-sm text-gray-500">Diploma in Computer Technology is a program that provides foundational knowledge in computer hardware, software, programming, and networking, preparing students for entry-level IT and tech-related roles.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg" data-aos="fade-left">
                            <CardContent className="space-y-2">
                                <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">S.S.C Science</h4>
                                <p className="text-lg font-semibold">Mallika Sanaullah Ansary High School</p>
                                <p className="text-base text-gray-500">Session: 2019-2020</p>
                                <p className="text-sm text-gray-500">SSC (Secondary School Certificate) is a public examination taken by students at the end of their secondary education, typically after completing Grade 10. It assesses knowledge in various subjects such as Mathematics, Science, and Language, and is a prerequisite for higher secondary education.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* "What I Do" Section */}
                <div className="my-14 container mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">
                        What I Do
                    </h3>
                    <div className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
                            <span className="text-4xl">💻</span>
                            <span className="font-semibold">Web Development</span> – Building modern and responsive web applications.
                        </Card>
                        <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl" data-aos="fade-up" data-aos-delay="400">
                            <span className="text-4xl">🎨</span>
                            <span className="font-semibold">UI/UX Enthusiast</span> – Focused on creating seamless user experiences.
                        </Card>
                        <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-xl" data-aos="fade-up" data-aos-delay="600">
                            <span className="text-4xl">🚀</span>
                            <span className="font-semibold">Continuous Learning</span> – Exploring new technologies like Redux, Next.js, Node.js, and SQL Backend.
                        </Card>
                    </div>
                </div>

                <div className="mt-14">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">My Goals</h3>
                    <p className="mt-4 text-gray-700 dark:text-gray-300" data-aos="fade-up">
                        I aspire to build <span className="font-semibold text-blue-600 dark:text-blue-400">efficient, scalable, and visually appealing</span> web applications.
                        My dream is to work on projects that solve real-world problems while continuously growing as a developer.
                    </p>
                </div>

                <div className="mt-14">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white" data-aos="fade-up">Fun Fact</h3>
                    <p className="mt-4 text-gray-700 dark:text-gray-300" data-aos="fade-up">
                        I enjoy solving coding challenges and contribute to open-source projects. I believe that learning is an ongoing journey.
                    </p>
                </div>

                <div className="mt-14" data-aos="fade-up">
                    <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
                        Let&apos;s Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;