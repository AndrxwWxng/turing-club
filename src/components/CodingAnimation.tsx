import { motion } from "framer-motion";

const CodingAnimation = () => {
    const lines = [
      "function turingClub() {",
      "  educate();",
      "  mentor();",
      "  inspire();",
      "  return nextGenCoders;",
      "}"
    ];
  
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-20">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute text-xl font-mono"
            style={{ top: `${index * 8}%` }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    );
  };
  
  export default CodingAnimation;