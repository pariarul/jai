"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aryan Gupta",
    role: "JEE Aspirant",
    content: "The one-on-one sessions helped me crack complex physics problems that I previously struggled with. My tutor was extremely patient and knowledgeable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop",
  },
  {
    name: "Sanya Malhotra",
    role: "IGCSE Student (Grade 10)",
    content: "I saw a significant improvement in my math grades. The teaching style is very interactive and far better than standard classroom learning.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop",
  },
  {
    name: "Dr. Vikram Singh",
    role: "Parent of Karan Singh",
    content: "Finding a reliable tutor for IB was tough until we found Jai Academy. Their matching process is top-notch. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Real Stories from <span className="gradient-text">Real Students</span>
          </motion.h2>
          <p className="text-gray-500 text-lg uppercase tracking-widest font-semibold">Trust & Excellence</p>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white dark:bg-gray-900 rounded-[50px] p-10 lg:p-20 shadow-2xl relative border border-gray-100 dark:border-gray-800"
            >
              <div className="absolute top-10 left-10 text-primary-light opacity-30">
                <Quote size={80} fill="currentColor" />
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-[30px] overflow-hidden shadow-2xl flex-shrink-0">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4 text-yellow-400">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-xl lg:text-2xl italic text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                    "{testimonials[index].content}"
                  </p>
                  <div>
                    <h4 className="text-2xl font-bold text-primary">{testimonials[index].name}</h4>
                    <span className="text-gray-500 font-medium">{testimonials[index].role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-white transition-all z-20 group"
          >
            <ChevronLeft size={32} className="group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl hover:bg-primary hover:text-white transition-all z-20 group"
          >
            <ChevronRight size={32} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
