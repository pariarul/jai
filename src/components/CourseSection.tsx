"use client";
import { motion } from "framer-motion";
import { 
  Baby, 
  BookText, 
  Zap, 
  Code2, 
  School, 
  ChevronRight 
} from "lucide-react";

const courses = [
  {
    title: "Nursery to 10th",
    desc: "Foundation building for school success",
    icon: <Baby size={32} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "11th & 12th",
    desc: "Board specialized training & prep",
    icon: <BookText size={32} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Competitive Exams",
    desc: "JEE, NEET, NDA, & Olympiads",
    icon: <Zap size={32} />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Coding & Languages",
    desc: "Python, Java, Web Dev, French, etc.",
    icon: <Code2 size={32} />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Graduation Courses",
    desc: "Technical & Professional support",
    icon: <School size={32} />,
    color: "bg-rose-100 text-rose-600",
  },
];

const CourseSection = () => {
  return (
    <section id="curriculum" className="py-24 bg-gray-50 dark:bg-black/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Courses for <span className="gradient-text">Every Student</span>
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From kindergarten to professional levels, we provide expert guidance for all academic paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white dark:bg-gray-900 rounded-[32px] shadow-lg border border-gray-100 dark:border-gray-800 group hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 ${course.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                {course.title} <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {course.desc}
              </p>
            </motion.div>
          ))}
          
          {/* View More Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-premium-gradient rounded-[32px] shadow-2xl flex flex-col items-center justify-center text-center text-white group cursor-pointer"
          >
            <h3 className="text-2xl font-bold mb-4">Finding something else?</h3>
            <p className="opacity-90 mb-8">Tell us your custom needs and we'll find the perfect tutor.</p>
            <button className="px-6 py-2 bg-white text-primary rounded-full font-bold group-hover:scale-105 transition-transform">
              Send Query
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
