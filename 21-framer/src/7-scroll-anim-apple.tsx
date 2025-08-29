import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <motion.div
        className="w-24 h-24 rounded-lg bg-red-500 text-white m-32 
        flex items-center justify-center"
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl select-none">Tıkla</h1>
      </motion.div>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
      <h1 className="text-9xl">Hello</h1>
    </div>
  );
};

export default App;
