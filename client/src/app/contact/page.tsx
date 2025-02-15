import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { Metadata } from "next";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact With Me",
  description: "Get in touch with me for collaborations, project inquiries, or just to say hello. I'm always open to new opportunities and discussions!",
};


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
                <li className="flex items-center gap-2"><FaPhoneAlt /> <span className="font-bold">Phone: </span> 01798769363</li>
                <li className="flex items-center gap-2"><MdEmail /> <span className="font-bold">Email: </span>
                  <a href="mailto:shofiqul.sujon2021@gmail.com" className="underline">
                    shofiqul.sujon2021@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2"><FaAddressCard /> <span className="font-bold">Address: </span> Sirajganj, Sirajganj Sadar, Bangladesh</li>
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

        {/* contact form  */}
        <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
