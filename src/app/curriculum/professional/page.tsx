import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

const courses = ["CA Foundation", "CMA Foundation", "CS Executive", "ACCA Foundation"];

export default function ProfessionalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Professional Course Foundations" 
        subtitle="Expert coaching for CA, CMA, CS, and ACCA Foundation levels to jumpstart your professional journey." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Launch Your <span className="text-primary">Professional</span> Career</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">We provide specialized, experienced mentors to guide you through the rigorous foundations of professional accounting and company secretary courses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((b) => (
              <div key={b} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black">{b[0]}</div>
                <h3 className="text-xl font-bold">{b}</h3>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Expert Faculties</h3>
              <p className="text-lg text-gray-500">Learn from certified professionals (CAs, CSs, and CMAs) who have extensive industry and teaching experience.</p>
            </div>
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Comprehensive Material</h3>
              <p className="text-lg text-gray-500">Get access to meticulously curated study materials, mock tests, and past paper solutions focused on securing top ranks.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <FAQ />
    </div>
  )
}
