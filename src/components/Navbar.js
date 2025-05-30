import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= 768);
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open && mobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open, mobile]);

  const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Contact'];

  const s = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#f9fafb',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 999,
      fontFamily: "'Inter', sans-serif",
      boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none',
      transition: 'box-shadow 0.3s ease',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: '1.3rem',
      color: '#111827',
      userSelect: 'none',
    },
    burger: {
      display: mobile ? 'block' : 'none',
      cursor: 'pointer',
      width: 25,
      height: 20,
      position: 'relative',
    },
    bar: {
      height: 3,
      width: '100%',
      background: '#111827',
      borderRadius: 3,
      position: 'absolute',
      left: 0,
      transition: '0.3s',
    },
    list: {
      listStyle: 'none',
      display: mobile ? (open ? 'flex' : 'none') : 'flex',
      flexDirection: mobile ? 'column' : 'row',
      gap: mobile ? '1rem' : '2rem',
      padding: 0,
      margin: 0,
      position: mobile ? 'absolute' : 'static',
      top: mobile ? '64px' : 'auto',
      left: 0,
      width: mobile ? '100%' : 'auto',
      background: mobile ? '#f9fafb' : 'transparent',
      paddingLeft: mobile ? '2rem' : 0,
      paddingBottom: mobile ? '1.5rem' : 0,
      boxShadow: mobile ? '0 8px 20px rgba(0,0,0,0.1)' : 'none',
      maxHeight: mobile ? 'calc(100vh - 64px)' : 'none',
      overflowY: mobile ? 'auto' : 'visible',
      zIndex: 998,
    },
    link: (active) => ({
      color: active ? '#111827' : '#6b7280',
      fontWeight: active ? 700 : 500,
      textDecoration: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
      position: 'relative',
      padding: mobile ? '0.5rem 0' : 0,
      display: 'inline-block',
    }),
    underline: {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -4,
      height: 2,
      width: '100%',
      background: '#4f46e5',
      transition: 'transform 0.3s ease',
      transform: 'scaleX(0)',
      transformOrigin: 'right',
    },
    hover: {
      transform: 'scaleX(1)',
      transformOrigin: 'left',
    },
  };

  return (
    <nav style={s.nav}>
      <div style={s.logo}>Mishal V S</div>

      {/* Hamburger Icon */}
      <div
        style={s.burger}
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span
          style={{
            ...s.bar,
            top: 0,
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <span
          style={{
            ...s.bar,
            top: 8,
            opacity: open ? 0 : 1,
          }}
        />
        <span
          style={{
            ...s.bar,
            top: 16,
            transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </div>

      {/* Navigation Links */}
      <ul style={s.list}>
        {navItems.map((item, i) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={s.link(hovered === i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => mobile && setOpen(false)}
            >
              {item}
              <span style={{ ...s.underline, ...(hovered === i ? s.hover : {}) }} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
