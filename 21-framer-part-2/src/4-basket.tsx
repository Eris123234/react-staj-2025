import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const App = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const hoopRef = useRef<HTMLSpanElement>(null);

  function isOverlapping(el1: HTMLElement, el2: HTMLElement): boolean {
    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
      r1.right < r2.left ||
      r1.left > r2.right ||
      r1.bottom < r2.top ||
      r1.top > r2.bottom
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!ballRef.current || !hoopRef.current) {
        return;
      }
      if (!isOverlapping(ballRef.current, hoopRef.current)) {
        return;
      }
      alert("Sayı! 🏀✅");
      clearInterval(interval); // sürekli alert basmasın
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-start mx-12 mt-96 ">
      <motion.div
        ref={ballRef}
        drag
        initial={{}}
        animate={{ rotate: 1000 }}
        transition={{ duration: 2, repeat: Infinity, ease: "backInOut" }}
        className=""
      >
        <span className="text-5xl">🏀</span>
      </motion.div>

      <span ref={hoopRef} className="text-6xl z-10">
        🗑️
      </span>
    </div>
  );
};

export default App;
