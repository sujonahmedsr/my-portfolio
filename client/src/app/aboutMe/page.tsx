import Image from "next/image";
import profile from "@/assets/profile.jpg"
import { Card, CardContent } from "@/components/ui/card";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiRedux, SiNextdotjs, SiTypescript, SiMysql, SiPrisma } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
export default function AboutMe() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-12 lg:px-20 transition-all">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 mx-auto px-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Hello! I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Shofiqul Islam Sujon</span>, a passionate
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Front-End Developer</span> with expertise in
              <span className="font-semibold text-blue-600 dark:text-blue-400"> HTML, CSS, JavaScript, Tailwind CSS, and React.js</span>.
              Currently, I&apos;m learing new <span className="font-semibold">Tehcnologies</span>, aiming to become a
              <span className="font-semibold text-blue-600 dark:text-blue-400"> Full-Stack Web Developer</span>.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              I enjoy problem-solving through code and exploring new technologies. My goal is to become a proficient full-stack developer.
            </p>

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
          <div className="relative w-72 h-72 rounded overflow-hidden border-4 border-blue-600 shadow-lg mx-auto transform rotate-6 hover:rotate-0 hover:shadow-xl transition-all duration-500">
  <Image src={profile} alt="Shofiqul Islam Sujon" layout="fill" objectFit="cover" />
</div>
        </div>

        {/* Skills */}
        <div className="mt-16 w-full">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Skills</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-12">
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
            <div className="flex flex-col items-center">
              <SiMysql className="text-gray-500 text-5xl" />
              <span className="text-gray-700 dark:text-gray-300 mt-2">My Sql</span>
            </div>
            <div className="flex flex-col items-center">
              <BiLogoPostgresql className="text-gray-500 text-5xl" />
              <span className="text-gray-700 dark:text-gray-300 mt-2">Postgre sql</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPrisma className="text-green-500 text-5xl" />
              <span className="text-gray-700 dark:text-gray-300 mt-2">Prisma</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-red-600 text-5xl" />
              <span className="text-gray-700 dark:text-gray-300 mt-2">Git</span>
            </div>
          </div>
        </div>

        {/* Educational Qualification */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Educational Qualification</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 dark:text-gray-300">
            <Card className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg">
              <CardContent className="space-y-2">
                <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">Diploma in Computer Technology</h4>
                <p className="text-lg font-semibold">Sirajganj Polytechnic Institute</p>
                <p className="text-base text-gray-500">Session: 2020-2021 (End: 2024)</p>
                <p className="text-sm text-gray-500">Diploma in Computer Technology is a program that provides foundational knowledge in computer hardware, software, programming, and networking, preparing students for entry-level IT and tech-related roles.</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg">
              <CardContent className="space-y-2">
                <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400">S.S.C Science</h4>
                <p className="text-lg font-semibold">Mallika Sanaullah Ansary High School</p>
                <p className="text-base text-gray-500">Session: 2019-2020</p>
                <p className="text-sm text-gray-500">SSC (Secondary School Certificate) is a public examination taken by students at the end of their secondary education, typically after completing Grade 10. It assesses knowledge in various subjects such as Mathematics, Science, and Language, and is a prerequisite for higher secondary education.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">What I Do</h3>
          <div className="mt-4 text-gray-700 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-lg"><span className="text-4xl">💻</span> <span className="font-semibold">Web Development</span> – Building modern and responsive web applications.</Card>
            <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-lg"><span className="text-4xl">🎨</span> <span className="font-semibold">UI/UX Enthusiast</span> – Focused on creating seamless user experiences.</Card>
            <Card className="flex flex-col gap-2 text-center p-10 dark:bg-gray-800 rounded hover:shadow-lg"><span className="text-4xl">🚀</span> <span className="font-semibold">Continuous Learning</span> – Exploring new technologies like Redux, Next.js, Node.js and SQL Backend.</Card>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Goals</h3>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            I aspire to build <span className="font-semibold text-blue-600 dark:text-blue-400">efficient, scalable, and visually appealing</span> web applications.
            My dream is to work on projects that solve real-world problems while continuously growing as a developer.
          </p>
        </div>

        <div className="mt-14">
          <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 transition">
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
