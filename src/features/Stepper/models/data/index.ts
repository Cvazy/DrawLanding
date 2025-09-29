import { IStepEntity } from "@/entities/StepEntity/models";

export const STEPPER_DATA: IStepEntity[] = [
  {
    step: 1,
    imageSrc: "/stepper/step-1.svg",
    imageAlt: "Выбор энергетика",
    title: "Выбери энергетик в вендинговом аппарате",
  },

  {
    step: 2,
    imageSrc: "/stepper/step-2.svg",
    imageAlt: "Сканирование лица",
    title: "Посмотри в камеру",
  },

  {
    step: 3,
    imageSrc: "/stepper/step-3.svg",
    imageAlt: "Код подтверждения",
    title: "Введи код подтверждения",
  },

  {
    step: 4,
    imageSrc: "/stepper/step-4.svg",
    imageAlt: "Успех!",
    title: "Возраст подтвержден! Можно произвести оплату",
  },
];
