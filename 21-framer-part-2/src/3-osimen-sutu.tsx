import { motion } from "motion/react";

const App = () => {
  return (
    <div className="flex flex-col gap-4 items-start mx-12 mt-96 ">
      <motion.div
        className="bg-red-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: -300, rotate: -1000 }}
          transition={{ duration: 2, repeat: Infinity, ease: "backInOut" }}
          className="bg-blue-500 transform -scale-x-100"
        >
          <span className="text-5xl">⚽️</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default App;
