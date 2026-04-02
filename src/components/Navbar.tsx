"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronDown, Phone, Globe, BookOpen, Rocket, Languages, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    { name: "Curriculum", href: "/curriculum", dropdown: true },
    { name: "Tutors", href: "/tutors" },
    { name: "Hire A Tutor", href: "/hire" },
    { name: "Pricing", href: "/pricing" },
  ];

  const curriculumPaths = [
    { name: "IB / IGCSE Board", href: "/curriculum/ib-igcse", icon: <Globe size={18} /> },
    { name: "CBSE / ICSE / State", href: "/curriculum/cbse-icse", icon: <BookOpen size={18} /> },
    { name: "JEE / NEET Coaching", href: "/curriculum/jee-neet", icon: <Rocket size={18} /> },
    { name: "Language & IELTS", href: "/curriculum/language-ielts", icon: <Languages size={18} /> },
    { name: "Technical Courses", href: "/curriculum/technical", icon: <Monitor size={18} /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="container mx-auto h-20 flex items-center justify-between px-10">
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
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group" onMouseEnter={() => link.dropdown && setIsCurriculumOpen(true)} onMouseLeave={() => link.dropdown && setIsCurriculumOpen(false)}>
              <Link
                href={link.href}
                className={cn(
                  "text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-1",
                  pathname.startsWith(link.href) && link.href !== "/" ? "text-primary" : "text-black hover:text-primary"
                )}
              >
                {link.name} {link.dropdown && <ChevronDown size={14} className={cn("transition-transform", isCurriculumOpen && "rotate-180")} />}
              </Link>
              
              {link.dropdown && (
                <AnimatePresence>
                  {isCurriculumOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 mt-2 border border-gray-100"
                    >
                      {curriculumPaths.map((cp) => (
                        <Link
                          key={cp.name}
                          href={cp.href}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-sm font-bold text-gray-700 hover:text-primary transition-all"
                        >
                          <span className="text-primary/60">{cp.icon}</span>
                          {cp.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMobileMenuOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110]" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 w-[85%] md:w-[400px] h-screen bg-white z-[120] shadow-2xl p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white"><GraduationCap size={24} /></div>
                  <span className="text-xl font-bold">Menu</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-gray-50 rounded-lg"><X size={24} /></button>
              </div>

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl transition-all font-bold",
                        pathname === link.href ? "bg-primary/10 text-primary" : "text-black hover:bg-gray-50"
                      )}
                    >
                      <span className="text-lg uppercase tracking-widest">{link.name}</span>
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {curriculumPaths.map((cp) => (
                          <Link
                            key={cp.name}
                            href={cp.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-3 text-sm font-bold text-gray-500 hover:text-primary transition-all border-l-2 border-gray-100 ml-2"
                          >
                            {cp.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
                <Link href="/hire" onClick={() => setIsMobileMenuOpen(false)} className="block text-center w-full py-5 bg-primary text-white rounded-xl font-bold text-lg">Book Free Demo</Link>
                <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-[10px]">{process.env.NEXT_PUBLIC_SITE_PHONE}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
