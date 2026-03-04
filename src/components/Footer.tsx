import { Croissant, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-6">
              <Croissant className="w-8 h-8 text-amber-600" />
              <span className="text-2xl font-serif font-bold">Pastry<span className="text-amber-600">Shop</span></span>
            </div>
            <p className="max-w-md text-stone-400 mb-8 leading-relaxed">
              Bringing you the finest handcrafted pastries baked fresh every day. Taste the tradition, feel the love in every bite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition-colors">Signature Menu</a></li>
              <li><a href="#visit" className="hover:text-amber-500 transition-colors">Visit Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <p>© {new Date().getFullYear()} Deluxe Pastry Shop. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Developed with <span className="text-red-500 mx-1">❤️</span> by Hasiya.
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
