import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative"
        >
          {/* Decorative backdrop */}
          <div className="absolute -inset-4 bg-amber-100 rounded-[2rem] transform -rotate-3 z-0"></div>
          
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Baking Process" 
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl relative z-10"
          />

          {/* Floating Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: "spring" }}
            className="absolute -bottom-8 -right-8 bg-white p-6 rounded-full shadow-xl z-20 w-32 h-32 flex flex-col items-center justify-center border-4 border-amber-50"
          >
            <span className="text-3xl font-bold text-amber-800">14+</span>
            <span className="text-xs font-medium text-stone-500 uppercase tracking-wider text-center">Years of<br/>Excellence</span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold tracking-wide mb-6">
            OUR STORY
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900 leading-tight">
            Crafting Joy<br />
            <span className="text-amber-800 italic">Since 2010</span>
          </h2>
          
          <p className="text-stone-600 text-lg leading-relaxed mb-8">
            Welcome to our Pastry Shop, where sweetness meets creativity! For over a decade, we have been dedicated to bringing joy to our community through our delicious, handcrafted pastries. Everything is baked fresh on premises by our artisan bakers.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:shadow-md transition">
              <span className="block text-4xl font-bold text-amber-800 mb-2">50+</span>
              <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Daily Products</span>
            </div>
            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:shadow-md transition">
              <span className="block text-4xl font-bold text-amber-800 mb-2">12k+</span>
              <span className="text-sm font-medium text-stone-500 uppercase tracking-wider">Happy Customers</span>
            </div>
          </div>
          
          <div className="relative p-8 rounded-2xl bg-amber-50 border border-amber-100">
            <div className="absolute top-4 left-4 text-4xl text-amber-200 font-serif leading-none">"</div>
            <p className="relative z-10 text-amber-900 font-medium italic text-lg ml-6">
              We promise to make your day a little sweeter, one bite at a time!
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
