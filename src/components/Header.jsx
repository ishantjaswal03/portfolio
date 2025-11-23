import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      hasDropdown: true,
      subLinks: [
        { name: 'Journey', path: '/about#journey' },
        { name: 'Beyond the Screen', path: '/about#beyond-screen' },
        { name: 'How I Work', path: '/about#how-i-work' },
        { name: 'What I Value', path: '/about#values' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Ishant<span>.</span>
        </Link>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="nav-item"
              onMouseEnter={() => link.hasDropdown && setAboutDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setAboutDropdownOpen(false)}
            >
              <Link
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <span className="dropdown-arrow"> ▼</span>}
              </Link>

              {link.hasDropdown && (
                <div className={`dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
                  {link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.name}
                      to={subLink.path}
                      className="dropdown-item"
                      onClick={() => {
                        setIsOpen(false);
                        setAboutDropdownOpen(false);
                      }}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
