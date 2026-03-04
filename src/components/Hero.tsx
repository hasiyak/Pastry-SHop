import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center hero-gradient text-white px-4 overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-500/20 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-amber-300 font-medium tracking-widest uppercase mb-4"
        >
          Artisan Bakery
        </motion.p>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-[1.1]">
          Freshly Baked With <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            Pure Love
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl mb-10 text-stone-200 font-light max-w-2xl mx-auto"
        >
          Experience the finest handcrafted pastries in town, where every bite tells a story of tradition and quality.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link 
            to="products" 
            smooth={true} 
            duration={800} 
            className="cursor-pointer bg-amber-600 hover:bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(217,119,6,0.3)] w-full sm:w-auto"
          >
            Order Now
          </Link>
          <button 
            onClick={() => alert("Welcome to our Pastry Shop, Machan! Hope you have a sweet day!")}
            className="cursor-pointer border-2 border-white/50 hover:border-white text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white hover:text-stone-900 w-full sm:w-auto"
          >
            Our Story
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
