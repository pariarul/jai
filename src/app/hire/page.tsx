import PageHeader from "@/components/PageHeader";
import LeadForm from "@/components/LeadForm";

export default function HirePage() {
  const phone = process.env.NEXT_PUBLIC_SITE_PHONE || "+91 98765 43210";
  const email = process.env.NEXT_PUBLIC_SITE_EMAIL || "contact@jaiacademy.com";

  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Hire A Tutor" 
        subtitle="Match with the perfect mentor within 30 minutes. Let's start your success story today." 
      />
      <div className="py-20">
        <LeadForm />
      </div>
      
      {/* Contact info using environment variables */}
      <section className="bg-premium-gradient py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16">Connect with Academic Counselors</h2>
          <div className="flex flex-col md:flex-row justify-center gap-16 text-3xl font-black">
            <div className="space-y-4">
              <p className="opacity-60 uppercase tracking-[0.2em] text-xs">Direct Support</p>
              <p className="hover:scale-105 transition-transform cursor-pointer">{phone}</p>
            </div>
            <div className="space-y-4">
              <p className="opacity-60 uppercase tracking-[0.2em] text-xs">Academic Mail</p>
              <p className="hover:scale-105 transition-transform cursor-pointer">{email}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
