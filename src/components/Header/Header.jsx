import { useState, useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./header.style.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderScrolled(true);
      } else {
        setHeaderScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header id="header" className={headerScrolled ? "header-scrolled" : ""}>
        <div className="container">
          <nav id="navbar">
            <div className="logo">
              <img src="./img/logo.png" alt="Logo" />
            </div>
            <div id="menu-icon" className="fas fa-bars" onClick={toggleMenu}></div>
            <div className={`nav-links ${menuActive ? "active" : ""}`}>
              <a href="#">Home</a>
              <a href="#class">Classes</a>
              <a href="#trainers">Trainers</a>
              <a href="#review">Reviews</a>
              <a href="#contact">Contact</a>
              <a href="#" className="btn btn-menu">
                JOIN US
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
