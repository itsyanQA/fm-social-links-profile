import { CardLink, CardLinkProps } from "../card-link/card-link";
import "./card-link-list.scss";

export function CardLinkList() {
  const links: CardLinkProps[] = [
    {
      text: "GitHub",
      url: "https://github.com/itsyanQA",
    },
    {
      text: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/itsyanQA",
    },
    {
      text: "LinkedIn",
      url: "https://il.linkedin.com/in/yan-eliyahu-a101a6216",
    },
    { text: "Twitter", url: "" },
    { text: "Instagram", url: "" },
  ];

  return (
    <ul>
      {links.map((link) => (
        <CardLink text={link.text} url={link.url} />
      ))}
    </ul>
  );
}
