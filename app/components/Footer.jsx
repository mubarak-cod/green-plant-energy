import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="https://res.cloudinary.com/dpsxbuxkr/image/upload/v1755419466/greenlogoo_ygvz7n.png"
            alt="Logo"
            width={120}
            height={120}
            style={{ objectFit: "contain" }}
            priority
          />
          <p className="text-gray-300 text-sm">
            Limited. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum optio illo modi provident consectetur est distinctio itaque suscipit ut dicta?
          </p>
          <p className="text-gray-400 text-xs">
            &copy; 2024 Green Plant Energy. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Services / Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Oil and Gas</li>
            <li>Warehousing</li>
            <li>Supply Chain and Logistics</li>
            <li>Real Estate</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Oil Products</li>
            <li>Clearing and Forwarding</li>
            <li>Container Tracking</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-2">
            Phone: 08183513133, 08100872002, 08023282049
          </p>
          <p className="text-gray-300 text-sm">
            Email: <a href="mailto:lomuwasynergylimited@gmail.com" className="hover:text-green-500 transition">greenplantenergylimited@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
