import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-start mx-12 ">
      <span className="text-3xl mt-4 self-center">Çek bırak araba</span>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="transform -scale-x-100"
      >
        <span className="text-6xl">🚗</span>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
        className="transform -scale-x-100"
      >
        <span className="text-6xl">🚕</span>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="transform -scale-x-100"
      >
        <span className="text-6xl">🚛</span>
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, repeat: Infinity, ease: "backIn" }}
        className="transform -scale-x-100"
      >
        <span className="text-6xl">🏎️</span>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, repeat: Infinity, ease: "backInOut" }}
        className="transform -scale-x-100"
      >
        <span className="text-6xl">🚑</span>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, repeat: Infinity, ease: "circInOut" }}
        className="transform -scale-x-100"
      >
        <span className="text-6xl">🛵</span>
      </motion.div>
       
    </div>
  );
};

export default App;
