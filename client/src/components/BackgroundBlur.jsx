import { motion } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundBlur({ children, isOpen, setIsOpen }) {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "initial";
    }

    return () => {
      body.style.overflow = "initial";
    };
  }, [setIsOpen]);
  return (
    <motion.div
      onKeyDown={(e) => {
        if (e.key === "Escape" || e.key === "Esc") {
          setIsOpen(false);
        }
        console.log(e);
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blurry-background fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black/50 backdrop-blur-lg"
      onClick={(e) => {
        const hasTargetClassName = e.target.className;
        if (typeof hasTargetClassName === "string") {
          if (e.target.className.includes("blurry-background")) {
            setIsOpen(false);
          } else {
            return;
          }
        }
      }}>
      {children}
    </motion.div>
  );
}
