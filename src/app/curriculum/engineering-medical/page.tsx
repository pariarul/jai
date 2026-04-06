import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

const domains = ["BE / B.Tech", "General Engineering", "Medical", "Applied Sciences", "Tech Specializations"];

export default function HigherEdPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Higher Degree Support" 
        subtitle="Advanced tuition for Engineering (BE/BTech) and Medical streams." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Excel in <span className="text-primary">Higher Education</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Get comprehensive academic support for complex engineering subjects and medical curricula from experienced industry experts and professors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {domains.map((b) => (
              <div key={b} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black">{b[0]}</div>
                <h3 className="text-sm font-bold">{b}</h3>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Engineering (BE / BTech)</h3>
              <p className="text-lg text-gray-500">Specialized guidance in Core Engineering subjects, Computer Science, Electronics, and Mechanical streams with practical insights.</p>
            </div>
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Medical Streams</h3>
              <p className="text-lg text-gray-500">In-depth conceptual support for Anatomy, Physiology, Pharmacology, and advanced life sciences subjects.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <FAQ />
    </div>
  )
}
