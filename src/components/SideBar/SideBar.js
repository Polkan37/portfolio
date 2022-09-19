import React from "react";
import links from "../../constants/sideBarIcons";
import "./sideBar.css";



function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__line"></div>
      
      <ul>
        {links.map(function(el, id){
          return (
                    <li key={id} className="sidebar__item">
                      <a href="/" target="_blank">
                        <img src={el.url} alt={el.alt} />
                      </a>
                    </li>)
        })}
      </ul>
      <div className="sidebar__line"></div>
    </aside>
  );
}

export default SideBar;
