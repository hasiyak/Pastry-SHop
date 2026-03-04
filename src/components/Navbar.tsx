import { useState, useEffect } from 'react';
import { Menu, X, Croissant } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Our Story', to: 'about' },
    { name: 'Menu', to: 'products' },
    { name: 'Visit Us', to: 'visit' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 bg-white/80' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer text-amber-800">
          <Croissant className="w-8 h-8" />
          <span className="text-2xl font-serif font-bold">Pastry<span className="text-amber-600">Shop</span></span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.to} 
                smooth={true} 
                duration={800} 
                className={`cursor-pointer hover:text-amber-600 transition ${isScrolled ? 'text-stone-800' : 'text-stone-100 hover:text-white'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              className="cursor-pointer bg-amber-800 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 hover:shadow-lg transition-all"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-stone-800' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden flex flex-col items-center py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.to} 
                smooth={true} 
                duration={800} 
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-stone-800 hover:text-amber-600 text-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="contact" 
              smooth={true} 
              duration={800}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition w-11/12 text-center"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
