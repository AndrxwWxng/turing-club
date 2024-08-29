import { motion } from "framer-motion";

const CodingAnimation = () => {
    // function RandomNumber() {
    //     const randomNumber = Math.floor(Math.random() * 100);
    //     return <p>{randomNumber}</p>;
    //   }
      
    const lines = [
        { text: "  function turingClub() {", top: "25%", left: "5%", color: "text-green-400" },
        { text: "  educate();", top: "15%", left: "15%", color: "text-yellow-400" },
        { text: "  mentor();", top: "15%", left: "25%", color: "text-blue-400" },
        { text: "  inspire();", top: "35%", left: "50%", color: "text-red-400" },
        { text: "  return nextGenCoders;", bottom: "10%", left: "45%", color: "text-purple-400" },
        { text: "}", top: "76%", left: "96%", color: "text-pink-400" },
    
        { text: "const coders = [];", top: "10%", left: "65%", color: "text-teal-400" },
        { text: "for (let i = 0; i < 100; i++) {", top: "15%", left: "80%", color: "text-orange-400" },
        { text: "coders.push(new Coder());", top: "80%", left: "75%", color: "text-amber-400" },
        { text: "return coders;", top: "25%", left: "65%", color: "text-lime-400" },
    
        { text: "learn: \"fast\",", top: "50%", left: "10%", color: "text-cyan-400" },
        { text: "code: \"well\",", top: "60%", left: "20%", color: "text-fuchsia-400" },
        { text: "innovate: \"always\"", top: "70%", left: "30%", color: "text-rose-400" },
    
        { text: "function createFuture() {", top: "15%", left: "40%", color: "text-violet-400" },
        { text: "return coders;", top: "25%", left: "50%", color: "text-emerald-400" },
        { text: "}", top: "35%", left: "60%", color: "text-indigo-400" },
    
        { text: "function developSkills() {", top: "25%", left: "25%", color: "text-yellow-500" },
        { text: "  practice();", top: "35%", left: "35%", color: "text-red-500" },
        { text: "  challenge();", bottom: "10%", right: "25%", color: "text-blue-500" },
        { text: "  succeed();", top: "55%", left: "60%", color: "text-green-500" },
        { text: "  return futureLeaders;", top: "75%", left: "40%", color: "text-purple-500" },
        { text: "}", top: "75%", left: "15%", color: "text-pink-500" },
    
        { text: "const leaders = [];", top: "40%", left: "60%", color: "text-teal-500" },
        { text: "for (let i = 0; i < 50; i++) {", top: "50%", left: "70%", color: "text-orange-500" },
        { text: "leaders.push(new Leader());", top: "90%", left: "80%", color: "text-amber-500" },
        { text: "return leaders;", top: "65%", left: "55%", color: "text-lime-500" },
    
        { text: "learn: \"deeply\",", top: "40%", left: "15%", color: "text-cyan-500" },
        { text: "create: \"boldly\",", top: "50%", left: "25%", color: "text-fuchsia-500" },
        { text: "grow: \"steadily\"", top: "60%", left: "35%", color: "text-rose-500" },
    
        { text: "practice();", top: "60%", left: "10%", color: "text-violet-500" },
        { text: "challenge();", top: "70%", left: "20%", color: "text-emerald-500" },
        { text: "succeed();", top: "80%", left: "30%", color: "text-indigo-500" },
        { text: "return futureLeaders;", top: "90%", left: "20%", color: "text-yellow-600" },
    
        { text: "function shapeTomorrow() {", top: "25%", left: "75%", color: "text-red-600" },
        { text: "return leaders;", bottom: "20%", left: "60%", color: "text-blue-600" },
        { text: "}", top: "45%", left: "80%", color: "text-green-600" },
    
        { text: "build();", top: "70%", left: "5%", color: "text-purple-600" },
        { text: "code();", top: "80%", left: "15%", color: "text-pink-600" },
        { text: "innovate();", top: "90%", left: "10%", color: "text-teal-600" },
        { text: "create();", top: "70%", left: "70%", color: "text-orange-600" },
    
        { text: "function inspireChange() {", top: "34%", left: "70%", color: "text-amber-600" },
        { text: "lead();", top: "40%", right: "10%", color: "text-lime-600" },
        { text: "return changeMakers;", top: "64%", left: "75%", color: "text-cyan-600" },
        { text: "}", top: "60%", left: "70%", color: "text-fuchsia-600" }
    ];
    
    
    
    
    

    return (
        <div className="relative w-full h-full overflow-hidden">
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
                    style={{ top: line.top, left: line.left, bottom: line.bottom, right: line.right }}
                >
                    {line.text}
                </motion.div>
            ))}
        </div>
    );
};

export default CodingAnimation;