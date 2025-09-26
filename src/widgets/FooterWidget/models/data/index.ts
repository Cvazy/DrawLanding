import { IWinnerStep } from "@/entities/WinnerStep/models";

export const FOOTER_WIDGET_DATA: IWinnerStep[] = [
  {
    title: "Победитель определяется через Telegram-бота",
    imageSrc: "/icons/telegram.svg",
    imageAlt: "Telegram Icon",
    description:
      "Победители выбираются случайным<br className={'hidden sm:block'} />образом через Telegram-бота среди<br className={'hidden sm:block'} />участников акции.",
    size: "large",
  },

  {
    title: "Все выбранные участники проходят проверку",
    imageSrc: "/icons/success.svg",
    imageAlt: "Success Icon",
    description:
      "Все выбранные участники проходят<br className={'hidden sm:block'} />проверку: подтверждается, что они<br className={'hidden sm:block'} />совершили транзакцию с использованием<br className={'hidden sm:block'} />биометрии в период проведения акции.",
    size: "medium",
  },

  {
    title: "Победителям направляются сертификаты.",
    imageSrc: "/icons/cert.svg",
    imageAlt: "Certificate Icon",
    description:
      "Победителям направляются<br className={'hidden sm:block'} />сертификаты.",
    size: "small",
  },
];
