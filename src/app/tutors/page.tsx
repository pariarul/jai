import PageHeader from "@/components/PageHeader";
import TutorListing from "@/components/TutorListing";
import LeadForm from "@/components/LeadForm";

export default function TutorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Expert Tutors" 
        subtitle="Handpicked educators from premium institutions globally." 
      />
      
      {/* Filter placeholder message */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <div className="p-6 bg-yellow-100 text-yellow-800 rounded-[30px] border border-yellow-200 font-bold flex items-center gap-2">
          Searching for something specific? Our counselor will help you find the match!
        </div>
      </div>
      
      <TutorListing />
      <LeadForm />
    </div>
  )
}
