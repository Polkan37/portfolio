import React from 'react';
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import mainInfo from "../../constants/mainInfo";
import "./App.css";
import PriceSection from '../../PriceSection/PriceSection';


function App() {
  return (
    <div className="wrapper">
      <Header {...mainInfo}/>
      <main className="main">
        <AboutSection />
        <PortfolioSection />
        <PriceSection />
      </main>
      <footer className="footer">
        <div className="container">footer</div>
      </footer>
    </div>
  );
}

export default App;
