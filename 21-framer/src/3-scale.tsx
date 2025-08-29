import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.ul
        className="w-24 h-24 rounded-lg bg-red-500 text-white m-32 
        flex items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-1xl text-center">Fırsatı kaçırma</h1>
      </motion.ul>
    </div>
  );
};

export default App;
