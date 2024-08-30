import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Header title="About Us" subtitle="Learn more about us" />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          <Card className="relative max-w-xl flex-1 p-6 shadow-lg rounded-lg bg-white">
            <CardHeader>
              <CardTitle className="text-center">About Turing Club</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                The Turing Club is all about spreading computer science. It has been a key part of the CS Forum at Allen High School for over half a decade.
                We teach kids across Allen ISD computer science topics from web development to machine learning. Every year, we help hundreds of young students
                dip their toes into the CS scene.
              </p>
            </CardContent>
          </Card>

          <Card className="relative max-w-xl flex-1 p-6 shadow-lg rounded-lg bg-white">
            <CardHeader>
              <CardTitle className="text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                The goal of Turing Club is to educate/mentor the younger generation on computer science and 
                help young coders get a headstart within their coding journey. Every week we go 
                to Allen middle schools and teach fundamental coding topics.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
