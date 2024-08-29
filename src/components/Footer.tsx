import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">Turing Club</h3>
          <p className="text-sm">Empowering the next generation of coders</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold">Contact Us</h4>
          <p className="flex items-center space-x-2">
            <Mail className="w-5 h-5"/>
            <span>ahsturingclub@gmail.com </span>
            </p>
        </div>
        <div className="flex space-x-6">
        <a href="#" aria-label="Facebook" className="hover:text-gray-200">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-200">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-200">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm opacity-75">&copy; 2024 Turing Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;