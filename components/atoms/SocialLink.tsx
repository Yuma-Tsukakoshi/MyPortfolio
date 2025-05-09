import { SocialLink as SocialLinkType } from "@/types/about";

interface SocialLinkProps {
  link: SocialLinkType;
}

export const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-110"
    >
      {link.icon}
    </a>
  );
};
