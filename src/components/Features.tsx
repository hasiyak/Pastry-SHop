import { motion } from 'framer-motion';
import { Leaf, ChefHat, Truck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: "Organic Ingredients",
    description: "We use only the finest, 100% organic flour and farm-fresh dairy products for our bakes.",
  },
  {
    icon: <ChefHat className="w-10 h-10 text-amber-600" />,
    title: "Expert Chefs",
    description: "Our bakers have years of experience in crafting perfect French and local pastries.",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "Daily Fresh Delivery",
    description: "Get your favorites delivered to your doorstep within hours of baking for maximum freshness.",
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center p-8 rounded-2xl hover:bg-stone-50 transition-colors group cursor-default"
            >
              <div className="w-20 h-20 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-800">{feature.title}</h3>
              <p className="text-stone-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
