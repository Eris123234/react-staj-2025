import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`h-screen w-screen grid place-items-center transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`m-12 w-36 rounded-full flex p-2.5 cursor-pointer ${
          isDark ? "justify-start bg-gray-700" : "justify-end bg-yellow-400"
        } transition-colors duration-500`}
      >
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-lg"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Moon className="text-gray-800" size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <Sun className="text-yellow-500" size={26} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
    </div>
  );
};

export default App;
