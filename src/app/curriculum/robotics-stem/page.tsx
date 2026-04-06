import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

const stemAreas = ["Robotics", "Coding", "Electronics", "Science Labs", "Innovation"];

export default function STEMPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="Robotics & STEM Lab" 
        subtitle="Interactive, hands-on learning for Classes 1 to 8 to build future-ready innovators." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Nurture <span className="text-primary">Future Innovators</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Our STEM programs are designed to spark curiosity, using experiential learning and practical robotic kits for primary to middle school students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stemAreas.map((b) => (
              <div key={b} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black">{b[0]}</div>
                <h3 className="text-lg font-bold">{b}</h3>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Classes 1 to 4</h3>
              <p className="text-lg text-gray-500">Introductory concepts involving block coding, basic logical reasoning, and simple mechanics through interactive, fun projects.</p>
            </div>
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Classes 5 to 8</h3>
              <p className="text-lg text-gray-500">Advanced robotics kits, circuit building, Arduino fundamentals, and Python programming to solve real-world problems.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <FAQ />
    </div>
  )
}
