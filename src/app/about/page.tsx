import PageHeader from "@/components/PageHeader";
import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="About Our Academy" 
        subtitle="Leading the way in personalized, high-impact education for a brighter future." 
      />
      <AboutSection />
      <Features />
      {/* Extra Content - Team/Values */}
      <section className="py-24 bg-gray-50 dark:bg-black/50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-xl">1</div>
              <h3 className="text-2xl font-bold">Integrity</h3>
              <p className="text-gray-500">We maintain the highest standards of academic honesty and tutor verification.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-xl">2</div>
              <h3 className="text-2xl font-bold">Innovation</h3>
              <p className="text-gray-500">Constantly updating our digital platform for a seamless learning experience.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-xl">3</div>
              <h3 className="text-2xl font-bold">Excellence</h3>
              <p className="text-gray-500">Committed to measurable results and your student's ultimate success.</p>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  )
}
