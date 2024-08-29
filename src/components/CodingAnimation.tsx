import { motion } from "framer-motion";

const CodingAnimation = () => {
    const lines = [
        { text: "  function turingClub() {", top: "25%", left: "10%", color: "text-green-400" },
        { text: "  educate();", top: "30%", left: "20%", color: "text-yellow-400" },
        { text: "  mentor();", top: "35%", right: "25%", color: "text-blue-400" },
        { text: "  inspire();", top: "22%", left: "15%", color: "text-red-400" },
        { text: "  return nextGenCoders;", bottom: "32%", right: "20%", color: "text-purple-400" },
        { text: "}", bottom: "28%", left: "12%", color: "text-pink-400" },
    
        { text: "const coders = [];", top: "27%", right: "22%", color: "text-teal-400" },
        { text: "for (let i = 0; i < 100; i++) {", bottom: "30%", left: "18%", color: "text-orange-400" },
        { text: "coders.push(new Coder());", top: "33%", right: "15%", color: "text-amber-400" },
        { text: "return coders;", bottom: "31%", left: "21%", color: "text-lime-400" },
    
        { text: "learn: \"fast\",", top: "23%", right: "12%", color: "text-cyan-400" },
        { text: "code: \"well\",", bottom: "30%", right: "18%", color: "text-fuchsia-400" },
        { text: "innovate: \"always\"", top: "29%", right: "10%", color: "text-rose-400" },
    
        { text: "function createFuture() {", top: "20%", left: "25%", color: "text-violet-400" },
        { text: "return coders;", top: "34%", right: "17%", color: "text-emerald-400" },
        { text: "}", bottom: "33%", left: "25%", color: "text-indigo-400" },
    
        { text: "function developSkills() {", top: "28%", left: "22%", color: "text-yellow-500" },
        { text: "  practice();", top: "33%", left: "18%", color: "text-red-500" },
        { text: "  challenge();", top: "30%", left: "14%", color: "text-blue-500" },
        { text: "  succeed();", top: "35%", left: "12%", color: "text-green-500" },
        { text: "  return futureLeaders;", bottom: "28%", right: "25%", color: "text-purple-500" },
        { text: "}", bottom: "25%", left: "22%", color: "text-pink-500" },
    
        { text: "const leaders = [];", top: "32%", right: "24%", color: "text-teal-500" },
        { text: "for (let i = 0; i < 50; i++) {", bottom: "30%", left: "15%", color: "text-orange-500" },
        { text: "leaders.push(new Leader());", top: "29%", right: "20%", color: "text-amber-500" },
        { text: "return leaders;", bottom: "33%", left: "17%", color: "text-lime-500" },
    
        { text: "learn: \"deeply\",", top: "21%", right: "15%", color: "text-cyan-500" },
        { text: "create: \"boldly\",", bottom: "32%", right: "10%", color: "text-fuchsia-500" },
        { text: "grow: \"steadily\"", top: "25%", right: "20%", color: "text-rose-500" },
    
        { text: "practice();", top: "24%", left: "16%", color: "text-violet-500" },
        { text: "challenge();", top: "30%", left: "20%", color: "text-emerald-500" },
        { text: "succeed();", top: "31%", right: "22%", color: "text-indigo-500" },
        { text: "return futureLeaders;", bottom: "27%", right: "28%", color: "text-yellow-600" },
    
        { text: "function shapeTomorrow() {", top: "22%", left: "18%", color: "text-red-600" },
        { text: "return leaders;", top: "33%", right: "12%", color: "text-blue-600" },
        { text: "}", bottom: "30%", left: "20%", color: "text-green-600" },
    
        // Additional lines
        { text: "build();", top: "20%", left: "22%", color: "text-purple-600" },
        { text: "code();", top: "25%", left: "16%", color: "text-pink-600" },
        { text: "innovate();", top: "28%", right: "28%", color: "text-teal-600" },
        { text: "create();", top: "30%", right: "25%", color: "text-orange-600" },
    
        { text: "function inspireChange() {", top: "32%", left: "24%", color: "text-amber-600" },
        { text: "lead();", top: "26%", left: "16%", color: "text-lime-600" },
        { text: "return changeMakers;", top: "23%", right: "28%", color: "text-cyan-600" },
        { text: "}", top: "31%", right: "20%", color: "text-fuchsia-600" }
    ];
    
    

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-50">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className={`absolute text-xl font-mono ${line.color}`}
          style={{ ...line }}
        >
          {line.text}
        </motion.div>
      ))}
    </div>
  );
};

export default CodingAnimation;
