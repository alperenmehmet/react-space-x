import React, { useState, useRef } from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../utils/SpaceX-Logo.svg.png';
const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
];

const Navbar = () => {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  // const toggleLinks = () => {
  //   setShowLinks(!showLinks);
  // };

  return (
    <nav>
      <div className='navbar-center'>
        <div className='nav-header'>
          <img className='logo' src={logo} alt='' />
          <div className='links-container'>
            <ul className='links' ref={linksContainerRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id} ref={linksRef}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
