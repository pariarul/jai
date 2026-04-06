"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-50 border border-gray-200 mb-10 text-sm font-bold uppercase tracking-widest text-primary shadow-sm">
            Premium Online Tutoring
          </div>
          
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-8 leading-[1.1] text-black">
            Best Online <span className="text-primary">Tutors</span> in India
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl font-medium leading-relaxed">
            Leading academic platform for IGCSE, IB, CBSE, ICSE & NIOS boards. Exceptional tutoring tailored to your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full">
            <button className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-lg font-black text-xl shadow-lg hover:bg-primary-dark active:scale-95 transition-all flex items-center justify-center gap-3">
              Get Free Demo <ArrowRight size={24} />
            </button>
            <Link href="/tutors" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-gray-200 text-black rounded-lg font-black text-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3">
              <Play size={24} /> Hire a Tutor
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-12 pt-10 border-t border-gray-100">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-black">10k+</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Students</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-black">500+</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Tutors</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-black">4.9/5</span>
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative group max-w-[500px]">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop"
              alt="Online Learning"
              className="rounded-3xl shadow-2xl skew-y-1 transition-all"
            />
            <div className="absolute inset-0 border-8 border-primary/10 rounded-3xl -m-4 -z-10" />
            
            <div className="absolute -top-10 -left-10 p-6 bg-white border border-gray-100 rounded-2xl shadow-xl flex items-center gap-4 z-20">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center">
                    <BookOpen size={28} />
                </div>
                <span className="font-black text-black">IB/IGCSE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
