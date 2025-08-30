import * as motion from "motion/react-client";

export default function Keyframes() {
  return (
    <div className="h-screen grid place-items-center">
      <div className="flex flex-col gap-4 items-center">
        <span className="text-6xl">Kırık kalpler durağı</span>
        <motion.div
          drag
          animate={{
            scale: [1, 2, 1, 2, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="w-24 h-24 rounded-xl flex items-center justify-center"
        >
          <span className="text-6xl">❤️‍🩹</span>
        </motion.div>
      </div>
    </div>
  );
}
