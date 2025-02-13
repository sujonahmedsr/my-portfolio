"use client"
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
    const location = usePathname()
    const hideNavbar = location.startsWith('/dashboard')
    return (
        !hideNavbar && <footer className="bg-gray-100 dark:text-white py-10 text-center dark:bg-gray-900 border-t px-4">
            {/* Motivational Quote */}
            <p className="text-lg italic mb-6">&quot;The only way to do great work is to love what you do.&quot; - Steve Jobs</p>

            {/* Copyright */}
            <div className="mt-6 text-sm">
                <p>© 2025 Shofiqul Islam Sujon. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
