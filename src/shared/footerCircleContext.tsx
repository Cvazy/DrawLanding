import { createContext, useContext } from "react";

export type GetCircleXForDocumentY = (documentY: number) => number | null;

export const FooterCircleContext = createContext<GetCircleXForDocumentY | null>(
  null,
);

export const useFooterCircle = () => useContext(FooterCircleContext);


