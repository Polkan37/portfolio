import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./navBar.css";
import disableScroll from "../disableScroll";
import logo from "../../resources/img/logo.png";
import { navItems } from "../../constants/main.constants";
const tabletWidth = 828;

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function NavBar() {
  const ref = useRef();
  const [burger_button_class, setBurgerButtonClass] = useState("nav__button");
  const [burger_class, setBurgerClass] = useState("nav__button-line");
  const [menu_class, setMenuClass] = useState("nav__sidebar hidden");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    if (windowSize.innerWidth > tabletWidth) {
      setMenuClass("nav__items");
      setBurgerButtonClass("nav__button hidden");
    } else {
      setMenuClass("nav__sidebar hidden");
      setBurgerButtonClass("nav__button");
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize.innerWidth]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
        updateMenu();
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const updateMenu = () => {
    if (!isMenuOpen) {
      disableScroll(true);
      setBurgerButtonClass("nav__button fixed-top-right");
      setBurgerClass("nav__button-line clicked");
      setMenuClass("nav__sidebar");
    } else {
      disableScroll(false);
      setBurgerButtonClass("nav__button");
      setBurgerClass("nav__button-line");
      setMenuClass("nav__sidebar hidden");
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav container">
      <a href="/" className="nav__logo">
        <img src={logo} alt="Dartovich site logo" />
      </a>
      <nav className="nav__list" ref={ref}>
        <div className={burger_button_class} onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <ul className={menu_class}>
          {navItems.map((item) => {
            return (
              <li className="nav__item" key={item.key}>
                <Link
                  className="nav__link"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  onClick={() => isMenuOpen ? updateMenu() : setIsMenuOpen(false)}
                  
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
