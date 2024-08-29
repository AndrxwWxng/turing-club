"use client";
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Turing Club - Coding for the Next Gen</title>
        <meta name="description" content="Turing Club - Educating and mentoring the next generation of coders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-indigo-900">
        {/* <Navbar /> */}
        <Hero />
      </div>
    </>
  );
};

export default HomePage;