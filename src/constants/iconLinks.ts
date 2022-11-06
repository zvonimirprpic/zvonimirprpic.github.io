interface IIconLink {
  href: string;
  opensNewTab: boolean;
  icon: string;
  title: string;
}

export const iconLinks: IIconLink[] = [
  {
    href: "https://github.com/zvonimirprpic",
    opensNewTab: true,
    icon: "githubIcon",
    title: "GitHub Link",
  },
  {
    href: "https://www.linkedin.com/in/zvonimirprpic/",
    opensNewTab: true,
    icon: "linkedinIcon",
    title: "LinkedIn Link,",
  },
  {
    href: "mailto:zvonimirprpic@yahoo.com",
    opensNewTab: false,
    icon: "emailIcon",
    title: "E-Mail",
  },
];
