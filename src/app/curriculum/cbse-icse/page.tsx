import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";

const boards = ["CBSE", "ICSE", "ISC", "State Boards", "NIOS"];

export default function CBSEPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageHeader 
        title="CBSE / ICSE / State Boards" 
        subtitle="Full academic support from Grade 1 to 12. Personalized coaching for top results in domestic boards." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Strength in <span className="text-primary">Fundamentals</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">We provide specialized tutors for all Indian domestic boards with a focus on clearing board exams with high percentages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {boards.map((b) => (
              <div key={b} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-lg text-center flex flex-col items-center gap-4 hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center text-2xl font-black">{b[0]}</div>
                <h3 className="text-xl font-bold">{b}</h3>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">Nursery to 10th</h3>
              <p className="text-lg text-gray-500">Foundation building in Mathematics, Science, and English. We focus on daily home assignments and concept mastery.</p>
            </div>
            <div className="bg-gray-50 p-12 rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black">11th & 12th</h3>
              <p className="text-lg text-gray-500">In-depth coaching for Physics, Chemistry, Biology, Mathematics, Accountancy, and Economics tailored for board exams.</p>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />
      <FAQ />
    </div>
  )
}
