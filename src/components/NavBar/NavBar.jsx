import { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faXmark } from '@fortawesome/free-solid-svg-icons';
import ButtonVisit from '../ButtonVisit/ButtonVisit';
import SocialIcon from '../SocialIcon/SocialIcon';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.topNav}>
        <div className={styles.leftSide}>
          <div>
            <a href="mailto:info@company.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} className={styles.email} />
              info@company.com
            </a>
          </div>
          <div className={styles.border}>
            <a href="#">
              <FontAwesomeIcon icon={faMap} className={styles.map} />
              Sunny Isles Beach, FL 33160
            </a>
          </div>
        </div>
        <SocialIcon />
      </div>
      <div className={`${styles.bottomNav} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.showMenu : ''}`}>
        <div className={`${styles.logoSide} ${isMenuOpen ? styles.showMenu : ''}`}>
          <Link to={'/Task-3-Adv/'}>
            <h1>VILLA</h1>
          </Link>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <div className={styles.bar}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </button>
        <div className={`${styles.endSide} ${isMenuOpen ? styles.showMenu : ''}`}>
          <NavLink to='/Task-3-Adv/' end className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink>
          <NavLink to='/Task-3-Adv/properties' className={({ isActive }) => (isActive ? styles.active : '')}>Properties</NavLink>
          <NavLink to='/Task-3-Adv/detail' className={({ isActive }) => (isActive ? styles.active : '')}>Property Details</NavLink>
          <NavLink to='/Task-3-Adv/contact' className={({ isActive }) => (isActive ? styles.active : '')}>Contact Us</NavLink>
          <ButtonVisit />
          <div className={styles.display}>
            <SocialIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

