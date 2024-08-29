"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
      <Navbar />
      {/* these are for the animated background       */}
      

      {/* this is the content       */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/TuringClubLogo.svg"
            alt="Turing Club Logo"
            width={450}
            height={450}
            className="mb-8"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">
            Welcome to Turing Club
          </h1>
          <p className="text-xl mb-8">Coding for the Next Gen</p>
          <p className="max-w-2xl mb-12">
            Our mission is to educate and mentor the younger generation on computer science,
            helping young coders get a headstart in their coding journey. We visit middle schools in Allen ISD
            weekly to teach fundamental coding topics.
          </p>
          <div className="space-x-4">
            <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Learn More
            </Link>
            <Link href="/calendar" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              View Calendar
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;