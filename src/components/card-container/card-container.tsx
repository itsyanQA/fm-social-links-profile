import "./card-container.scss";
import { PropsWithChildren } from "react";

export function CardContainer({ children }: PropsWithChildren) {
  return <main>{children}</main>;
}
