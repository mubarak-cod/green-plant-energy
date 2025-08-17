// components/Navbar.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-white">
                        
                        {/* <Image
                            src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419466/greenlogoo_ygvz7n.png"
                            alt="Logo"
                            width={120}
                            height={120}           
                            style={{ objectFit: "contain" }}
                            priority
                        /> */}

                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="#home" className="text-white text-xs sm:text-sm md:text-base hover:text-green-400 transition">
                            Home
                        </Link>
                        <Link href="#about" className="text-white text-xs sm:text-sm md:text-base hover:text-green-400 transition">
                            About
                        </Link>
                        <Link href="#services" className="text-white text-xs sm:text-sm md:text-base hover:text-green-400 transition">
                            Services
                        </Link>
                        <Link href="#projects" className="text-white text-xs sm:text-sm md:text-base hover:text-green-400 transition">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-white text-xs sm:text-sm md:text-base hover:text-green-400 transition">
                            Contact
                        </Link>
                    </div>

                    {/* Book a Call Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#book"
                            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-black rounded-lg font-semibold transition"
                        >
                            Book a Call
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-black/95 backdrop-blur-md"
                >
                    <div className="px-4 py-6 space-y-4 flex flex-col text-center">
                        <Link href="#home" className="text-white hover:text-green-400">
                            Home
                        </Link>
                        <Link href="#about" className="text-white hover:text-green-400">
                            About
                        </Link>
                        <Link href="#services" className="text-white hover:text-green-400">
                            Services
                        </Link>
                        <Link href="#projects" className="text-white hover:text-green-400">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-white hover:text-green-400">
                            Contact
                        </Link>

                        {/* Book a Call Button in Mobile */}
                        <Link
                            href="#book"
                            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg font-semibold transition"
                        >
                            Book a Call
                        </Link>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
