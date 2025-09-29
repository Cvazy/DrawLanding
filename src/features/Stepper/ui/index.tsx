"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, PanInfo } from "framer-motion";
import { STEPPER_DATA } from "../models";
import { StepEntity } from "@/entities";

const AUTOPLAY_INTERVAL = 4000;
const PAUSE_AFTER_INTERACTION = 5000;

export const Stepper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userInteracting, setUserInteracting] = useState(false);

  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimers = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
      pauseTimerRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    if (!isMobile) return;

    clearTimers();
    setIsAutoPlaying(true);

    autoPlayTimerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= STEPPER_DATA.length ? 0 : nextIndex;
      });
    }, AUTOPLAY_INTERVAL);
  }, [isMobile, clearTimers]);

  const pauseAutoPlay = useCallback(() => {
    setIsAutoPlaying(false);
    setUserInteracting(true);
    clearTimers();

    pauseTimerRef.current = setTimeout(() => {
      setUserInteracting(false);
      startAutoPlay();
    }, PAUSE_AFTER_INTERACTION);
  }, [startAutoPlay, clearTimers]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      setScreenWidth(window.innerWidth);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile && !userInteracting) {
      startAutoPlay();
    } else {
      clearTimers();
    }

    return () => clearTimers();
  }, [isMobile, userInteracting, startAutoPlay, clearTimers]);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;

    pauseAutoPlay();

    if (info.offset.x > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      info.offset.x < -threshold &&
      currentIndex < STEPPER_DATA.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleTouchStart = () => {
    if (isMobile) {
      pauseAutoPlay();
    }
  };

  const handleMouseDown = () => {
    if (isMobile) {
      pauseAutoPlay();
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
        onTouchStart={handleTouchStart}
        onMouseDown={handleMouseDown}
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
          stiffness: 200,
          damping: 40,
          mass: 1.2,
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
                duration: 0.6,
                ease: "easeInOut",
                type: "spring",
                stiffness: 150,
                damping: 25,
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
