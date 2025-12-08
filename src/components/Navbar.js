'use client';
import React, { useState, useEffect } from 'react';
import { AiFillHome, AiOutlineUser, AiOutlineBook, AiOutlineExperiment, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [mobile, setMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <AiFillHome /> },
    { name: 'About', icon: <AiOutlineUser /> },
    { name: 'Education', icon: <AiOutlineBook /> },
    { name: 'Experience', icon: <AiOutlineExperiment /> },
    { name: 'Projects', icon: <AiOutlineProject /> },
    { name: 'Contact', icon: <AiOutlineMail /> },
  ];

  // Handle mobile resize
  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open && mobile ? 'hidden' : '';
  }, [open, mobile]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const item of navItems) {
        const section = document.getElementById(item.name.toLowerCase());
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActive(item.name.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initialize on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const s = {
    nav: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      right: 0,
      height: '100vh',
      width: mobile ? '150px' : '60px',
      padding: mobile ? '1.5rem 0' : '2rem 0',
      background: '#111',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)',
      zIndex: 1000,
      transform: mobile ? (open ? 'translateX(0)' : 'translateX(100%)') : 'translateX(0)',
      transition: 'transform 0.3s ease-in-out',
    },
    burger: {
      display: mobile ? 'block' : 'none',
      position: 'fixed',
      top: 20,
      right: 20,
      cursor: 'pointer',
      width: 25,
      height: 20,
      zIndex: 1100,
    },
    bar: {
      height: 3,
      width: '100%',
      background: '#ffffff',
      borderRadius: 3,
      position: 'absolute',
      left: 0,
      transition: '0.3s',
    },
    overlay: {
      display: mobile && open ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(17,17,17,0.9)',
      zIndex: 999,
    },
    list: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      height: '80%',
      width: '100%',
    },
    link: (isActive) => ({
      color: isActive ? '#00c3ff' : '#ffffff',
      fontWeight: isActive ? 700 : 500,
      textDecoration: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'color 0.3s ease',
    }),
  };

  const handleClick = (name) => {
    setActive(name.toLowerCase());
    const section = document.getElementById(name.toLowerCase());
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    if (mobile) setOpen(false);
  };

  return (
    <>
      <div style={s.overlay} onClick={() => setOpen(false)} role="presentation" />

      <div
        style={s.burger}
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span style={{ ...s.bar, top: 0, transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <span style={{ ...s.bar, top: 8, opacity: open ? 0 : 1 }} />
        <span style={{ ...s.bar, top: 16, transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
      </div>

      <nav style={s.nav}>
        <ul style={s.list}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.name);
                }}
                style={s.link(active === item.name.toLowerCase())}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
