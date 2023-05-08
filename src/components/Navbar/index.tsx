import React from 'react';
import { GithubOutlined, LinkedinOutlined, MediumOutlined } from '@ant-design/icons';
import Logo from '../Logo';

const links = [
  {
    icon: <GithubOutlined />,
    link: 'https://github.com/NouraldinS',
  }, {
    icon: <LinkedinOutlined />,
    link: 'https://www.linkedin.com/in/nouraldin-alsweirki',
  }, {
    icon: <MediumOutlined />,
    link: 'https://medium.com/@nouraldin.alsweirki',
  },
];

const NavbarLink = ({ href, children, target }: { href: string; children: React.ReactNode; target?: '_blank' }) => (
  <a
    href={href}
    className="flex p-4 hover:text-hot-400 transition-all"
    rel="noreferrer"
    target={target}
  >
    {children}
  </a>
);

const Navbar = () => (
  <div className="flex justify-between items-center text-mainFg text-lg fixed left-0 top-0 right-0 bg-mainBg">
    <Logo />
    <div className="flex justify-between gap-2 items-center">
      <NavbarLink href="#about">About</NavbarLink>
      <NavbarLink href="#work">Work</NavbarLink>
      <NavbarLink href="#contact">Contact</NavbarLink>
      <div className="flex justify-between items-center gap-1 text-mainFg">
        {
            links.map((item) => (
              <NavbarLink target="_blank" key={item.link} href={item.link}>
                {item.icon}
              </NavbarLink>
            ))
          }
      </div>
    </div>
  </div>
);

export default Navbar;
