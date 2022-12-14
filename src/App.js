import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// background image by svgbackgrounds.com
import splashScreen from "./assets/vanishing-stripes.svg";

function App() {
  return (
    <div
      className="no-scrollbar"
      style={{ backgroundImage: `url(${splashScreen})` }}
    >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
