import React from 'react';
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import "./App.css";
import PriceSection from '../PriceSection/PriceSection';
import Footer from '../Footer/Footer';
import ContactSection from '../ContactSection/ContactSection';


function App() {
  return (
    <div className="wrapper">
      <Header/>
      <main className="main">
        <AboutSection />
        <PortfolioSection />
        <PriceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
