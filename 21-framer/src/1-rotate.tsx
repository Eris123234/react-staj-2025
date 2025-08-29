import { ArrowBigLeft } from "lucide-react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <motion.ul
        className="w-24 h-24 rounded-lg bg-red-500 m-4 
        flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <ArrowBigLeft className="text-white" />
      </motion.ul>
      <div
        className="w-24 h-24 rounded-lg bg-blue-500 m-4 animate-[spin_1.5s] 
        flex items-center justify-center"
      >
        <ArrowBigLeft className="text-white" />
      </div>
    </div>
  );
};

export default App;
