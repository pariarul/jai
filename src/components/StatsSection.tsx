"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Students Enrolled", value: "10,000+" },
  { label: "Expert Tutors", value: "500+" },
  { label: "Classes Conducted", value: "1.2 Lakh+" },
  { label: "Student Rating", value: "4.9/5" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-premium-gradient text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="space-y-2 group"
            >
              <h3 className="text-4xl lg:text-5xl font-black group-hover:scale-110 transition-transform cursor-pointer">
                {stat.value}
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
