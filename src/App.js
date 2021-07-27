import {BrowserRouter, Link, Route} from "react-router-dom"
import './App.css';
import Home from "./Components/Home";
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import ServicesDetail from "./Components/ServicesDetail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/Services">Services</Link>
    <Link to="/Contact">Contact</Link>
    </div>

    <Route path="/" exact component={Home} />
    <Route path="/About" exact component={About} />
    <Route path="/Services" exact component={Services} />
    <Route path="/ServicesDetail/:id" exact component={ServicesDetail} />
    <Route path="/Contact" exact component={Contact} />

    </BrowserRouter>
  );
}

export default App;
