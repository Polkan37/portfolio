import React from "react";
import telegrem from '../../resources/img/icons-telegram.png';
import facebook from '../../resources/img/icons-facebook.png';
import instagram from '../../resources/img/icons-instagram.png';
import "./sideBar.css";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__line"></div>
      <a href="/" className="sidebar__item" target="_blank">
        <img src={telegrem} alt="telegram icon" />
      </a>
      <a href="/" className="sidebar__item" target="_blank">
        <img src={instagram} alt="instagram icon" />
      </a>
      <a href="/" className="sidebar__item" target="_blank">
        <img src={facebook} alt="facebook icon" />
      </a>
      <div className="sidebar__line"></div>
    </aside>
  );
}

export default SideBar;
