import { FOOTER_WIDGET_DATA } from "../models";
import { WinnerStep } from "@/entities/WinnerStep";

export const FooterWidget = () => {
  return (
    <div
      style={{ background: "var(--gradient-primary)" }}
      className={"relative w-full h-full"}
    >
      <div
        className={
          "flex justify-center w-full py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28"
        }
      >
        <div className={"w-full xl:max-w-limit"}>
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
      </div>
    </div>
  );
};
