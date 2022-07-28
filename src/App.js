import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="wrapper">
        <Header />
        <main className='main'>
          other content blocks will be here
        </main>
        <Footer />
    </div>
  );
}

export default App;
