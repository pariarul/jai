"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "History", href: "/history" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Tutors", href: "/tutors" },
    { name: "Hire A Tutor", href: "/hire" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav
        className="container mx-auto h-20 flex items-center justify-between px-6 px-10 transition-all duration-500"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-md">
            <GraduationCap size={24} />
          </div>
          <span className="text-2xl font-black text-black">
            JAI<span className="text-primary">ACADEMY</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-all relative group",
                pathname === link.href ? "text-primary" : "text-black hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all",
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-6">
          <a href={`tel:${process.env.NEXT_PUBLIC_SITE_PHONE?.replace(/\s+/g, '')}`} className="text-black font-bold flex items-center gap-2 hover:text-primary transition-colors text-sm">
            <Phone size={18} /> {process.env.NEXT_PUBLIC_SITE_PHONE || "+91 98765 43210"}
          </a>
          <Link href="/hire" className="px-8 py-3 bg-primary text-white rounded-lg font-bold shadow-md hover:bg-primary-dark transition-all text-sm uppercase tracking-widest">
            Book Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-3 rounded-lg bg-gray-50 text-black border border-gray-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-[85%] md:w-[400px] h-screen bg-white z-[120] shadow-2xl p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                    <GraduationCap size={24} />
                  </div>
                  <span className="text-xl font-bold">Menu</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-gray-50 rounded-lg">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl transition-all font-bold",
                        pathname === link.href ? "bg-primary/10 text-primary" : "text-black hover:bg-gray-50"
                      )}
                    >
                      <span className="text-lg uppercase tracking-widest">{link.name}</span>
                      <ChevronRight size={20} className="opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 space-y-6">
                <Link href="/hire" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full py-5 bg-primary text-white rounded-xl font-bold text-lg shadow-lg">
                  Book Free Demo
                </Link>
                <div className="flex flex-col items-center gap-4 pt-12 border-t border-gray-100">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Contact Support</span>
                  <p className="font-bold text-black">{process.env.NEXT_PUBLIC_SITE_PHONE}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
