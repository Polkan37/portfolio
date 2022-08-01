import React from "react";

function NavItemsList({items, styles}) {
  const list = items.map(item => {
      return (
        <li className="nav__item" key={item.key}>
          <a href={item.link} className="nav__link">
            {item.name}
          </a>
        </li>)
  });
  return (
    <div className='nav__list-wrapper show-menu'>
      <ul className="nav__list grid">{list}</ul>
    </div>
  );
}

export default NavItemsList;
