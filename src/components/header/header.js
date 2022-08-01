import "./header.css";
import NavBar from "../navBar/navBar";

function Header({title, subTitle, buttonText, buttonAction, backgroundVideo}) {
  return (
    <header className="header">
      <NavBar />
      <div className="header__home">
        <div className="video-wrapper"></div>
        {backgroundVideo}
        <div className="container">
          <div className="home__block">
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <button onClick={buttonAction}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
