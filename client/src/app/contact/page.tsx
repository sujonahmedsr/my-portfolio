import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="min-h-[90vh] dark:bg-gray-900 flex items-center justify-center px-4 py-10">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-screen-lg flex-col justify-between gap-10 lg:flex-row lg:gap-20">

          {/* Left Side - Contact Info */}
          <div className="max-w-sm ">
            <h1 className="mb-4 text-5xl font-extrabold">Get in Touch</h1>
            <p className="text-lg ">
              Feel free to reach out for any inquiries, collaborations, or support. We’d love to hear from you!
            </p>

            {/* Contact Details */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold ">Contact Info</h3>
              <ul className="mt-4 space-y-2">
                <li><span className="font-bold">Phone: </span> 01798769363</li>
                <li><span className="font-bold">Email: </span>
                  <a href="mailto:shofiqul.sujon2021@gmail.com" className="underline">
                    shofiqul.sujon2021@gmail.com
                  </a>
                </li>
                <li><span className="font-bold">Address: </span> Sirajganj, Sirajganj Sadar, Bangladesh</li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-3xl text-blue-600 hover:text-blue-700"><FaFacebook /></a>
              <a href="#" className="text-3xl text-blue-700 hover:text-blue-800"><FaLinkedin /></a>
              <a href="#" className="text-3xl text-blue-400 hover:text-blue-500"><FaTwitter /></a>
              <a href="#" className="text-3xl text-gray-800 hover:text-gray-900"><FaGithub /></a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="mx-auto flex w-full flex-col gap-3 rounded-xl border  shadow-lg dark:bg-gray-800 dark:text-white p-6">

            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="w-full">
                <Label htmlFor="firstname" className="">First Name</Label>
                <Input type="text" id="firstname" placeholder="Enter First Name" className="bg-white/30  placeholder-white dark:bg-gray-700 dark:text-white" />
              </div>
              <div className="w-full">
                <Label htmlFor="lastname" className="">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Enter Last Name" className="bg-white/30  placeholder-white dark:bg-gray-700 dark:text-white" />
              </div>
            </div>

            {/* Email Field */}
            <div className="w-full">
              <Label htmlFor="email" className="">Email</Label>
              <Input type="email" id="email" placeholder="Enter Email Address" className="bg-white/30 text-white placeholder-white dark:bg-gray-700 dark:text-white" />
            </div>

            {/* Subject Field */}
            <div className="w-full">
              <Label htmlFor="subject" className="">Subject</Label>
              <Input type="text" id="subject" placeholder="Enter Subject" className="bg-white/30 text-white placeholder-white dark:bg-gray-700 dark:text-white" />
            </div>

            {/* Message Field */}
            <div className="w-full">
              <Label htmlFor="message" className="">Message</Label>
              <Textarea placeholder="Type your message here..." id="message" className="bg-white/30 text-white placeholder-white dark:bg-gray-700 dark:text-white" />
            </div>

            {/* Send Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded dark:bg-blue-400 dark:hover:bg-blue-500">
              Send Message
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
