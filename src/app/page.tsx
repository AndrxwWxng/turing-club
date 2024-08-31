"use client";
import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <center>
      <div className="bg-white py-3 md:flex-row justify-between gap-8 width-75">
          <Card className="relative max-w-xl max-h-m flex-1 p-6 shadow-lg rounded-lg bg-indigo-900 text-white height-10 width-50">
            <div className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-center">Upcoming Presentations</CardTitle>
            </CardHeader>
            </div>
          </Card>
      </div>
      </center>
      <div className="flex container mx-auto px-4 py-8">
      <div className="bg-white py-3 px-5 md:flex-row justify-between gap-8 width-75">
          <Card className="relative max-w-xl flex-1 p-6 shadow-lg rounded-lg bg-indigo-600 text-white width-50">
            <div className="bg-indigo-900 rounded-lg">
            <CardHeader>
              <CardTitle className="text-center">Presentation Name</CardTitle>
            </CardHeader>
            </div>
            <div className="pt-4">
            <CardContent>
              <p className="text-lg">
                Location: n/a <br></br>
                Topic: n/a <br></br>
                Speaker: n/a <br></br>
              </p>
            </CardContent>
            </div>
          </Card>
      </div>
      <div className="bg-white py-3 px-5 md:flex-row justify-between gap-8 width-75">
          <Card className="relative max-w-xl flex-1 p-6 shadow-lg rounded-lg bg-indigo-600 text-white width-50">
            <div className="bg-indigo-900 rounded-lg">
            <CardHeader>
              <CardTitle className="text-center">Presentation Name</CardTitle>
            </CardHeader>
            </div>
            <div className="pt-4">
            <CardContent>
              <p className="text-lg">
                Location: n/a <br></br>
                Topic: n/a <br></br>
                Speaker: n/a <br></br>
              </p>
            </CardContent>
            </div>
          </Card>
      </div>
      <div className="bg-white py-3 px-5 md:flex-row justify-between gap-8 width-75">
          <Card className="relative max-w-xl flex-1 p-6 shadow-lg rounded-lg bg-indigo-600 text-white width-50">
            <div className="bg-indigo-900 rounded-lg">
            <CardHeader>
              <CardTitle className="text-center">Presentation Name</CardTitle>
            </CardHeader>
            </div>
            <div className="pt-4">
            <CardContent>
              <p className="text-lg">
                Location: n/a <br></br>
                Topic: n/a <br></br>
                Speaker: n/a <br></br>
              </p>
            </CardContent>
            </div>
          </Card>
      </div>
      <div className="bg-white py-3 px-5 md:flex-row justify-between gap-8 width-75">
          <Card className="relative max-w-xl flex-1 p-6 shadow-lg rounded-lg bg-indigo-600 text-white width-50">
            <div className="bg-indigo-900 rounded-lg">
            <CardHeader>
              <CardTitle className="text-center">Presentation Name</CardTitle>
            </CardHeader>
            </div>
            <div className="pt-4">
            <CardContent>
              <p className="text-lg">
                Location: n/a <br></br>
                Topic: n/a <br></br>
                Speaker: n/a <br></br>
              </p>
            </CardContent>
            </div>
          </Card>
      </div>
      </div>

    </>
  );
};

export default HomePage;