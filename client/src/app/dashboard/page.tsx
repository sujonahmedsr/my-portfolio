import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import profile from "@/assets/profile.jpg"

const DashboardPage = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Profile Section */}
      <div className="text-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mx-auto">
          <Image src={profile} alt="Shofiqul Islam Sujon" layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-3xl font-bold mt-2">Shofiqul Islam Sujon</h1>
        <p className="text-gray-500">MERN Stack Developer | Full Stack Enthusiast</p>
        <div className="mt-4">
          <a href="https://github.com/sujonahmedsr" className="text-blue-500 mx-2">GitHub</a>
          <a href="https://www.facebook.com/sujonahmeds81" className="text-blue-500 mx-2">LinkedIn</a>
        </div>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white dark:bg-gray-800 border shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold">15+</h2>
          <p className="text-gray-600">Completed Projects</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 border shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold">1.5+ Years</h2>
          <p className="text-gray-600">Experience</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 border shadow-md rounded-lg text-center">
          <h2 className="text-2xl font-bold">MERN & SQL</h2>
          <p className="text-gray-600">Tech Stacks</p>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-800 border shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Cycle Labs</h3>
            <p className="text-gray-600">Bicycle Store with role-based authentication.</p>
            <div className="mt-2">
              <Link href={'https://cycle-labs.netlify.app/'}  target={"_blank"} className="text-blue-500">View Project</Link>
            </div>
          </div>
          {/* More projects can be added here */}
        </div>
      </div>

      {/* Resume & Contact */}
      <div className="mt-6 text-center">
        <a href="/resume.pdf" download={"Shofiqul Islam (MERN))"} className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default DashboardPage;