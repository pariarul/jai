"use client";
import { motion } from "framer-motion";
import { Calendar, Award, Rocket, Globe, Milestone } from "lucide-react";

const events = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Jai Education Academy was founded with a small team of 5 expert tutors in Gurgaon.",
    icon: <Rocket size={24} />,
    color: "bg-blue-500",
  },
  {
    year: "2018",
    title: "1000+ Students",
    desc: "Expanded across North India, reaching our first major milestone of 1,000 active students.",
    icon: <Milestone size={24} />,
    color: "bg-purple-500",
  },
  {
    year: "2020",
    title: "Going Digital",
    desc: "Launched our state-of-the-art online platform to support students during the global pandemic.",
    icon: <Globe size={24} />,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Global Recognition",
    desc: "Became a preferred partner for several international schools under IB and IGCSE boards.",
    icon: <Award size={24} />,
    color: "bg-yellow-500",
  },
];

const HistorySection = () => {
  return (
    <section id="history" className="py-24 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            The Journey of Excellence
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mt-4"
          >
            Our <span className="gradient-text">History</span> Through The Years
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 dark:bg-gray-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="glass-morphism p-8 rounded-[30px] shadow-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-all group">
                    <span className="text-4xl font-black gradient-text mb-4 block">{event.year}</span>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full bg-white dark:bg-gray-900 shadow-2xl flex items-center justify-center border-4 border-gray-50 dark:border-gray-800 group-hover:scale-110 transition-transform">
                  <div className={`${event.color} w-10 h-10 rounded-full flex items-center justify-center text-white`}>
                    {event.icon}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
