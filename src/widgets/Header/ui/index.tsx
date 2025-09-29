import { EbsIconWithText, Logo } from "@/shared";

export const Header = () => {
  return (
    <header className={"absolute top-0 left-0 right-0 z-20 w-full"}>
      <div
        className={
          "flex justify-center p-5 w-full sm:px-10 sm:py-6 xl:py-10 2xl:py-12 3xl:py-14"
        }
      >
        <div className={"w-full xl:max-w-limit"}>
          <div
            className={
              "relative flex items-center justify-between gap-5 w-full"
            }
          >
            <Logo className={"w-40 h-auto md:w-44 lg:w-56 xl:w-64"} />

            <EbsIconWithText className={"w-40 h-auto lg:block xl:w-64"} />
          </div>
        </div>
      </div>
    </header>
  );
};
