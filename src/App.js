import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (

    <Router>
      <Navbar />
      <div   >
        <Switch>
          <Route exact path="/"> <AboutPage /> </Route>
          <Route exact path="/about"> <AboutPage /> </Route>
          <Route exact path="/portfolio" > <PortfolioPage /> </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
