import PageHeader from "@/components/PageHeader";
import HistorySection from "@/components/HistorySection";
import StatsSection from "@/components/StatsSection";

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Growth Journey" 
        subtitle="From a humble start to India's most trusted education platform." 
      />
      <HistorySection />
      <StatsSection />
      <section className="py-24">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-black mb-8 leading-tight">Founded on the belief that <span className="gradient-text">every student</span> deserves a mentor.</h2>
          <p className="text-xl text-gray-500 leading-relaxed">
            Over the past decade, we have partnered with over 50 schools and supported thousands of families in finding academic success. Our history is written by the achievements of our students.
          </p>
        </div>
      </section>
    </div>
  )
}
