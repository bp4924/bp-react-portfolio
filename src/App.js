import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="no-scrollbar">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
