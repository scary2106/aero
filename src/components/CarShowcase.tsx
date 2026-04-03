import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { CARS } from '../constants';
import { ArrowRight, Gauge, Zap, Wind } from 'lucide-react';

import { Car } from '../types';

export default function CarShowcase() {
  return (
    <section id="showcase" className="bg-brand-dark">
      {CARS.map((car, index) => (
        <CarItem key={car.id} car={car} index={index} />
      ))}
    </section>
  );
}

interface CarItemProps {
  car: Car;
  index: number;
  key?: string;
}

function CarItem({ car, index }: CarItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden border-b border-white/5">
      <div className={index % 2 === 0 ? "w-full md:w-1/2 h-[50vh] md:h-screen order-1" : "w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2"}>
        <motion.div style={{ y: imageY }} className="w-full h-full relative">
          <div className="absolute inset-0 bg-brand-dark/20 z-10" />
          <img
            src={car.image}
            alt={car.model}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className={index % 2 === 0 ? "w-full md:w-1/2 p-8 md:p-24 order-2" : "w-full md:w-1/2 p-8 md:p-24 order-2 md:order-1"}>
        <motion.div style={{ y: textY }}>
          <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            {car.brand}
          </span>
          <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none mb-8 italic">
            {car.model}
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12 max-w-md">
            {car.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white/40 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest">Power</span>
              </div>
              <span className="text-xl font-display font-bold">{car.specs.power}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white/40 mb-1">
                <Wind className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest">Top Speed</span>
              </div>
              <span className="text-xl font-display font-bold">{car.specs.topSpeed}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white/40 mb-1">
                <Gauge className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest">0-100 KM/H</span>
              </div>
              <span className="text-xl font-display font-bold">{car.specs.acceleration}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-white/40 mb-1">
                <span className="text-[10px] uppercase tracking-widest">Price</span>
              </div>
              <span className="text-xl font-display font-bold text-brand-gold">{car.price}</span>
            </div>
          </div>

          <button className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white hover:text-brand-gold transition-colors">
            Configure Details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
