import { FC } from "react";
import Image from "next/image";
import { IStepEntity } from "../models";

export const StepEntity: FC<IStepEntity> = ({
  step,
  title,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div
      className={"flex flex-col items-center gap-3 w-full lg:gap-7 xl:gap-8"}
    >
      <Image
        width={100}
        height={100}
        src={imageSrc}
        alt={imageAlt}
        title={title}
        loading={"lazy"}
        draggable={"false"}
        className={"w-full"}
      />

      <div
        className={
          "flex flex-col items-center gap-1 w-full lg:gap-1.5 xl:gap-2"
        }
      >
        <p
          className={
            "text-center text-main font-extrabold leading-tight text-3xl lg:text-2xl 2xl:text-4xl 4xl:text-5xl"
          }
        >
          {step}
        </p>

        <p
          className={
            "text-center text-main font-extrabold leading-tight text-lgå lg:text-lg 2xl:text-xl 4xl:text-2xl"
          }
        >
          {title}
        </p>
      </div>
    </div>
  );
};
