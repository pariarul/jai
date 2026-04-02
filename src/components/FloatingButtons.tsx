"use client";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);
  const phone = process.env.NEXT_PUBLIC_SITE_PHONE || "+91 98765 43210";
  const whatsapp = process.env.NEXT_PUBLIC_SITE_WHATSAPP || "919876543210";

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col gap-4">
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center shadow-2xl text-foreground hover:bg-gray-50 dark:hover:bg-gray-900 transition-all mb-2"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={`tel:${phone.replace(/\s+/g, '')}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-secondary-dark transition-all"
      >
        <Phone size={24} />
      </motion.a>

      <motion.a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
