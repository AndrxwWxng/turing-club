import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Turing Club</h3>
          <p>Empowering the next generation of coders</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Email: ahsturingclub@gmail.com</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-200">Facebook</a>
          <a href="#" className="hover:text-gray-200">Twitter</a>
          <a href="#" className="hover:text-gray-200">Instagram</a>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">&copy; 2024 Turing Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;