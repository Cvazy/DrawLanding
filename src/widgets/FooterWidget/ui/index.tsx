"use client";

import { FOOTER_WIDGET_DATA } from "../models";
import { WinnerStep } from "@/entities/WinnerStep";
import { FooterCircleContext } from "@/shared/footerCircleContext";
import { useCallback, useMemo, useRef } from "react";
import Image from "next/image";

export const FooterWidget = () => {
  const circleImgRef = useRef<HTMLImageElement | null>(null);

  const getXForDocumentY = useCallback((documentY: number) => {
    if (!circleImgRef.current) return null;
    const rect = circleImgRef.current.getBoundingClientRect();
    const centerX = rect.left + window.scrollX + rect.width / 2;
    const centerY = rect.top + window.scrollY + rect.height / 2;
    const radius = Math.min(rect.width, rect.height) / 2;

    const dy = documentY - centerY;
    if (Math.abs(dy) > radius) return null;

    const dx = Math.sqrt(Math.max(radius * radius - dy * dy, 0));

    return centerX + dx;
  }, []);

  const contextValue = useMemo(() => getXForDocumentY, [getXForDocumentY]);

  return (
    <div
      style={{ background: "var(--gradient-primary)" }}
      className={"w-full h-full"}
    >
      <div
        className={
          "flex justify-center relative overflow-hidden w-full py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28"
        }
      >
        <Image
          ref={circleImgRef as any}
          width={200}
          height={200}
          src={"/backgrounds/footerCircle.svg"}
          alt={"Footer Circle"}
          loading={"eager"}
          draggable={"false"}
          className={
            "opacity-40 absolute top-16 left-[-70%] w-full aspect-square z-0 sm:top-20 sm:left-[-60%] lg:top-8"
          }
        />

        <FooterCircleContext.Provider value={contextValue}>
          <div
            data-footer-boundary
            className={"relative z-1 w-full xl:max-w-limit"}
          >
            <div
              className={
                "flex flex-col items-center gap-10 w-full px-4 sm:gap-12 sm:px-10 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28"
              }
            >
              <h3
                className={
                  "text-white leading-tight text-center font-extrabold text-lg xs:text-xl sm:text-3xl lg:text-5xl 2xl:text-6xl 4xl:text-7xl"
                }
              >
                Как определяется победитель
              </h3>

              <div
                className={
                  "flex flex-col items-start gap-12 w-full sm:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28"
                }
              >
                {FOOTER_WIDGET_DATA.map((item) => (
                  <WinnerStep key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </FooterCircleContext.Provider>
      </div>
    </div>
  );
};
