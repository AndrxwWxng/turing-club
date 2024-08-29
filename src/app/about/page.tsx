import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import css from 'styled-jsx/css';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const aboutPage = () => {
    return (
        <Card className='relative pt-6 max-w-3xl mx-auto p-6 shadow-lg rounded-lg bg-white'>
            <CardHeader>
                <center><CardTitle>About Turing Club</CardTitle></center>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <p>The Turing Club is all about spreading computer science. It has been a key part of the CS Forum at Allen High School for over half a decade.  
                    We teach kids across Allen ISD computer science topics from web development to machine learning. Every year, we help hundreds of young students
                    dip their toes into the 
                   CS scene. </p>
            </CardContent>
            <CardFooter>
                <p></p>
            </CardFooter>
        </Card>



        
        // <div className="py-2 px-4" >
        // <style>
        // </style>
        // <section className="bg-red-200 h-100 w-15">The Turing Club is all about spreading computer science. It has been a key part of the CS Forum at Allen <br></br> 
        // High School for over half a decade.  We teach kids across Allen ISD computer science topics from web <br></br>
        // development to machine learning. Every year, we help hundreds of young students dip their toes into the <br></br>
        // CS scene. </section>
        // </div>
    );
};

export default aboutPage;