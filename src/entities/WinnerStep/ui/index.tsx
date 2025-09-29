"use client";

import { IWinnerStep } from "../models";
import { FC } from "react";

export const WinnerStep: FC<IWinnerStep> = ({
  title,
  imageSrc,
  imageAlt,
  description,
}) => {
  const iconSizes = {
    small: "w-6 sm:w-10 md:w-14 2xl:w-20",
    medium: "w-10 sm:w-16 md:w-24 2xl:w-32",
    large: "w-16 sm:w-24 md:w-32 2xl:w-48",
  };

  const textSizes = {
    small: "text-3xs sm:text-2xs md:text-sm 2xl:text-base",
    medium: "text-2xs sm:text-xs md:text-base 2xl:text-lg",
    large: "text-sm sm:text-base md:text-xl 2xl:text-2xl",
  };

  return (
    <div className={`w-full`}>
      <div
        className={`flex items-center relative gap-5 w-full sm:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 3xl:gap-12`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          title={title}
          loading={"lazy"}
          draggable={false}
          className={`aspect-square ${iconSizes["large"]}`}
        />

        <div
          className={`text-white text-left font-extrabold ${textSizes["large"]}`}
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
