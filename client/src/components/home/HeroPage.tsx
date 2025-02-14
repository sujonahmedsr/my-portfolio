import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import profile from "@/assets/profile.jpg"

export default function HeroPage() {
  return (
    <section id="home" className="bg-gray-100 dark:bg-gray-900 min-h-[90vh] flex items-center justify-center py-10 px-4">
      <div className="container mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">

        {/* Left Side - Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Hi, I&apos;m <br /> <p className="text-blue-600 dark:text-blue-400 mt-5">Shofiqul Islam Sujon</p>
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A <span className="font-semibold text-blue-600 dark:text-blue-400">Front-End Developer</span> with a strong passion for building
            dynamic and user-friendly web applications. Currently, I’m on my journey to becoming a
            <span className="font-semibold text-blue-600 dark:text-blue-400"> Full-Stack Developer</span>.
          </p>

          {/* Experience */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              💼 <span className="font-semibold">Front-End Developer</span> - 1+ Year of experience in web development.
              <br />
              🔹 Proficient in <span className="font-semibold text-blue-600 dark:text-blue-400">React.js, Tailwind CSS, Redux, JavaScript and TypeScript</span>.
              <br />
              🚀 Building scalable and responsive web applications.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-6 flex items-center md:justify-start justify-center gap-5">
            <a href="/contact" className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
              Resume
            </a>
            {/* Social Media Links */}
            <a href="#" className="text-3xl text-blue-600 hover:text-blue-700"><FaFacebook /></a>
            <a href="#" className="text-3xl text-blue-700 hover:text-blue-800"><FaLinkedin /></a>
            <a href="#" className="text-3xl text-blue-400 hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="text-3xl text-gray-800 hover:text-gray-900"><FaGithub /></a>
          </div>
        </div>

        {/* Right Side - Image & Skills Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <Image src={profile} alt="Shofiqul Islam Sujon" layout="fill" objectFit="cover" />
          </div>

          {/* Skills */}
          <div className="mt-8 w-full">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">My Skills</h3>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-orange-600 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">HTML</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-blue-600 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-yellow-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-blue-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">TypesSript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-blue-400 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-blue-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">React.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiRedux className="text-purple-600 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Redux</span>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-black text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-green-600 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-green-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoMongodb className="text-green-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Mongoose</span>
              </div>
              {/* <div className="flex flex-col items-center">
                <SiMysql  className="text-green-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">My Sql</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoPostgresql  className="text-green-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Postgre sql</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPrisma  className="text-green-500 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Prisma</span>
              </div> */}
              <div className="flex flex-col items-center">
                <FaGitAlt className="text-red-600 text-5xl" />
                <span className="text-gray-700 dark:text-gray-300 mt-2">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
