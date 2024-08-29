import { motion } from 'framer-motion'
import CodingAnimation from './CodingAnimation';

const Hero = () => {
    return (
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
        <CodingAnimation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4">Turing Club</h1>
          <p className="text-2xl mb-8">Coding for the Next Gen</p>
          <motion.a
            href="/about"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    );
  };

  export default Hero;