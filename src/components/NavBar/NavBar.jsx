// import React, { useEffect, useState } from 'react';
// import styles from './NavBar.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
// import ButtonVisit from '../ButtonVisit/ButtonVisit';

// export default function NavBar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.topNav}>
//         <div className={styles.leftSide}>
//           <div>
//             <a href="mailto:info@company.com" target="_blank">
//               <FontAwesomeIcon icon={faEnvelope} className={styles.email} />
//               info@company.com
//             </a>
//           </div>
//           <div className={styles.border}>
//             <a href="#">
//               <FontAwesomeIcon icon={faMap} className={styles.map} />
//               Sunny Isles Beach, FL 33160
//             </a>
//           </div>
//         </div>
//         <div className={styles.socialIcons}>
//           <div className={styles.icon}>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//           </div>
//           <div className={styles.icon}>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//           </div>
//           <div className={styles.icon}>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </div>
//           <div className={styles.icon}>
//             <a href="#" target="_blank" rel="noopener noreferrer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//           </div>

//         </div>
//       </div>
//       <div className={`${styles.bottomNav} ${isScrolled ? styles.scrolled : ''}`}>
//         <div className={styles.logoSide}>
//           <h1>VILLA</h1>
//         </div>
//         <div className={styles.endSide}>
//           <a href="#" id='active'>Home</a>
//           <a href="#">Properties</a>
//           <a href="#">Property Details</a>
//           <a href="#">Contact Us</a>
//           <ButtonVisit />
//         </div>
//       </div>
//     </nav>
//   )
// }

import React, { useEffect, useState } from 'react';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ButtonVisit from '../ButtonVisit/ButtonVisit';
import SocialIcon from '../SocialIcon/SocialIcon';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // إدارة فتح وإغلاق القائمة

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
          <h1>VILLA</h1>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} />
        </button>
        <div className={`${styles.endSide} ${isMenuOpen ? styles.showMenu : ''}`}>
          <a href="#home" id='active'>Home</a>
          <a href="#properties">Properties</a>
          <a href="#detail">Property Details</a>
          <a href="#contact">Contact Us</a>
          <ButtonVisit />
          <div className={styles.display}>
            <SocialIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

