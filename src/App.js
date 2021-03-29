import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (

    <div >
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/"> <AboutPage /> </Route>
          <Route exact path="/about"> <AboutPage /> </Route>
          <Route exact path="/portfolio" > <PortfolioPage /> </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
