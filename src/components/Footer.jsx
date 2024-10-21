import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>Email: bdshukla@dbrau.ac.in</p>
            <p>Phone: +91 9411461014</p>
            <p>Address: Sanskriti Bhawan, Civil Lines, Agra-2820002</p>
          </div>
          <div className="hidden">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXLine />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="hidden">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/exhibitions"
                  className="text-gray-400 hover:text-white"
                >
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white">
                  Dynasties
                </a>
              </li>
              <li>
                <a href="/events" className="text-gray-400 hover:text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/visit" className="text-gray-400 hover:text-white">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Dr.Bhim Rao Ambedkar Univ. Museum
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
