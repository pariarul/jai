import PageHeader from "@/components/PageHeader";
import CourseSection from "@/components/CourseSection";
import FAQ from "@/components/FAQ";

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Curriculum" 
        subtitle="Comprehensive support for international & domestic boards from grade 1 to graduation." 
      />
      <CourseSection />
      
      {/* Subject list extra content */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center">Featured <span className="gradient-text">Subjects</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["Physics", "Chemistry", "Math", "Biology", "English", "French", "History", "Geography", "Computer Science", "Coding", "Sanskrit", "Psychology"].map((sub) => (
              <div key={sub} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-3xl text-center font-bold hover:bg-premium-gradient hover:text-white transition-all cursor-default shadow-lg">
                {sub}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  )
}
