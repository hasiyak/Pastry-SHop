import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Menu from './components/Menu';
import Visit from './components/Visit';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-stone-800 bg-stone-50">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Menu />
      <Visit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
