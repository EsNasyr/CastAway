import './App.css';
import headerLogo from '../src/Images/Vector.svg'
import Home from "./Pages/Home/Home";
import Episodes from "./Pages/Episodes/Episodes";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Reviews from "./Pages/Reviews/Reviews";
import "@fortawesome/fontawesome-svg-core"
import icon from '../src/Images/arrow-up-solid.svg'
import Footer from "./Pages/Footer/Footer";

function App() {

  return (
    <div className="App">
        <div className="appWrapper">
            <header className="App-header">
                <img src={headerLogo} alt="" className="headerImg"/>
                <nav>
                    <a href="#home" className="headerLinks">Home</a>
                    <a href="#episodes" className="headerLinks">Episodes</a>
                    <a href="#about" className="headerLinks">About</a>
                    <a href="#contact" className="headerLinks">Contact</a>
                    <a href="#reviews" className="headerLinks">Reviews</a>
                </nav>

            </header>
            <Home />
            <Episodes/>
            <About/>
            <Contact/>
            <Reviews/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
