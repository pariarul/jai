import PageHeader from "@/components/PageHeader";
import Features from "@/components/Features";

export default function JoinPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Join As A Tutor" 
        subtitle="Empower the next generation and join India's fastest growing community of expert educators." 
      />
      
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white dark:bg-gray-900 p-10 lg:p-16 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800">
            <h2 className="text-3xl font-black mb-8">Tutor Registration</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500">First Name</label>
                  <input className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-primary" placeholder="First" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500">Last Name</label>
                  <input className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-primary" placeholder="Last" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500">Qualification</label>
                <input className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. Ph.D. Mathematics" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500">Resume Link (Google Drive/LinkedIn)</label>
                <input className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-none outline-none focus:ring-2 focus:ring-primary" placeholder="URL" />
              </div>
              <button className="w-full py-5 bg-premium-gradient text-white rounded-3xl font-black text-xl shadow-xl transition-all hover:scale-105 active:scale-95">
                Apply Now
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-black">Why Teach <span className="gradient-text">With Us?</span></h2>
            <div className="space-y-8">
              {[
                { title: "Highest Pay", desc: "We offer the most competitive hourly rates in the industry." },
                { title: "Global Reach", desc: "Connect with students from across India and over 15 countries." },
                { title: "Flexible Schedule", desc: "You decide when you work and how many students you take." },
                { title: "Interactive Platform", desc: "Access to advanced teaching tools and digital whiteboards." },
              ].map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">✓</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Features />
    </div>
  )
}
