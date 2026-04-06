"use client";
import { motion } from "framer-motion";
import { Star, GraduationCap, Clock, Award } from "lucide-react";

const tutors = [
  {
    name: "Dr. Ananya Sharma",
    subject: "Mathematics & Physics (IB/IGCSE)",
    exp: "12+ Years",
    qual: "Ph.D. in Mathematics",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    name: "Prof. Rajesh Kumar",
    subject: "Chemistry (JEE/NEET Specialist)",
    exp: "15+ Years",
    qual: "M.Sc. from IIT Delhi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1374&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    name: "Ms. Sarah Jones",
    subject: "English Literature & SAT Prep",
    exp: "8+ Years",
    qual: "MA in English (Oxford)",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
    rating: 4.9,
  },
];

const TutorListing = () => {
  return (
    <section id="tutors" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Learn from India's <span className="gradient-text">Top Educators</span>
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Expert tutors from premium institutions like IITs, NITs, and top global universities, dedicated to your success.
            </p>
          </div>
          <button className="px-6 py-2 border-2 border-gray-200 dark:border-gray-800 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
            View All Tutors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor, index) => (
            <motion.div
              key={tutor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-morphism rounded-[32px] overflow-hidden premium-card-shadow group border border-white/20"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tutor.image}
                  alt={tutor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-lg text-sm font-bold text-gray-800">
                  <Star size={16} fill="#FFD700" color="#FFD700" /> {tutor.rating}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{tutor.name}</h3>
                <p className="text-primary font-semibold text-sm mb-6 uppercase tracking-wider">{tutor.subject}</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <Award size={18} className="text-secondary" />
                    <span>{tutor.exp} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <GraduationCap size={18} className="text-secondary" />
                    <span className="truncate">{tutor.qual}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-gray-50 dark:bg-gray-800/50 hover:bg-premium-gradient hover:text-white rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  Get Free Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorListing;
