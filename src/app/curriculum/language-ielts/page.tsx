import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import { Languages, Award, Globe, MessageSquare, Headphones, PenTool, CheckCircle2 } from "lucide-react";

const langs = [
  { n: "English Writing", d: "Academic, Creative, & Business writing mastery." },
  { n: "Spoken English", d: "Fluency development with real-world scenarios." },
  { n: "IELTS (Academic/General)", d: "Goal Band 8.5 with certified trainers." },
  { n: "French", d: "Beginner (A1) to Advanced (C2) proficiency." },
  { n: "German", d: "Professional A1-B2 track for global opportunities." },
  { n: "Spanish", d: "Interactive conversational and cultural focus." },
  { n: "Hindi / Sanskrit", d: "Academic support for school boards." }
];

export default function LanguagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-poppins">
      <PageHeader 
        title="Language & IELTS" 
        subtitle="Fluent in excellence. Global language training and certified IELTS preparation from native experts." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-black mb-6 uppercase tracking-wider">Break the <span className="text-primary">Communication Barrier</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Interactive language sessions focused on listening, speaking, reading, and writing for academic & professional growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {langs.map((l, i) => (
              <div key={l.n} className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:border-primary hover:bg-white shadow-lg transition-all group">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Languages />
                </div>
                <h3 className="text-2xl font-black mb-3">{l.n}</h3>
                <p className="text-gray-500 text-lg">{l.d}</p>
              </div>
            ))}
          </div>

          {/* IELTS Extra Content */}
          <div className="mt-24 bg-white border-2 border-primary/20 p-12 lg:p-20 rounded-[60px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
             <div className="max-w-2xl text-center lg:text-left relative z-10">
                <h3 className="text-3xl lg:text-5xl font-black mb-8 italic">Certified <span className="text-primary">IELTS</span> Intensive</h3>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  Our certified trainers provide personalized guidance to help you achieve a **Band 8.0+**. We provide unlimited speaking sessions, official mock tests, and writing assessments every 48 hours.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12 font-bold uppercase tracking-widest text-[10px]">
                   <div className="flex items-center gap-2"><Headphones size={20} className="text-primary" /> Listening</div>
                   <div className="flex items-center gap-2"><MessageSquare size={20} className="text-primary" /> Speaking</div>
                   <div className="flex items-center gap-2"><Globe size={20} className="text-primary" /> Reading</div>
                   <div className="flex items-center gap-2"><PenTool size={20} className="text-primary" /> Writing</div>
                </div>
                <div className="flex gap-4">
                  <button className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-xl shadow-xl shadow-primary/30">Get Sample Material</button>
                  <button className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black text-xl shadow-xl">Register Mock</button>
                </div>
             </div>
             <div className="bg-primary p-12 rounded-[50px] text-white flex flex-col items-center justify-center text-center shadow-2xl">
                < Award size={80} className="mb-6" />
                <h4 className="text-6xl font-black mb-2">95%</h4>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Students cleared Band 7.5+</p>
             </div>
          </div>
        </div>
      </section>

      {/* Extra Section: Daily Vocabulary & Speaking Spotlight */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-white rounded-[50px] shadow-xl border border-gray-100 flex flex-col justify-between">
               <h3 className="text-3xl font-black mb-6">Daily Speaking Practice</h3>
               <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium italic">"1-on-1 speaking sessions that simulate the real IELTS environment, removing the fear factor and building natural fluency."</p>
               <div className="flex items-center gap-4 text-primary font-black text-xl">
                 Try Live Demo <CheckCircle2 size={24} />
               </div>
            </div>
            <div className="p-12 bg-gray-900 text-white rounded-[50px] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
               <h3 className="text-3xl font-black mb-6">Exam Booking Support</h3>
               <p className="text-xl text-white/50 mb-10 leading-relaxed font-medium">We handle the official exam registration for IDP/British Council, saving you time and ensuring you get your preferred date.</p>
               <div className="flex items-center gap-4 text-white font-black text-xl underline decoration-primary underline-offset-8">
                 Concierge Service
               </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
    </div>
  )
}
