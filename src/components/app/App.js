import React  from 'react';
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import mainInfo from "../../constants/mainInfo";
import "./App.css";


function App() {

  return (
    <div className="wrapper" id='root'>
      <Header {...mainInfo}/>
      <main className="main">
        <AboutSection />
        <PortfolioSection />
      </main>
      <footer className="footer">
        <div className="container">footer</div>
      </footer>
    </div>
  );
}

export default App;
