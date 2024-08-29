import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Header from '@/components/Header';

const AboutPage = () => {
  return (
    <div>
      <Header title="About Us" subtitle="Learn more about us" />
      <div className="container mx-auto px-4 py-8">
        <Card className='relative max-w-3xl mx-auto p-6 shadow-lg rounded-lg bg-white'>
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
      </div>
    </div>
  );
};

export default AboutPage;