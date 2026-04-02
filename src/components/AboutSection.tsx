"use client";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Zap, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl premium-card-shadow aspect-[4/5] lg:aspect-square">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop"
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-premium-gradient opacity-20" />
            </div>
            
            {/* Stats Overlay */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -right-5 md:right-10 glass-morphism p-8 rounded-[30px] shadow-2xl border border-white/30 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-3xl font-black gradient-text">98%</p>
                  <p className="text-sm font-bold opacity-70 uppercase tracking-widest">Success Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story & Vision</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Empowering Students Through <span className="gradient-text">Exceptional</span> Tutoring
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Jai Education Academy was founded with a single mission: to provide high-quality, personalized education that caters to the unique learning needs of every student. We believe that every child has the potential to excel given the right guidance and environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { icon: <Target className="text-red-500" />, text: "Personalized Study Plans" },
                { icon: <Heart className="text-pink-500" />, text: "Passionate Educators" },
                { icon: <CheckCircle2 className="text-green-500" />, text: "Regular Performance Analysis" },
                { icon: <ChevronRight className="text-primary" />, text: "Holistic Development" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold text-lg">
                  <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-premium-gradient text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
