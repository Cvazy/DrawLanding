"use client";

import Image from "next/image";
import { IWinnerStep } from "../models";

import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useFooterCircle } from "@/shared/footerCircleContext";

export const WinnerStep: FC<IWinnerStep> = ({
  title,
  imageSrc,
  imageAlt,
  description,
  size,
}) => {
  const iconSizes = {
    small: "w-6 sm:w-10 md:w-14 2xl:w-20",
    medium: "w-10 sm:w-16 md:w-24 2xl:w-32",
    large: "w-16 sm:w-24 md:w-32 2xl:w-48",
  };

  const textSizes = {
    small: "text-3xs pr-24 sm:pr-0 sm:text-2xs md:text-sm 2xl:text-base",
    medium: "text-2xs pr-20 sm:pr-0 sm:text-xs md:text-base 2xl:text-lg",
    large: "text-sm pr-24 sm:text-base md:text-xl 2xl:text-2xl",
  };

  const getXForDocumentY = useFooterCircle();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [leftPx, setLeftPx] = useState<number | null>(null);

  const recompute = useCallback(() => {
    if (!getXForDocumentY || !containerRef.current || !imageRef.current) {
      setLeftPx(null);
      return;
    }
    const imgRect = imageRef.current.getBoundingClientRect();
    const documentY = imgRect.top + imgRect.height / 2 + window.scrollY;
    const documentXOnCircle = getXForDocumentY(documentY);
    if (documentXOnCircle == null) {
      setLeftPx(null);
      return;
    }
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerLeft = containerRect.left + window.scrollX;
    
    const realIconWidth = imgRect.width;
    
    const iconCenterOffsetInContainer = (imgRect.left - containerLeft) + realIconWidth / 2;
    
    const desiredContainerLeft = documentXOnCircle - iconCenterOffsetInContainer;
    let delta = desiredContainerLeft - containerLeft;

    const boundaryEl = document.querySelector(
      "[data-footer-boundary]",
    ) as HTMLElement | null;
    if (boundaryEl) {
      const boundaryRect = boundaryEl.getBoundingClientRect();
      const boundaryLeft = boundaryRect.left + window.scrollX;
      const boundaryRight = boundaryRect.right + window.scrollX;

      const containerLeftAfter = containerLeft + delta;
      const iconCenterAfter = containerLeftAfter + iconCenterOffsetInContainer;
      const minCenter = boundaryLeft + realIconWidth / 2;
      const maxCenter = boundaryRight - realIconWidth / 2;

      if (iconCenterAfter < minCenter) {
        delta += minCenter - iconCenterAfter;
      } else if (iconCenterAfter > maxCenter) {
        delta -= iconCenterAfter - maxCenter;
      }
    }

    setLeftPx(Math.round(delta));
  }, [getXForDocumentY]);

  useEffect(() => {
    recompute();
  }, [recompute]);

  useEffect(() => {
    const onResize = () => {
      recompute();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [recompute]);


  const transformStyle = useMemo(() => {
    return leftPx == null
      ? undefined
      : { transform: `translateX(${leftPx}px)` };
  }, [leftPx]);

  return (
    <div className={`w-full`}>
      <div
        ref={containerRef}
        style={transformStyle}
        className={`flex items-center relative gap-5 w-fit sm:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 3xl:gap-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0.0, 0.2, 1)]`}
      >
        <Image
          ref={imageRef as any}
          width={100}
          height={100}
          src={imageSrc}
          alt={imageAlt}
          title={title}
          loading={"lazy"}
          draggable={"false"}
          className={`aspect-square ${iconSizes[size]} transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0.0, 0.2, 1)]`}
        />

        <div
          className={`text-white text-left font-extrabold ${textSizes[size]} transition-all duration-[1200ms] ease-[cubic-bezier(0.4, 0.0, 0.2, 1)]`}
        >
          {description
            .split(/(<br[^>]*\/>)/gi)
            .map((part, index) => {
              if (part.match(/^<br[^>]*\/>$/i)) {
                const classMatch = part.match(
                  /className=\{?['"]([^'"]*)['"]\}?/,
                );
                const className = classMatch ? classMatch[1] : "";
                return <br key={index} className={className} />;
              }
              return part ? <span key={index}>{part}</span> : null;
            })
            .filter(Boolean)}
        </div>
      </div>
    </div>
  );
};
