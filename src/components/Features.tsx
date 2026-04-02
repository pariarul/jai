"use client";
import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  ShieldCheck, 
  MessagesSquare, 
  Target, 
  Lightbulb 
} from "lucide-react";

const features = [
  {
    title: "One-on-One Learning",
    desc: "Personalized attention ensuring every doubt is resolved instantly.",
    icon: <Users size={28} />,
  },
  {
    title: "Expert Tutors",
    desc: "Over 500+ handpicked educators from premium institutions.",
    icon: <ShieldCheck size={28} />,
  },
  {
    title: "Flexible Timings",
    desc: "Learn at your own convenience from the comfort of home.",
    icon: <Clock size={28} />,
  },
  {
    title: "Parent Interaction",
    desc: "Regular feedback sessions and progress reports for parents.",
    icon: <MessagesSquare size={28} />,
  },
  {
    title: "Targeted Prep",
    desc: "Specialized focus on JEE, NEET, and International Boards.",
    icon: <Target size={28} />,
  },
  {
    title: "Smart Learning",
    desc: "Modern teaching aids and interactive digital whiteboards.",
    icon: <Lightbulb size={28} />,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-widest text-sm"
          >
            Why Choose Jai Academy?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mt-4 text-black"
          >
            Personal & Powerful <span className="text-primary">Learning</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all text-center md:text-left"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-8 mx-auto md:mx-0">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
