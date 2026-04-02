"use client";
import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Youtube
} from "lucide-react";

const Footer = () => {
  const address = process.env.NEXT_PUBLIC_SITE_ADDRESS || "Sector 45, Gurgaon, Haryana, India - 122001";
  const phone = process.env.NEXT_PUBLIC_SITE_PHONE || "+91 98765 43210";
  const email = process.env.NEXT_PUBLIC_SITE_EMAIL || "contact@jaiacademy.com";

  return (
    <footer className="bg-gray-950 text-gray-400 pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-premium-gradient rounded-xl flex items-center justify-center text-white">
                <GraduationCap size={28} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                JAI <span className="text-primary-light">ACADEMY</span>
              </span>
            </Link>
            <p className="text-lg leading-relaxed">
              Leading individual tutoring agency dedicated to providing certified and expert tutors for board exams & competitive growth.
            </p>
            <div className="flex gap-4">
              {[ Facebook, Instagram, Twitter, Linkedin, Youtube ].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:pl-12">
            <h4 className="text-white text-xl font-bold mb-8">Navigation</h4>
            <ul className="space-y-4 text-lg">
              {["Home", "About", "History", "Curriculum", "Tutors", "Pricing"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xl font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-lg">
              {["IB / IGCSE Board", "CBSE / ICSE / State", "JEE / NEET Coaching", "Language & IELTS", "Technical Courses"].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10">
            <h4 className="text-white text-xl font-bold mb-8">Reach Us</h4>
            <ul className="space-y-8">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin size={22} />
                </div>
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone size={22} />
                </div>
                <span>{phone}</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={22} />
                </div>
                <span>{email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Jai Education Academy. Crafted with Excellence.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
