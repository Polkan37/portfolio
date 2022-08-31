import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import "./App.css";
const mainInfo = {
  title: 'Anastasia Dartovich',
  subTitle: 'Photographer',
  buttonText: 'Order Photos',
  buttonAction: null
}

function App() {
  return (
    <div className="wrapper">
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
