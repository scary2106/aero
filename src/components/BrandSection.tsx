import { motion } from 'motion/react';
import { BRANDS } from '../constants';

export default function BrandSection() {
  return (
    <section id="brands" className="py-32 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              The Elite Circle
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter italic"
            >
              Partnered with <span className="text-white/30">Legends</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-sm font-light leading-relaxed"
          >
            We work exclusively with manufacturers who redefine the boundaries of physics and luxury.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/10 border border-white/10 overflow-hidden">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square bg-brand-dark flex flex-col items-center justify-center p-8 hover:bg-brand-gray transition-colors duration-700"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="w-20 h-20 object-contain filter grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{brand.origin}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
