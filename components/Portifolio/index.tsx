import { faLink } from "@fortawesome/free-solid-svg-icons/faLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ReactNode } from "react";

type PortfolioCardProps = {
  title: string;
  image: string | any;
  tags: string[];
  description: ReactNode;
  link?: string,
  linkText?:string
};

export default function PortfolioCard({
  title,
  image,
  tags,
  description,
  link,
  linkText
}: PortfolioCardProps) {
  return (
    <div className="group text-white flex hover:drop-shadow-lg duration-500 transition-all hover:scale-105 flex-col max-w-sm m-3 bg-neutral-800 rounded-md drop-shadow-sm p-2 shadow-black">
      <Image
        className="rounded-t-md self-center max-h-60 object-contain"
        src={image}
        alt={title}
      />

      <span className="text-center font-semibold p-4">{title}</span>
      {tags.length && (
        <div className="flex justify-center gap-2 flex-wrap mx-6">
          {tags.map((tag) => (
            <span
              className="bg-blue-500 select-none hover:bg-blue-600 py-1 rounded-full px-2.5 text-xs text-white"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="m-4">{description}</div>
      {link &&
        <div className="hidden  group-hover:block absolute bottom-0 left-0 right-0 p-6 bg-[#39f4] transition-all backdrop-blur-md">
          <a className="flex hover:underline gap-4 items-center cursor-pointer" href={link} target='_blank' rel='noreferrer'>
            <FontAwesomeIcon width={32} icon={faLink} />
            {linkText || "View Project"}
          </a>
        </div>
      }
    </div>
  );
}
