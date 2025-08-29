import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark(!isDark);
  const className = isDark ? "justify-start" : "justify-end";
  return (
    <div
      className={`h-screen w-screen grid place-items-center transition-colors duration-500 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={toggleSwitch}
        className={`m-12 w-36 bg-purple-500 rounded-full flex 
        p-2.5 cursor-pointer ${className}`}
      >
        {isDark ? (
          <motion.div
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
            className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center"
          >
            <Moon />
          </motion.div>
        ) : (
          <motion.div
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
            className="w-12 h-12 bg-purple-800 rounded-full flex items-center justify-center"
          >
            <Sun className="text-white" />
          </motion.div>
        )}
      </button>
    </div>
  );
};

export default App;
