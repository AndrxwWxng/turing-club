"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const teamMembers = [
  { name: 'Andrew Wang', role: 'President', imageName: 'talsnkdsf.jpg' },
  { name: 'Shushant Rana', role: 'Vice President', imageName: 'shushant-rana.jpg' },
  { name: 'Jeremiah Chen', role: 'Secretary', imageName: 'jeremiah-chen.jpg' },
  { name: 'Yihang Yu', role: 'Head of Marketing', imageName: 'yihang-yu2.jpg' },
];

const Team = () => {
  return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-800 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={`/images/${member.imageName}`}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default Team;