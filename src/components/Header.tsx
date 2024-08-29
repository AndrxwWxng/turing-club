"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 text-white pt-24 px-4 h-[50vh] items-center justify-center flex pb-16"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-3">{title}</h1>
        {subtitle && <p className="text-2xl">{subtitle}</p>}
      </div>
    </motion.div>
  );
};

export default Header;