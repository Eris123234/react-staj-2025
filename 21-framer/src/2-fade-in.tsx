import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.div
        className="h-24 rounded-lg bg-transparent text-white m-4 
        flex items-center justify-center"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-9xl">🌀</h1>
      </motion.div>
    </div>
  );
};

export default App;
