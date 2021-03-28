import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (

    <div className='container'>
      <Navbar />

      <About />
      <Footer />

    </div>
  );
}

export default App;
