"use client";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    title: "Top 5 Strategies to Crack IB Mathematics",
    category: "Study Tips",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=1470&auto=format&fit=crop",
    date: "March 15, 2024",
  },
  {
    title: "How to Choose the Right Online Tutor for Your Child",
    category: "Education",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop",
    date: "April 02, 2024",
  },
  {
    title: "The Importance of Early Coding Education",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1431&auto=format&fit=crop",
    date: "April 10, 2024",
  },
];

const ExtraContent = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Educational <span className="gradient-text">Insights</span> & News
            </motion.h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Stay updated with the latest trends, tips, and news from the world of education.
            </p>
          </div>
          <button className="flex items-center gap-2 font-bold text-primary group">
            View All Posts <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-[30px] overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <p className="text-sm font-medium text-gray-500 mb-3">{post.date}</p>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <button className="text-lg font-bold text-primary flex items-center gap-2">
                  Read More <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-premium-gradient p-10 lg:p-16 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
          
          <div className="text-white max-w-xl text-center lg:text-left relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-lg opacity-90">Get the best educational tips, tutor spotlights, and platform updates directly in your inbox.</p>
          </div>

          <div className="w-full lg:w-auto relative z-10">
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl flex flex-col sm:flex-row gap-4 border border-white/20">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-none outline-none px-6 py-4 text-white placeholder:text-white/60 w-full sm:w-80 font-medium"
              />
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
                Join Now <Mail size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraContent;
