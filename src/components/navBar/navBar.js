import logo from "./logo.png";
import "./navBar.css";
import { Component } from "react";
import NavItemsList from "../navList/navItemsList";

const topBarItems = [
  { name: "About", link: "#about", key: 1 },
  { name: "Portfolio", link: "#portfolio", key: 2 },
  { name: "Price", link: "#price", key: 3 },
  { name: "Contact me", link: "#contact", key: 4 },
];
const navButton = {
  burger: <i className="uil uil-bars icon-menu"></i>,
  close: <i className="uil uil-times close-icon-menu"></i>,
};

function NavBar() {
  return (
    <nav className="header__nav">
      <div className="container">
        <div className="nav__menu">
          <a href="index.html">
            <img src={logo} alt="logo" className="nav__logo-img" />
          </a>

         <Navigation topBarItems={topBarItems} navigation={undefined} status={'closed'}/>
        </div>
      </div>
    </nav>
  );
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: navButton.burger,
      status: 'closed'
    }
  }
  showMenu = () => {
    this.setState({
      status: (this.state.status === 'open' ? 'closed' : 'open'),
      navigation: (this.state.navigation === navButton.burger ? navButton.close : navButton.burger)
    })
  }
  render() {
    const { topBarItems } = this.props;
    const burgerMenu = this.state.status === 'open' ? (<NavItemsList items={topBarItems}/>) : ('');
    return (
      <div>
        {burgerMenu}

        <button onClick={this.showMenu} className="nav__button">{this.state.navigation}</button>
      </div>
    );
  }
}

export default NavBar;
