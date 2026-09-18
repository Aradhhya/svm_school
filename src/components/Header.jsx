import { useState, useEffect } from 'react';
import './Header.css';
import schoolLogo from '../assets/school-logo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'academics', label: 'Academics' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
    // Smooth scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`svm-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container svm-header-container">
        {/* School Logo & Title */}
        <a 
          href="#home" 
          className="svm-brand" 
          onClick={(e) => handleNavClick('home', e)}
          aria-label="U.N.S Saraswati Vidya Mandir Home"
        >
          <div className="svm-logo-wrapper">
            <img 
              src={schoolLogo} 
              alt="U.N.S Saraswati Vidya Mandir Emblem" 
              className="svm-logo-img" 
            />
          </div>
          <div className="svm-brand-text">
            <h1 className="svm-school-name">U.N.S Saraswati Vidya Mandir</h1>
            <div className="svm-location-line">
              <span className="svm-dash"></span>
              <span className="svm-location-text">SANGAT, PHULWARI SHREE, PATNA</span>
              <span className="svm-dash"></span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Bar */}
        <nav className="svm-navbar" aria-label="Main Navigation">
          <ul className="svm-nav-list">
            {navItems.map((item) => {
              const isActive = activePage.toLowerCase() === item.id.toLowerCase();
              return (
                <li key={item.id} className="svm-nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`svm-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                  >
                    {item.label}
                    {isActive && <span className="svm-active-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Admission Pill Button at the last position */}
          <a
            href="#admission"
            className={`svm-nav-admission-btn ${activePage.toLowerCase() === 'admission' ? 'active' : ''}`}
            onClick={(e) => handleNavClick('admission', e)}
          >
            Admissions Open
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`svm-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="svm-hamburger-bar"></span>
          <span className="svm-hamburger-bar"></span>
          <span className="svm-hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`svm-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="svm-mobile-nav-list">
          {navItems.map((item) => {
            const isActive = activePage.toLowerCase() === item.id.toLowerCase();
            return (
              <li key={item.id} className="svm-mobile-nav-item">
                <a
                  href={`#${item.id}`}
                  className={`svm-mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="svm-mobile-active-dot" />}
                </a>
              </li>
            );
          })}

          {/* Prominent Mobile Admission Button at the last */}
          <li className="svm-mobile-nav-item svm-mobile-admission-wrap">
            <a
              href="#admission"
              className={`svm-mobile-admission-btn ${activePage.toLowerCase() === 'admission' ? 'active' : ''}`}
              onClick={(e) => handleNavClick('admission', e)}
            >
              <span>Admissions Open</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
