"use client";
import { motion } from "framer-motion";
import { Smartphone, Zap, ArrowRight, ShieldCheck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-premium-gradient rounded-[50px] p-10 lg:p-20 relative overflow-hidden text-center text-white shadow-2xl"
      >
        {/* Animated Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[100%] bg-white/10 blur-[80px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[100%] bg-pink-500/20 blur-[80px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 text-sm font-bold uppercase tracking-widest border border-white/30">
            <Zap size={18} fill="currentColor" /> Ready to transform your grades?
          </div>
          
          <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">
            Start Your Journey with a <span className="underline decoration-yellow-400">Free Session</span> Today!
          </h2>
          
          <p className="text-xl lg:text-2xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
            Join 10,000+ students who are already learning from India's most loved tutors.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-primary rounded-2xl font-bold text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Get Your Free Demo <ArrowRight size={24} />
            </button>
            <button className="px-10 py-5 bg-black/30 border-2 border-white/30 backdrop-blur-md text-white rounded-2xl font-bold text-xl hover:bg-black/40 transition-all flex items-center gap-2">
              <Smartphone size={24} /> Book via WhatsApp
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-80 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} /> Verified Educators
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} /> Individual Focus
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} /> Result Driven
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
