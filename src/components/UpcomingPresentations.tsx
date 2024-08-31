import React from 'react';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const presentations = [
  { title: "Presentation 1", location: "Location 1", topic: "Topic 1", speaker: "Speaker 1" },
  { title: "Presentation 2", location: "Location 2", topic: "Topic 2", speaker: "Speaker 2" },
  { title: "Presentation 3", location: "Location 3", topic: "Topic 3", speaker: "Speaker 3" },
  { title: "Presentation 4", location: "Location 4", topic: "Topic 4", speaker: "Speaker 4" },
  { title: "Presentation 5", location: "Location 5", topic: "Topic 5", speaker: "Speaker 5" },
  { title: "Presentation 6", location: "Location 6", topic: "Topic 6", speaker: "Speaker 6" },
];

const UpcomingPresentations = () => {
  return (
    <div className="container mx-auto py-16 px-6 bg-white text-purple-700">
      <motion.h2
        className="text-center text-5xl font-bold font-mono text-purple-700 mb-12"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>// Upcoming Presentations</span>
      </motion.h2>
      <motion.div
        className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {presentations.map((presentation, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg shadow-xl overflow-hidden"
          >
            <Card className="relative p-8 bg-white border border-purple-300 text-purple-800 font-mono">
              <div className="rounded-lg p-5 bg-opacity-60 bg-gradient-to-b from-purple-200 to-pink-100">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold">
                    {`<${presentation.title} />`}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    <span className="block font-semibold text-purple-500">// Location:</span> {presentation.location}
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    <span className="block font-semibold text-purple-500">// Topic:</span> {presentation.topic}
                  </p>
                  <p className="text-lg leading-relaxed mt-2">
                    <span className="block font-semibold text-purple-500">// Speaker:</span> {presentation.speaker}
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default UpcomingPresentations;
