import Header from "../Header/Header";
// import Footer from '../footer/footer.js';
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
        <section className="about">about</section>
      </main>
      <footer className="footer">
        <div className="container">footer</div>
      </footer>
    </div>
  );
}

export default App;
