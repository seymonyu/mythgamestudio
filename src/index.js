import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Games from "./pages/Games/Games";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="games" element={<Games />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);