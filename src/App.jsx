import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-1">
                <Header />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
