
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
            <img
              src={"/images/logoFitvend.svg"}
              alt={"Fitvend Logo"}
              title={"Логотип Fitvend"}
              loading={"lazy"}
              draggable={false}
              className={"w-40 md:w-44 lg:w-56 xl:w-64"}
            />

            <img
              src={"/icons/ebsIconWithText.svg"}
              alt={"EBS Logo"}
              title={"Логотип Единой Биометрической системы"}
              loading={"lazy"}
              draggable={false}
              className={"w-40 lg:block xl:w-64"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
