import React, {useEffect,useState} from "react";
import "./navBar.css";
import logo from "../../resources/img/logo.png";
import { navItems}  from '../../constants/header.constants';
const tabletWidth = 828;

const list = navItems.map((item) => {
  return (
    <li className="nav__item" key={item.key}>
      <a href={item.link} className="nav__link">
        {item.name}
      </a>
    </li>
  );
});

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function NavBar() {
  const [burger_button_class, setBurgerButtonClass] = useState("nav__button");
  const [burger_class, setBurgerClass] = useState("nav__button-line");
  const [menu_class, setMenuClass] = useState("nav__sidebar hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    if(windowSize.innerWidth > tabletWidth){
        setMenuClass("nav__items");
        setBurgerButtonClass("nav__button hidden");
      }
      else {
        setMenuClass("nav__sidebar hidden");
        setBurgerButtonClass("nav__button");
      }
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[windowSize.innerWidth]);


  const updateMenu = () => {
      if(!isMenuClicked){
          setBurgerButtonClass("nav__button fixed-top-right");
          setBurgerClass("nav__button-line clicked");
          setMenuClass("nav__sidebar")
      }
      else {
        setBurgerButtonClass("nav__button");
        setBurgerClass("nav__button-line");
        setMenuClass("nav__sidebar hidden")
      }
      setIsMenuClicked(!isMenuClicked);
  }

  return (
    <div className="nav container">
      <a href="#top" className="nav__logo">
        <img src={logo} alt="Dartovich site logo" />
      </a>
      <nav className="nav__list">
        <div className={burger_button_class} onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <ul className={menu_class}>{list}</ul>
      </nav>
    </div>
  );
}

export default NavBar;
