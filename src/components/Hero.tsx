import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark z-10" />
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f3ca99a832d?q=80&w=2069&auto=format&fit=crop"
          alt="Hero Car"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ opacity }}
        >
          <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
            Defining Automotive Perfection
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-8 italic">
            Speed <span className="text-white/30">Redefined</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Experience the pinnacle of engineering and design. Aero brings you the most exclusive hypercars in the world, curated for the extraordinary.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-white text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-gold transition-all duration-500 hover:scale-105">
              Explore Inventory
            </button>
            <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-500">
              The Collection
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-brand-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
