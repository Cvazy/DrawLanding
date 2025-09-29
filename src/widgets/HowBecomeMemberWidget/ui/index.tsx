import { Stepper } from "@/features";
import Image from "next/image";

export const HowBecomeMemberWidget = () => {
  return (
    <div className={"bg-white w-full h-full"}>
      <div
        className={
          "flex justify-center w-full py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28"
        }
      >
        <div className={"w-full xl:max-w-limit"}>
          <div
            className={
              "flex flex-col items-center gap-10 w-full sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28"
            }
          >
            <div
              className={
                "flex flex-col items-center gap-10 w-full px-5 sm:gap-12 sm:px-10 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28"
              }
            >
              <h2
                className={
                  "gradient-text leading-tight text-left font-extrabold text-[27px] xs:text-3xl sm:text-4xl lg:text-6xl 2xl:text-7xl 4xl:text-8xl"
                }
              >
                Как стать участником
              </h2>

              <div
                className={
                  "flex flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-stretch xl:gap-10 2xl:gap-14 3xl:gap-16"
                }
              >
                <div
                  style={{ background: "var(--gradient-primary)" }}
                  className={"rounded-xl w-full lg:max-w-[45%] flex"}
                >
                  <div
                    className={
                      "flex flex-col items-center gap-4 px-3 py-5 w-full h-full xs:px-6 sm:p-7 md:p-8 xl:p-10 2xl:p-12"
                    }
                  >
                    <Image
                      width={100}
                      height={100}
                      src={"/icons/tbank.svg"}
                      alt={"Т-Банк"}
                      title={
                        "Сотрудники Т‑Банка зарегистрируют биометрию в ГИС ЕБС"
                      }
                      loading={"lazy"}
                      draggable={"false"}
                      className={
                        "aspect-square w-14 md:w-16 xl:w-16 2xl:w-20 3xl:w-24"
                      }
                    />

                    <p
                      className={
                        "text-white text-center font-semibold text-base xs:text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl"
                      }
                    >
                      На планшете в фитнес‑клубе сотрудники Т‑Банка
                      зарегистрируют биометрию в ГИС ЕБС для быстрого
                      подключения услуги.
                    </p>
                  </div>
                </div>

                <p
                  className={
                    "gradient-text font-extrabold leading-tight text-2xl sm:text-3xl lg:self-center lg:text-3xl 2xl:text-5xl 4xl:text-6xl"
                  }
                >
                  или
                </p>

                <div
                  style={{ background: "var(--gradient-primary)" }}
                  className={"rounded-xl w-full lg:max-w-[45%] flex"}
                >
                  <div
                    className={
                      "flex flex-col items-center gap-4 px-3 py-5 w-full h-full xs:px-6 sm:p-7 md:p-8 xl:p-10 2xl:p-12"
                    }
                  >
                    <Image
                      width={100}
                      height={100}
                      src={"/icons/ebs.svg"}
                      alt={"Единая Биометрическая Система"}
                      title={
                        "Зарегистрировать биометрию в ГИС ЕБС на портале ebs.ru"
                      }
                      loading={"lazy"}
                      draggable={"false"}
                      className={
                        "aspect-square w-14 md:w-16 xl:w-16 2xl:w-20 3xl:w-24"
                      }
                    />

                    <p
                      className={
                        "text-white text-center font-semibold text-base xs:text-lg sm:text-lg lg:text-xl 2xl:text-2xl 4xl:text-3xl"
                      }
                    >
                      → Зарегистрировать биометрию в ГИС ЕБС <br />→ Установить
                      код подтверждения (пин-код) на портале{" "}
                      <a
                        href={"https://ebs.ru/"}
                        target={"_blank"}
                        className={"text-[#38FFF9] underline"}
                      >
                        ebs.ru
                      </a>
                      <br />→ Дать согласие на обработку биометрических данных.
                    </p>
                  </div>
                </div>
              </div>

              <p
                className={
                  "gradient-text font-extrabold leading-tight text-2xl sm:text-3xl lg:text-3xl 2xl:text-5xl 4xl:text-6xl"
                }
              >
                далее
              </p>
            </div>

            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
};
