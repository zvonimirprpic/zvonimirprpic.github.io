import githubIcon from "../assets/icons/githubIcon.svg";
import linkedinIcon from "../assets/icons/linkedinIcon.svg";
import emailIcon from "../assets/icons/emailIcon.svg";

interface IIconLink {
  href: string;
  opensNewTab: boolean;
  icon: string;
  alt: string;
}

export const iconLinks: IIconLink[] = [
  {
    href: "https://github.com/zvonimirprpic",
    opensNewTab: true,
    icon: githubIcon,
    alt: "GitHub Icon.",
  },
  {
    href: "https://www.linkedin.com/in/zvonimirprpic/",
    opensNewTab: true,
    icon: linkedinIcon,
    alt: "LinkedIn Icon.",
  },
  {
    href: "mailto:zvonimirprpic@yahoo.com",
    opensNewTab: false,
    icon: emailIcon,
    alt: "E-Mail Icon.",
  },
];
