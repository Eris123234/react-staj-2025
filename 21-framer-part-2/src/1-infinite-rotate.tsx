import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const App = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="m-12 w-24 h-24 rounded-xl bg-red-500 flex items-center justify-center"
    >
      <ArrowRight className="text-white" />
    </motion.div>
  );
};

export default App;
