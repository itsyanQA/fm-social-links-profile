import "./card-link.scss";

export type CardLinkProps = {
  text: string;
  url: string;
};

export function CardLink({ text, url }: CardLinkProps) {
  return (
    <li>
      <a href={url} target="_blank">
        {text}
      </a>
    </li>
  );
}
