import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import './App.css';
const items = {
  title: 'Anastasia Dartovich',
  subTitle: 'Photographer',
  buttonText: 'Order',
  buttonAction: null,
  backgroundVideo: (<iframe title="background"
  src="https://player.vimeo.com/video/734013633?h=3a9d2653ce&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;autopause=0&amp;title=0&amp;byline=0&amp;portrait=0"
  allow="autoplay; fullscreen; picture-in-picture"
></iframe>),
}

function App() {
  return (
    <div className="wrapper">
        <Header {...items}/>
        <main className='main'>
          other content blocks will be here
        </main>
        <Footer />
    </div>
  );
}

export default App;
