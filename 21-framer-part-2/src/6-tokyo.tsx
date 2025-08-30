import { animate, type AnimationPlaybackControls } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const App = () => {
  const count = useMotionValue(65);
  const controlsRef = useRef<AnimationPlaybackControls | null>(null);

  const rounded = useTransform(count, (latest) =>
    String.fromCharCode(Math.round(latest))
  );

  useEffect(() => {
    controlsRef.current = animate(count, 90, { duration: 2 });
    return () => controlsRef.current?.stop();
  }, []);

  const handleStop = () => {
    controlsRef.current?.stop();
  };

  return (
    <div className="h-screen grid place-items-center">
      <div className="grid gap-4">
        <span className="text-3xl">A-dan Z-ye geçiş</span>
        <button
          onClick={handleStop}
          className="p-4 bg-blue-500 text-white rounded-xl cursor-pointer"
        >
          Durdur
        </button>
        <motion.pre className="text-6xl text-center">{rounded}</motion.pre>
      </div>
    </div>
  );
};

export default App;
