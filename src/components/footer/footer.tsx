import Link from 'next/link';

import { FaFacebook, FaGithub, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="items-center justify-evenly bg-gray-300 py-4 text-center text-black lg:flex">
      <Link href="https://www.youtube.com/@tapasadhikary" target="_blank">
        &copy; {currentYear} An Open Source initiative from tapaScript Community.
      </Link>
      <div className="mt-4 flex justify-center gap-4 lg:mt-0 lg:gap-8">
        {SOCIAL_LINKS.map((item, id) => (
          <Link key={id} href={item.link} target="_blank">
            <div className=" hover:scale-105">{item.icon}</div>
          </Link>
        ))}
      </div>
    </footer>
  );
};


const SOCIAL_LINKS = [
  {
    id: 1,
    name: 'YouTube',
    link: 'https://youtube.com/@tapasadhikary',
    icon: <FaYoutube size={28}/>,
  },
  {
    id: 2,
    name: 'Facebook',
    link: 'https://www.facebook.com/tapascript/',
    icon: <FaFacebook size={24}/>,
  },

  {
    id: 3,
    name: 'Twitter',
    link: 'https://x.com/tapascript',
    icon: <FaTwitter size={24}/>,
  },

  {
    id: 4,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/tapasadhikary/',
    icon: <FaLinkedin size={24}/>,
  },

  {
    id: 5,
    name: 'Github',
    link: 'https://github.com/tapascript',
    icon: <FaGithub size={24}/>,
  },
];

