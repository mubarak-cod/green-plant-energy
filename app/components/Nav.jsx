"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + RC number */}
          <div className="flex items-center flex-shrink-0 space-x-3">
            <Link href="/">
              <Image
                src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419466/greenlogoo_ygvz7n.png"
                alt="Logo"
                width={120}
                height={120}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
            <span className="text-xs text-gray-500">Rc : 8731821</span>
          </div>

          {/* Desktop Nav (visible ≥1180px) */}
          <div className="hidden [@media(min-width:1180px)]:flex flex-1 justify-center space-x-10">
            <Link href="/who-we-are" className="text-black hover:text-green-600 text-sm">
              Who we are
            </Link>
            <Link href="#partnerships" className="text-black hover:text-green-600 text-sm">
              Partnership Opportunities
            </Link>
            <Link href="/sustainability" className="text-black hover:text-green-600 text-sm">
              Sustainability
            </Link>
            <Link href="/businesses" className="text-black hover:text-green-600 text-sm">
              Our Businesses
            </Link>
            {/* <Link href="#news" className="text-black hover:text-green-600 text-sm">
              News
            </Link> */}
          </div>

          {/* Contact Button (visible ≥1180px) */}
          <div className="hidden [@media(min-width:1180px)]:flex items-center">
            <Link
              href="/contact"
              className="flex items-center bg-green-900 text-white px-5 py-2 rounded-none text-sm font-semibold hover:bg-green-800 transition"
            >
              CONTACT US
              <ChevronRight className="ml-2" size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button (visible <1180px) */}
          <div className="[@media(min-width:1180px)]:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
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
          className="[@media(min-width:1180px)]:hidden bg-white shadow-md"
        >
          <div className="px-4 py-6 space-y-4 flex flex-col text-left">
            <Link href="/who-we-are" className="text-black hover:text-green-600">
              Who we are
            </Link>
            <Link href="#partnerships" className="text-black hover:text-green-600">
              Partnership Opportunities
            </Link>
            <Link href="/sustainability" className="text-black hover:text-green-600">
              Sustainability
            </Link>
            <Link href="/businesses" className="text-black hover:text-green-600">
              Our Businesses
            </Link>
            <Link href="#news" className="text-black hover:text-green-600">
              News
            </Link>

            {/* Contact Button in Mobile */}
            <Link
              href="/contact"
              className="flex items-center justify-center bg-green-900 text-white px-5 py-2 text-sm font-semibold hover:bg-green-800 transition"
            >
              CONTACT US <ChevronRight className="ml-2" size={18} />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>

    <Footer />
    </div>
  );
};

export default Page;
