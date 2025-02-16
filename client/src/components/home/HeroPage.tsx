"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFacebook, FaLinkedin, FaTwitter, FaGithub, FaDownload } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import profile from "@/assets/profile.jpg";

const Skills = [
  { icon: <FaHtml5 className="text-orange-600 text-5xl" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-600 text-5xl" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-500 text-5xl" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-500 text-5xl" />, name: "TypeScript" },
  { icon: <SiTailwindcss className="text-blue-400 text-5xl" />, name: "Tailwind CSS" },
  { icon: <FaReact className="text-blue-500 text-5xl" />, name: "React.js" },
  { icon: <SiRedux className="text-purple-600 text-5xl" />, name: "Redux" },
  { icon: <SiNextdotjs className="text-black text-5xl" />, name: "Next.js" },
  { icon: <FaNodeJs className="text-green-600 text-5xl" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-500 text-5xl" />, name: "MongoDB" },
  { icon: <BiLogoMongodb className="text-green-500 text-5xl" />, name: "Mongoose" },
  { icon: <FaGitAlt className="text-red-600 text-5xl" />, name: "Git" },
]

export default function HeroPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="home" className="bg-gray-100 dark:bg-gray-900 min-h-[90vh] flex items-center justify-center py-10 px-4">
      <div className="container mx-auto w-full md:grid flex flex-col-reverse grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">

        {/* Left Side - Text Section */}
        <div
          className="text-left"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I&apos;m <br />
            <p className="text-blue-600 dark:text-blue-400 mt-5">Shofiqul Islam Sujon</p>
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A <span className="font-semibold text-blue-600 dark:text-blue-400">Front-End Developer</span> with a strong passion for building
            dynamic and user-friendly web applications. Currently, I’m on my journey to becoming a
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Full-Stack Developer</span>.
          </p>

          {/* Experience */}
          <div className="mt-6" data-aos="fade-up">
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
          <div className="mt-6 flex items-center md:justify-start justify-center gap-5" data-aos="fade-up">
            <a href="/resume.pdf" download="Shofiqul Islam Resume (MERN)"
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
              <FaDownload /> Resume
            </a>
            {/* Social Media Links */}
            <a href="https://www.facebook.com/sujonahmeds81" className="text-3xl text-blue-600 hover:text-blue-700"><FaFacebook /></a>
            <a href="#" className="text-3xl text-blue-700 hover:text-blue-800"><FaLinkedin /></a>
            <a href="#" className="text-3xl text-blue-400 hover:text-blue-500"><FaTwitter /></a>
            <a href="https://github.com/sujonahmedsr" className="text-3xl text-gray-800 hover:text-gray-900"><FaGithub /></a>
          </div>
        </div>

        {/* Right Side - Image & Skills Section */}
        <div className="flex flex-col items-center" data-aos="fade-left">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <Image src={profile} alt="Shofiqul Islam Sujon" layout="fill" objectFit="cover" />
          </div>

          {/* Skills */}
          <div className="mt-8 w-full">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">My Skills</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-6" data-aos="zoom-in">
              {Skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                  {skill.icon}
                  <span className="text-gray-700 dark:text-gray-300 mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
