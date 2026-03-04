import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Artisan Cakes",
    description: "Finest ingredients for any celebration.",
    price: "Rs. 2500",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Gourmet Cookies",
    description: "Soft, chewy, and freshly baked anytime.",
    price: "Rs. 150",
    image: "https://images.unsplash.com/photo-1499636136210-65424f1f58cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Fluffy Muffins",
    description: "Blueberry and double chocolate flavors.",
    price: "Rs. 200",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Savory Veg Puffs",
    description: "Savory mix of vegetables, perfectly flaky.",
    price: "Rs. 120",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Menu = () => {
  return (
    <section id="products" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-amber-200/50 text-amber-800 rounded-full text-sm font-semibold tracking-wide mb-4"
          >
            HANDCRAFTED DELIGHTS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-stone-900 mb-4"
          >
            Our Signature Menu
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 max-w-2xl mx-auto text-lg"
          >
            Explore our most-loved treats, baked fresh every morning with love, passion, and the finest ingredients we can source.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
                  alt={product.name}
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-stone-900">{product.name}</h3>
                <p className="text-stone-500 text-sm mb-6 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-stone-400 uppercase font-semibold">Starting at</span>
                    <span className="text-amber-700 font-bold text-lg">{product.price}</span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-amber-800 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
