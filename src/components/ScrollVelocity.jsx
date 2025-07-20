import { motion } from "framer-motion";

export default function ScrollVelocity({ text = "ABOUT ME", repeatCount = 30 }) {
  const repeatedText = Array(repeatCount).fill(text).join(" • ");

  return (
    <div className="relative w-full border-y border-white/20 overflow-hidden bg-black py-1">
      <motion.div
        className="flex whitespace-nowrap text-white text-[1.25rem] font-extrabold tracking-wide"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        <span className="mx-6">{repeatedText}</span>
        <span className="mx-6">{repeatedText}</span>
      </motion.div>
    </div>
  );
}
