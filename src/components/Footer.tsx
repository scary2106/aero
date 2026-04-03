import { motion } from 'motion/react';
import { Car as CarIcon, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-32 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <CarIcon className="w-8 h-8 text-brand-gold" />
              <span className="text-2xl font-display font-bold tracking-tighter uppercase italic">Aero</span>
            </div>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
              The world's most exclusive automotive brokerage. Curating the extraordinary for the exceptional.
            </p>
            <div className="flex items-center gap-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-brand-gold transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white/60">Inventory</h4>
            <ul className="flex flex-col gap-4">
              {['New Arrivals', 'Hypercars', 'Classic', 'Off-Market'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-brand-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white/60">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Our Process', 'Engineering', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-brand-gold transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white/60">Newsletter</h4>
            <p className="text-sm text-white/40 mb-6">Join the elite circle for off-market opportunities.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-brand-gold transition-colors w-full"
              />
              <button className="px-6 py-3 bg-white text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <span className="text-[10px] uppercase tracking-widest text-white/20">
            © 2024 Aero Automotive Group. All rights reserved.
          </span>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
