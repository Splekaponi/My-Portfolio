import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Skills/Skills";
import Education from "./Components/Education/Education";
import BackToTop from "./Components/BackToTop/BackToTop"; 

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Education /> 
      <Skills /> 
      <Experience />
      <Projects />
      <Footer />
      {/* 2. Add it here */}
      <BackToTop /> 
    </div>
  );
}

export default App;