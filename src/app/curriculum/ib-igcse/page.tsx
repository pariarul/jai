import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { Star, Download, FileText, CheckCircle2, Award } from "lucide-react";

const subjects = [
  "Mathematics (AA/AI)", "Physics (HL/SL)", "Chemistry (HL/SL)", "Economics", "English Literature", "Computer Science", "Business Management", "History"
];

export default function IBPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="IB & IGCSE Specialization" 
        subtitle="Expert one-on-one tutoring for International Baccalaureate (DP, MYP) and Cambridge IGCSE boards." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full font-bold text-xs uppercase tracking-widest">
                Global Standards
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-black leading-tight">Master the <span className="text-primary">International</span> Curriculum</h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                Our tutors are certified experts with deep knowledge of IB/IGCSE criteria. We focus on conceptual clarity, Internal Assessments (IA), Extended Essays (EE), and rigorous exam preparation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {[
                  { t: "IA/EE Support", d: "Structured guidance on research questions and writing." },
                  { t: "CIE/IB Experts", d: "Mentors with over 10+ years of board teaching." },
                  { t: "Past Paper Series", d: "Intensive 10-year paper solving marathons." },
                  { t: "Mock Assessments", d: "Monthly reports based on actual marking schemes." }
                ].map((f) => (
                  <div key={f.t} className="space-y-2 border-l-4 border-primary/20 pl-6">
                    <h4 className="text-xl font-bold">{f.t}</h4>
                    <p className="text-gray-500">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 p-8 bg-gray-50 rounded-[50px] shadow-inner">
               <h3 className="col-span-2 text-2xl font-black text-center mb-4">Core Subjects</h3>
               {subjects.map((s) => (
                <div key={s} className="p-6 bg-white rounded-3xl text-center font-bold text-black shadow-md border border-gray-100 hover:border-primary transition-all">
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extra Content - Resource Download */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -m-20" />
        <div className="container mx-auto px-10 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center lg:text-left">
                <h3 className="text-4xl font-black mb-6">Free IB Study Materials</h3>
                <p className="text-xl opacity-80 mb-10">Get access to our expert-curated math formula sheets, physics checklists, and EE research guides for free.</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <button className="px-8 py-4 bg-white text-primary rounded-2xl font-black flex items-center gap-3 shadow-2xl">
                        <Download size={24} /> Download Packs
                    </button>
                    <button className="px-8 py-4 bg-primary-dark border-2 border-white/20 rounded-2xl font-black flex items-center gap-3">
                        <FileText size={24} /> View Sample IA
                    </button>
                </div>
            </div>
            <div className="flex-shrink-0 grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center border border-white/20">
                    <FileText size={40} className="mb-2" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Guide 0{i}</span>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* Extra Content - Certified Tutors Spotlight */}
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black mb-4">Board Certified <span className="text-primary">Tutors</span></h3>
            <p className="text-xl text-gray-500">Only the best 2% of applicants make it to our IB/IGCSE expert pool.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { n: "Dr. Elena S.", q: "Ph.D Physics (Imperial)", s: "IB Phys / Chem Specialist" },
              { n: "Mr. David W.", q: "M.A. Mathematics (Oxford)", s: "DP Math AA / AI" },
              { n: "Ms. Sarah J.", q: "M.Sc Bio (Stanford)", s: "IGCSE Bio / Env Sci" }
            ].map((t) => (
              <div key={t.n} className="p-10 border border-gray-100 rounded-[40px] shadow-xl hover:shadow-primary/10 transition-all text-center group">
                 <div className="w-24 h-24 bg-gray-100 rounded-3xl mx-auto mb-6 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                   <Star size={40} fill="currentColor" />
                 </div>
                 <h4 className="text-2xl font-black mb-2">{t.n}</h4>
                 <p className="font-bold text-primary mb-4">{t.q}</p>
                 <p className="text-sm font-bold uppercase tracking-widest text-gray-400">{t.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-24">
        <LeadForm />
      </div>
      <FAQ />
    </div>
  )
}
