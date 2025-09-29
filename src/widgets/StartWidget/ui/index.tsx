import Image from "next/image";

export const StartWidget = () => {
  return (
    <div
      style={{ background: "var(--gradient-primary)" }}
      className={"relative w-full h-full"}
    >
      <div
        className={
          "bg-white absolute top-0 left-0 rounded-full z-10 shadow-[0_0_25dvw_25dvw_white]"
        }
      ></div>

      <Image
        width={200}
        height={200}
        src={"/backgrounds/headerCircles.svg"}
        alt={"Header Circles"}
        loading={"lazy"}
        draggable={"false"}
        className={
          "absolute top-[-20%] left-[-40%] w-full aspect-square z-0 sm:-top-1/4 sm:-left-1/4 2xl:-top-1/3 2xl:left-[-40%]"
        }
      />

      <div
        className={
          "flex justify-center w-full px-8 pt-32 pb-2 relative z-20 sm:px-10 md:pt-40 xl:pt-64 2xl:pt-80 4xl:pt-96"
        }
      >
        <div className={"w-full xl:max-w-limit"}>
          <div
            className={
              "flex flex-col items-center gap-5 w-full xs:gap-6 sm:gap-8 md:gap-9 lg:gap-10 xl:gap-12 2xl:gap-20 3xl:gap-24 4xl:gap-28"
            }
          >
            <div
              className={
                "flex flex-col items-start gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:gap-20"
              }
            >
              <h1
                className={
                  "text-white leading-tight text-left font-extrabold text-2xl xs:text-3xl sm:text-5xl lg:text-7xl 2xl:text-8xl 4xl:text-9xl"
                }
              >
                Подтверди возраст – <br /> выиграй фитнес!
              </h1>

              <div
                className={
                  "flex flex-col items-start relative w-full gap-5 sm:gap-6 md:gap-8 lg:gap-1"
                }
              >
                <div
                  className={
                    "flex flex-col items-start gap-5 sm:gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between"
                  }
                >
                  <p
                    className={
                      "text-left text-white font-medium leading-[1.1] text-base w-full lg:max-w-[50%] xs:text-lg sm:text-xl lg:text-2xl 2xl:text-4xl 4xl:text-5xl"
                    }
                  >
                    Мы за разумный выбор и современный подход. Именно поэтому в
                    наших вендинговых аппаратах используется идентификация
                    возраста.
                  </p>

                  <div
                    className={
                      "flex justify-center items-center w-full relative pl-[8%] lg:pl-0 lg:w-1/3"
                    }
                  >
                    <Image
                      width={100}
                      height={100}
                      src={"/images/boy.svg"}
                      alt={"Boy"}
                      title={"Мы за разумный выбор и современный подход."}
                      loading={"lazy"}
                      draggable={"false"}
                      className={"aspect-square w-1/2 lg:w-full"}
                    />

                    <Image
                      width={100}
                      height={100}
                      src={"/images/girl.svg"}
                      alt={"Girl"}
                      title={
                        "Знаешь, что общего у твоей покупки и отличной формы?"
                      }
                      loading={"lazy"}
                      draggable={"false"}
                      className={
                        "aspect-square w-1/2 relative right-[8%] lg:hidden"
                      }
                    />
                  </div>
                </div>

                <div
                  className={
                    "flex flex-col items-start gap-5 sm:gap-6 md:gap-8 lg:flex-row lg:items-center lg:justify-between"
                  }
                >
                  <Image
                    width={100}
                    height={100}
                    src={"/images/girl.svg"}
                    alt={"Girl"}
                    title={
                      "Знаешь, что общего у твоей покупки и отличной формы?"
                    }
                    loading={"lazy"}
                    draggable={"false"}
                    className={"aspect-square hidden lg:block lg:w-1/3"}
                  />

                  <p
                    className={
                      "text-left text-white font-medium leading-[1.1] text-base w-full lg:max-w-[50%] xs:text-lg sm:text-xl lg:text-2xl 2xl:text-4xl 4xl:text-5xl"
                    }
                  >
                    Знаешь, что общего у твоей покупки и отличной формы? Теперь
                    у них есть общий знаменатель — твой шанс выиграть главный
                    приз!
                  </p>
                </div>
              </div>
            </div>

            <div
              className={
                "flex flex-col items-center justify-between gap-12 relative w-full sm:gap-16 md:gap-20 lg:gap-24 2xl:gap-32 3xl:gap-36"
              }
            >
              <Image
                width={300}
                height={300}
                src={"/backgrounds/DDX.svg"}
                alt={"DDX Logo"}
                loading={"lazy"}
                draggable={"false"}
                className={"absolute bottom-0 w-full sm:hidden"}
              />

              <div
                className={
                  "flex flex-col items-start z-1 gap-8 relative sm:items-center sm:gap-10 md:gap-12 lg:gap-14 2xl:gap-20"
                }
              >
                <h2
                  className={
                    "relative z-10 text-white leading-tight text-left font-extrabold text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl 4xl:text-8xl"
                  }
                >
                  Приз акции <br className={"sm:hidden"} />
                  от DDX Fitness:
                </h2>

                <div
                  className={
                    "flex items-center justify-center gap-2 w-full xl:gap-5 3xl:gap-8"
                  }
                >
                  <div className={"relative flex items-start gap-1"}>
                    <p
                      className={
                        "leading-none text-white text-9xl font-extrabold sm:text-[144px] md:text-[176px] lg:text-[208px] xl:text-[256px] 2xl:text-[300px] 3xl:text-[352px] 4xl:text-[408px]"
                      }
                    >
                      70
                    </p>

                    <div
                      className={
                        "flex flex-col items-start mt-6 lg:mt-10 2xl:mt-14 3xl:mt-16"
                      }
                    >
                      <p
                        className={
                          "text-white leading-none font-extrabold text-xs xs:text-sm sm:text-base lg:text-2xl 2xl:text-3xl 4xl:text-4xl"
                        }
                      >
                        абонементов
                      </p>
                      <p
                        className={
                          "text-white leading-none font-extrabold text-sm xs:text-base sm:text-lg lg:text-3xl 2xl:text-4xl 4xl:text-5xl"
                        }
                      >
                        категории
                      </p>
                    </div>

                    <p
                      className={
                        "text-[#212438] absolute bottom-5 right-0 text-4xl leading-none font-extrabold sm:text-5xl lg:text-6xl lg:bottom-8 xl:text-7xl 2xl:text-[88px] 3xl:text-8xl 3xl:bottom-12 4xl:text-[112px]"
                      }
                    >
                      Infinity
                    </p>
                  </div>

                  <Image
                    width={100}
                    height={100}
                    src={"/images/bracelet.svg"}
                    alt={"Браслет"}
                    title={"Браслет в DDX Fitness"}
                    loading={"lazy"}
                    draggable={"false"}
                    className={
                      "h-28 w-auto absolute -top-4 right-0 sm:h-32 md:h-40 md:static lg:h-48 xl:h-60 2xl:h-64 3xl:h-80 4xl:h-96"
                    }
                  />
                </div>
              </div>

              <div
                className={
                  "bg-[#E42719] relative z-1 rounded sm:max-w-limit sm:rounded-md xl:rounded-lg lg:max-w-[60%] 3xl:rounded-xl"
                }
              >
                <div
                  className={
                    "px-5 pt-3 pb-5 w-full sm:pt-4 sm:pb-6 lg:pt-5 lg:pb-8 2xl:pt-6 2xl:pb-10"
                  }
                >
                  <h3
                    className={
                      "text-white leading-tight font-extrabold text-center text-base xs:text-lg sm:text-2xl lg:text-3xl 2xl:text-4xl 4xl:text-5xl"
                    }
                  >
                    Сроки проведения акции
                    <br />с 06.10.2025 по 26.10.2025
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
