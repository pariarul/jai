import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { CheckCircle2, TrendingUp, Users, Target, Layout } from "lucide-react";

export default function JEEPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="JEE & NEET Coaching" 
        subtitle="Individual, targeted coaching for India's toughest entrance exams. Learn from IITians and Medical Professionals." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="bg-primary p-12 lg:p-16 rounded-[60px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
                <h2 className="text-4xl lg:text-5xl font-black mb-10 leading-tight">Crack Your <span className="text-black">Dream College</span></h2>
                <div className="space-y-10 relative z-10">
                    {[
                      { t: "Personal Mock Tests", d: "Weekly analysis and performance reports to identify and fix your weak areas." },
                      { t: "Doubt Clearing Hub", d: "Instant, one-on-one sessions for complex physics, chemistry, and biology problems." },
                      { t: "Strategic Planning", d: "Proven time management and fast problem-solving techniques for Top Percentile." }
                    ].map((item) => (
                      <div key={item.t} className="flex gap-6">
                        <div className="w-12 h-12 bg-white text-primary rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg">✓</div>
                        <div>
                          <p className="text-2xl font-black mb-1">{item.t}</p>
                          <p className="text-white/80 text-lg leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="p-10 bg-white border-b-8 border-r-8 border-gray-100 rounded-[40px] shadow-2xl hover:border-primary transition-all group">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center"><Target /></div>
                   <h3 className="text-3xl font-black group-hover:text-primary transition-colors">JEE Main & Advanced</h3>
                 </div>
                 <p className="text-xl text-gray-500 leading-relaxed font-medium">Focus on advanced calculus, mechanics, and organic chemistry for IIT, NIT, and top engineering institutions.</p>
              </div>
              
              <div className="p-10 bg-white border-b-8 border-r-8 border-gray-100 rounded-[40px] shadow-2xl hover:border-primary transition-all group">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center"><Users /></div>
                   <h3 className="text-3xl font-black group-hover:text-primary transition-colors">NEET Mastery</h3>
                 </div>
                 <p className="text-xl text-gray-500 leading-relaxed font-medium">Detailed physiological diagrams, organic reaction mastery, and fast physics calculation methods optimized for medical prep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Content - Success Metrics */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-black mb-4 uppercase tracking-widest">Our <span className="text-primary">Track Record</span></h3>
            <p className="text-xl text-gray-500">Measurable results that speak for themselves.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: "85%", l: "IIT Qualification Rate", i: <TrendingUp className="text-green-500" /> },
              { v: "92%", l: "NEET Rank Retention", i: <Target className="text-blue-500" /> },
              { v: "99.9", l: "Top Percentile Score", i: <Award className="text-yellow-500" /> },
              { v: "1:1", l: "Individual Focus ratio", i: <Users className="text-purple-500" /> }
            ].map((stat) => (
               <div key={stat.l} className="bg-white p-12 rounded-[40px] text-center shadow-xl border border-gray-100">
                  <div className="mb-6 flex justify-center opacity-60">{stat.i}</div>
                  <h4 className="text-5xl font-black mb-4">{stat.v}</h4>
                  <p className="font-bold text-gray-400 uppercase tracking-widest text-xs">{stat.l}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Content - Resource Vault */}
      <section className="py-24 container mx-auto px-10">
        <div className="p-16 bg-gray-900 rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
           <div className="max-w-2xl relative z-10 text-center md:text-left">
              <h3 className="text-3xl lg:text-5xl font-black mb-6">Access Our JEE/NEET Resource Vault</h3>
              <p className="text-xl text-white/70 mb-10">Get 10,000+ hand-solved problems, memory maps, and chapter-wise formula sheets curated by IITians.</p>
              <button className="px-12 py-5 bg-primary text-white rounded-2xl font-black text-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-all">Subscribe for Free Access</button>
           </div>
           <div className="relative z-10 space-y-4 w-full md:w-auto">
              {[ "Chapter Mindmaps", "Previous Year Solved", "Rank Prediction Tool" ].map((tag) => (
                <div key={tag} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold flex items-center justify-between group cursor-default">
                  {tag} <CheckCircle2 className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
           </div>
        </div>
      </section>

      <LeadForm />
      <FAQ />
    </div>
  )
}

import { Award } from "lucide-react";
