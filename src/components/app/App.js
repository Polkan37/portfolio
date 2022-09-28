import React from 'react';
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import mainInfo from "../../constants/mainInfo";
import "./App.css";
import PriceSection from '../PriceSection/PriceSection';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="wrapper">
      <Header {...mainInfo}/>
      <main className="main">
        <AboutSection />
        <PortfolioSection />
        <PriceSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
