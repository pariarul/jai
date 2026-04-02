"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How do I choose the best tutor for my child?",
    a: "We match tutors based on your child's specific requirements, including subject, boards (IB/IGCSE/CBSE), and learning style. Our counselor assists you in making the perfect choice.",
  },
  {
    q: "Do you offer offline (Home) tutoring, or only online?",
    a: "We provide both! You can choose premium one-on-one home tutoring in major cities, or join our interactive global online platform from anywhere in the world.",
  },
  {
    q: "How does the free demo session work?",
    a: "Once you share your needs, we arrange a 45-minute live session with a recommended tutor. This allows you to experience the teaching style before making any commitments.",
  },
  {
    q: "What if I am not satisfied with the tutor after some time?",
    a: "We offer a guaranteed replacement policy. If you feel the tutor is not the right fit, our team will provide an alternative tutor within 24-48 hours.",
  },
  {
    q: "How do you track student progress?",
    a: "We conduct bi-weekly assessments and provide detailed performance reports. Our academic directors also hold regular feedback sessions with parents.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50 dark:bg-black/40">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="text-gray-500 text-lg">Clear your doubts about our platform and services.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl border transition-all overflow-hidden ${
                  activeIndex === index 
                    ? "bg-white dark:bg-gray-900 border-primary/30 shadow-xl" 
                    : "bg-transparent border-gray-200 dark:border-gray-800"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full p-6 lg:p-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl font-bold ${activeIndex === index ? "text-primary" : "text-gray-700 dark:text-gray-300"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeIndex === index ? "bg-primary text-white rotate-180" : "bg-gray-100 dark:bg-gray-800"
                  }`}>
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 lg:p-8 pt-0 text-lg text-gray-500 dark:text-gray-400 border-t border-gray-50 dark:border-gray-800 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
