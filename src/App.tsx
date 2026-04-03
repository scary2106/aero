import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandSection from './components/BrandSection';
import CarShowcase from './components/CarShowcase';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Car as CarIcon } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for premium feel
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-gold selection:text-brand-dark">
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-brand-dark flex flex-col items-center justify-center gap-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className="flex flex-col items-center gap-4"
            >
              <CarIcon className="w-16 h-16 text-brand-gold" />
              <h1 className="text-4xl font-display font-bold uppercase tracking-[0.5em] italic text-white">
                Aero
              </h1>
            </motion.div>
            
            <div className="w-48 h-px bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-brand-gold"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] uppercase tracking-[0.3em] text-white/40"
            >
              Curating Excellence
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <BrandSection />
            
            <section className="py-32 px-6 bg-brand-dark border-y border-white/5">
              <div className="max-w-7xl mx-auto text-center">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
                >
                  Engineering Marvels
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter italic mb-12"
                >
                  The <span className="text-white/30">Showcase</span>
                </motion.h2>
              </div>
            </section>

            <CarShowcase />

            {/* Engineering Section */}
            <section id="engineering" className="py-32 px-6 bg-brand-gray relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <img
                  src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop"
                  alt="Engine"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="max-w-2xl">
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                    Beyond Performance
                  </span>
                  <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter italic mb-8">
                    Precision <span className="text-white/30">Crafted</span>
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                    Every vehicle in our collection undergoes a rigorous 200-point inspection by master technicians. We don't just sell cars; we deliver mechanical masterpieces.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Aerodynamics</h4>
                      <p className="text-white/40 text-sm font-light">Active aero systems that adapt to speed and cornering forces in milliseconds.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Materials</h4>
                      <p className="text-white/40 text-sm font-light">Proprietary carbon fiber weaves and aerospace-grade titanium components.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section id="experience" className="py-32 px-6 bg-brand-dark text-center">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter italic mb-12"
                >
                  Ready to <span className="text-brand-gold">Ascend?</span>
                </motion.h2>
                <p className="text-white/60 text-xl font-light mb-12">
                  Join the most exclusive community of automotive enthusiasts.
                </p>
                <button className="px-12 py-5 bg-white text-brand-dark font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-all duration-500 hover:scale-110">
                  Request Private Viewing
                </button>
              </div>
            </section>
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
