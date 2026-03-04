import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 transform skew-x-12 translate-x-32" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 border-[40px] border-amber-900/10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 bg-stone-800 border border-stone-700 text-amber-500 rounded-full text-sm font-semibold tracking-wide mb-6">
              GET IN TOUCH
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white leading-tight">
              Let's Talk <span className="text-amber-500 italic">Sweets!</span>
            </h2>
            
            <p className="text-stone-400 text-lg mb-12 leading-relaxed max-w-lg">
              Planning a special event? From wedding cakes to bulk office orders, we are here to help make your occasions memorable and delicious.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="bg-stone-800 p-4 rounded-2xl group-hover:bg-amber-600 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-amber-500 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-stone-400 text-sm mb-1">Call Us</span>
                  <a href="tel:0740953993" className="text-xl font-medium hover:text-amber-400 transition-colors">0740953993</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="bg-stone-800 p-4 rounded-2xl group-hover:bg-green-600 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 text-green-500 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-stone-400 text-sm mb-1">WhatsApp</span>
                  <a href="https://wa.me/94740953993" className="text-xl font-medium hover:text-green-400 transition-colors">0740953993</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="bg-stone-800 p-4 rounded-2xl group-hover:bg-amber-600 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-amber-500 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-stone-400 text-sm mb-1">Email Support</span>
                  <a href="mailto:support@pastryshop.com" className="text-xl font-medium hover:text-amber-400 transition-colors">support@pastryshop.com</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-stone-900/50"
          >
            <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-shadow text-stone-800 placeholder:text-stone-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-shadow text-stone-800 placeholder:text-stone-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Wedding Cake Inquiry"
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-shadow text-stone-800 placeholder:text-stone-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Your Message</label>
                <textarea 
                  placeholder="Tell us about your requirements..."
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl h-40 focus:ring-2 focus:ring-amber-500 outline-none transition-shadow text-stone-800 placeholder:text-stone-400 resize-none"
                ></textarea>
              </div>
              
              <button className="w-full bg-amber-800 text-white font-bold py-4 rounded-xl hover:bg-amber-700 transition flex items-center justify-center space-x-2 group shadow-lg shadow-amber-800/30">
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
