import { motion } from 'framer-motion';
import { Clock, MapPin, CalendarDays } from 'lucide-react';

const Visit = () => {
  return (
    <section id="visit" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-stone-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl"
      >
        {/* Background design accents */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-900/40 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-stone-700/40 rounded-full blur-[100px]" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Visit Our <br />
              <span className="text-amber-500 italic">Bakery</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Step into a space filled with the heavenly aroma of freshly baked bread, roasting coffee, and warm pastries. We can't wait to serve you.
            </p>
            
            <div className="flex items-start space-x-4 text-stone-300">
              <MapPin className="w-6 h-6 text-amber-500 mt-1 shrink-0" />
              <div>
                <strong className="block text-white mb-1">Our Location</strong>
                123 Bakery Street, Sweet Town<br />Colombo 00700, Sri Lanka
              </div>
            </div>
          </div>

          <div className="bg-stone-800/50 backdrop-blur-md rounded-3xl p-8 border border-stone-700">
            <div className="flex items-center space-x-3 mb-8">
              <Clock className="w-6 h-6 text-amber-500" />
              <h3 className="text-2xl font-semibold text-white">Opening Hours</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex justify-between items-center border-b border-stone-700 pb-4">
                <span className="text-stone-300 font-medium tracking-wide">Mon - Fri</span>
                <span className="text-white font-semibold flex items-center bg-stone-700/50 px-3 py-1 rounded-md">
                  08:00 AM - 08:00 PM
                </span>
              </li>
              <li className="flex justify-between items-center border-b border-stone-700 pb-4">
                <span className="text-stone-300 font-medium tracking-wide">Saturday</span>
                <span className="text-white font-semibold flex items-center bg-stone-700/50 px-3 py-1 rounded-md">
                  09:00 AM - 09:00 PM
                </span>
              </li>
              <li className="flex justify-between items-center text-amber-400 font-medium">
                <span className="tracking-wide">Sunday</span>
                <span className="font-semibold flex items-center bg-stone-700/50 px-3 py-1 rounded-md">
                  09:00 AM - 05:00 PM
                </span>
              </li>
            </ul>
            
            <div className="mt-8 flex items-center space-x-3 text-sm text-stone-400 font-medium bg-stone-900/50 p-4 rounded-xl">
              <CalendarDays className="w-5 h-5 text-stone-500" />
              <span>* Closed on Poya Days and Public Holidays.</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Visit;
