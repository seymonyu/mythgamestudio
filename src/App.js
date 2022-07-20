import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Games from "./pages/Games/Games";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/games">GAMES</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>

            <Route exact path="/games" component={Games}/>
            <Route exact path="/blog" component={Blog}/>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
