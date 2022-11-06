import githubIcon from "../assets/icons/githubIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import emailIcon from "../assets/icons/emailIcon.svg";

interface IIconLink {
  href: string;
  opensNewTab: boolean;
  icon: string;
}

export const iconLinks: IIconLink[] = [
  {
    href: "https://github.com/zvonimirprpic",
    opensNewTab: true,
    icon: "githubIcon",
  },
  {
    href: "https://www.linkedin.com/in/zvonimirprpic/",
    opensNewTab: true,
    icon: "linkedinIcon",
  },
  {
    href: "mailto:zvonimirprpic@yahoo.com",
    opensNewTab: false,
    icon: "emailIcon",
  },
];
