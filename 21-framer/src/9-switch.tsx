import { motion } from "motion/react";
import { useState } from "react";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const className = isOn ? "justify-start" : "justify-end";
  return (
    <div className="h-screen w-screen grid place-items-center">
      <button
        onClick={toggleSwitch}
        className={`m-12 w-36 bg-purple-500 rounded-full flex 
        p-2.5 cursor-pointer ${className}`}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
          className="w-12 h-12 bg-purple-800 rounded-full"
        ></motion.div>
      </button>
    </div>
  );
};

export default App;

