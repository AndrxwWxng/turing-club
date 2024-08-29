import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue to-indigo-900"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Turing Club</h1>
        <p className="text-2xl mb-8">Coding for the Next Gen</p>
        <motion.a
          href="/mission"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
      <AnimatedBackground />
    </div>
  )
}

function AnimatedBackground() {
    return (
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 400 - 200],
              x: [0, Math.random() * 400 - 200],
              scale: [1, Math.random() + 0.5],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    )
  }