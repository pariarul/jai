import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Globe, BookOpen, Rocket, Languages, Monitor, ArrowRight } from "lucide-react";

const curriculumCategories = [
  { 
    name: "IB / IGCSE Board", 
    href: "/curriculum/ib-igcse", 
    icon: <Globe size={40} />, 
    desc: "International Baccalaureate (DP, MYP) and Cambridge IGCSE specialization.",
    color: "bg-blue-50 text-blue-600"
  },
  { 
    name: "CBSE / ICSE / State", 
    href: "/curriculum/cbse-icse", 
    icon: <BookOpen size={40} />, 
    desc: "Comprehensive support for all Indian domestic boards from Grade 1 to 12.",
    color: "bg-green-50 text-green-600"
  },
  { 
    name: "JEE / NEET Coaching", 
    href: "/curriculum/jee-neet", 
    icon: <Rocket size={40} />, 
    desc: "Strategic engineering and medical entrance exam preparation with IITians.",
    color: "bg-purple-50 text-purple-600"
  },
  { 
    name: "Language & IELTS", 
    href: "/curriculum/language-ielts", 
    icon: <Languages size={40} />, 
    desc: "Fluent communication training, Band 8+ IELTS prep, and foreign languages.",
    color: "bg-pink-50 text-pink-600"
  },
  { 
    name: "Technical Courses", 
    href: "/curriculum/technical", 
    icon: <Monitor size={40} />, 
    desc: "Future-ready skills in coding, design, marketing, and data analysis.",
    color: "bg-yellow-50 text-yellow-600"
  },
];

export default function CurriculumIndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Our Curriculum" 
        subtitle="Select your preferred academic path and explore our specialized one-on-one coaching details." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {curriculumCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group p-12 bg-white border border-gray-100 rounded-[50px] shadow-2xl hover:shadow-primary/10 hover:border-primary transition-all flex flex-col justify-between"
              >
                <div>
                    <div className={`w-20 h-20 ${cat.color} rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                        {cat.icon}
                    </div>
                    <h2 className="text-3xl font-black mb-6 text-black group-hover:text-primary transition-colors">{cat.name}</h2>
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed">{cat.desc}</p>
                </div>
                <div className="flex items-center gap-3 font-black text-primary text-xl">
                    Explore Details <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subject list from before, modified for index */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-10">
          <h2 className="text-4xl font-black mb-20 text-center uppercase tracking-widest">Global <span className="text-primary">Subject</span> Catalog</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {["Physics", "Chemistry", "Math", "Biology", "English", "French", "IELTS", "History", "Coding", "Sanskrit", "Digital Marketing", "Graphic Design"].map((sub) => (
              <div key={sub} className="px-10 py-6 bg-white rounded-full font-bold text-xl shadow-lg border border-gray-100 cursor-default hover:bg-primary hover:text-white transition-all">
                {sub}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
