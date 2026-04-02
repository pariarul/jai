"use client";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-gray-50 dark:bg-black/50">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "gradient-text" : ""}> {word} </span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHeader;
