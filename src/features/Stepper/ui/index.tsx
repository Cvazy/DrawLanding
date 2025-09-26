"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { STEPPER_DATA } from "../models";
import { StepEntity } from "@/entities";

export const Stepper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setScreenWidth(window.innerWidth);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;

    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      info.offset.x < -threshold &&
      currentIndex < STEPPER_DATA.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!isMobile) {
    return (
      <div
        className={
          "grid grid-cols-4 gap-5 w-full lg:px-4 xl:gap-8 2xl:gap-10 3xl:gap-14 4xl:gap-20"
        }
      >
        {STEPPER_DATA.map((step) => (
          <StepEntity key={step.title} {...step} />
        ))}
      </div>
    );
  }

  const itemWidth = screenWidth > 0 ? screenWidth * 0.55 : 200;
  const spacing = screenWidth > 0 ? screenWidth * 0.02 : 8;
  const totalItemWidth = itemWidth + spacing;

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        dragElastic={0.1}
        style={{
          touchAction: "pan-y",
          cursor: "grab",
        }}
      />

      <motion.div
        className="flex items-center py-8 pointer-events-none"
        animate={{
          x: `calc(50% - ${currentIndex * totalItemWidth + itemWidth / 2}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        {STEPPER_DATA.map((step, index) => {
          const isActive = index === currentIndex;

          return (
            <motion.div
              key={step.step}
              className="flex-shrink-0 flex justify-center items-center"
              style={{
                width: `${totalItemWidth}px`,
                minWidth: `${totalItemWidth}px`,
                paddingLeft: `${spacing / 2}px`,
                paddingRight: `${spacing / 2}px`,
              }}
              animate={{
                scale: isActive ? 1.0 : 0.7,
                opacity: isActive ? 1 : 0.85,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <div className="w-full">
                <StepEntity {...step} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
