import About from "@/components/home/About";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me, my journey in web development, skills, and passion for technology. Discover how I create innovative solutions through code!",
};

export default function AboutMe() {
  return (
    <About />
  );
}
