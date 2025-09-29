import { IStepEntity } from "@/entities/StepEntity/models";
import { FirstStep, SecondStep, ThirdStep, FourthStep } from "@/shared";

export const STEPPER_DATA: IStepEntity[] = [
  {
    step: 1,
    title: "Выбери энергетик в вендинговом аппарате",
    imageComponent: <FirstStep />,
  },

  {
    step: 2,
    title: "Посмотри в камеру",
    imageComponent: <SecondStep />,
  },

  {
    step: 3,
    title: "Введи код подтверждения",
    imageComponent: <ThirdStep />,
  },

  {
    step: 4,
    title: "Возраст подтвержден! Можно произвести оплату",
    imageComponent: <FourthStep />,
  },
];
