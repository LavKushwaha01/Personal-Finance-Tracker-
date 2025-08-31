"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChartAreaInteractive } from "@/React/areachart"

export default function ChartOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-[400px] flex items-center justify-center">
      {isVisible ? (
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-25 ml-30 w-320 mr-10 p-10 bg-blue-200 rounded-4xl dark:bg-neutral-900"
        >
          <ChartAreaInteractive />
         
        </motion.div>

      ) : (
        <p className="font-bold text-3xl">Chart will load when visible...</p>
      )}
    </div>
  );
}
