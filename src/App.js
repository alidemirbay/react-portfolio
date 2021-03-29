import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (

    <div className='container'>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/"> <AboutPage /> </Route>
            <Route exact path="/about"> <AboutPage /> </Route>
            <Route exact path="/portfolio" > <PortfolioPage /> </Route>
          </Switch>
        </div>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
