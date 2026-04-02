import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";
import { Play, Code, Layout, Globe, Star, ShieldCheck, Zap } from "lucide-react";

const techPaths = [
    { title: "Coding for Kids", desc: "Python, Scratch, Web Dev, and App Development from Grade 5+.", color: "bg-blue-100", icon: <Code /> },
    { title: "Graphic Design", desc: "Photoshop, Illustrator, and Figma for creative career starts.", color: "bg-green-100", icon: <Layout /> },
    { title: "Digital Marketing", desc: "SEO, SEM, Social Media Marketing and Content Strategy.", color: "bg-yellow-100", icon: <Globe /> },
    { title: "Data Science", desc: "Introduction to Data analysis using Excel, SQL and Python.", color: "bg-purple-100", icon: <Zap /> }
];

export default function TechnicalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Technical Courses" 
        subtitle="Future-ready skills for the modern world. Practical coaching for coding, design, and marketing." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-lg font-bold text-xs uppercase tracking-widest mb-6">Skill Up for 2024</div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Master Modern <span className="text-primary">Technologies</span> & Create Value</h2>
              <p className="text-xl text-gray-500 font-medium max-w-2xl lg:leading-relaxed">Hands-on, project-based learning with industry experts to help you master modern tools and build a professional portfolio.</p>
            </div>
            <div className="px-8 py-3 bg-gray-50 border border-gray-200 rounded-full font-bold text-gray-400 text-sm uppercase tracking-widest">Industry Ready Curriculum</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techPaths.map((tp) => (
              <div key={tp.title} className="p-10 rounded-[50px] border border-gray-100 shadow-xl hover:border-primary hover:shadow-primary/10 transition-all flex flex-col justify-between group overflow-hidden relative">
                <div className="relative z-10">
                   <div className={`w-14 h-14 ${tp.color} text-black rounded-2xl mb-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                     {tp.icon}
                   </div>
                   <h3 className="text-3xl font-black mb-4">{tp.title}</h3>
                   <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">{tp.desc}</p>
                </div>
                <button className="w-full py-4 bg-gray-50 rounded-2xl font-black group-hover:bg-primary group-hover:text-white transition-all text-sm uppercase tracking-widest shadow-inner">View Syllabus</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Section: Portfolio Building */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-10">
           <div className="p-16 bg-white border border-gray-100 rounded-[60px] shadow-2xl flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2 aspect-square bg-gray-100 rounded-[50px] flex items-center justify-center p-12">
                 <div className="w-full h-full bg-primary/10 rounded-[40px] border-4 border-dashed border-primary/20 flex flex-col items-center justify-center text-center">
                    <Star size={80} fill="#2563EB" color="#2563EB" className="mb-6 animate-pulse" />
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-widest">Your Portfolio Here</h3>
                    <p className="text-gray-400 font-bold px-10 leading-relaxed">We focus on building 3-5 real world projects you can show to potential employers or colleagues.</p>
                 </div>
              </div>
              <div className="w-full md:w-1/2 space-y-12">
                 <h2 className="text-4xl lg:text-5xl font-black mb-4">Real World <span className="text-primary">Portfolio</span> Building</h2>
                 <p className="text-xl text-gray-500 leading-relaxed italic">"Don't just learn. Create something meaningful."</p>
                 <div className="space-y-8">
                    {[
                      { t: "Industry Reference", d: "Get top references from our certified tutors." },
                      { t: "Certification Guidance", d: "Full support for Adobe, Google, and AWS official exams." },
                      { t: "Resume Polishing", d: "Personal feedback on your professional portfolio and resume." }
                    ].map((item) => (
                      <div key={item.t} className="flex gap-6 border-l-4 border-primary pl-10">
                        <div>
                           <h4 className="text-2xl font-black mb-2">{item.t}</h4>
                           <p className="text-lg text-gray-500 leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Extra Branding Section */}
      <section className="py-24 container mx-auto px-10 text-center">
         <div className="p-16 bg-primary text-white rounded-[60px] shadow-2xl shadow-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
            <div className="relative z-10 max-w-4xl mx-auto">
               <h3 className="text-4xl lg:text-6xl font-black mb-10 leading-tight italic">Learn the Skills That Matter Most in 2024</h3>
               <p className="text-2xl text-white/80 mb-12">Why follow a textbook when you can build a project from scratch? Sign up for a free technical consultation.</p>
               <div className="flex flex-wrap justify-center gap-6">
                  <button className="px-12 py-5 bg-black text-white rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">Start Learning Now</button>
                  <button className="px-12 py-5 bg-white text-primary rounded-3xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl">Download Catalog</button>
               </div>
            </div>
         </div>
      </section>

      <LeadForm />
    </div>
  )
}
