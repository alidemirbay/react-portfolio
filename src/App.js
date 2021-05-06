import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (

    <div >
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route exact path="/"> <AboutPage /> </Route>
          <Route exact path="/about"> <AboutPage /> </Route>
          <Route exact path="/projects" > <ProjectPage /> </Route>
          <Route exact path="/contact" > <ContactPage /> </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
