"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export type Tsession = {
    user?: {
        email?: string | undefined | null,
        name?: string | undefined | null,
        image?: string | undefined | null
    }
}

const Header = ({ session }: { session: Tsession }) => {
    const location = usePathname()
    const hideNavbar = location.startsWith('/dashboard') || location.startsWith('/login')
    return (
        !hideNavbar ? <Navbar session={session} /> : null
    );
};

export default Header;