import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import CourseSection from "@/components/CourseSection";
import TutorListing from "@/components/TutorListing";
import Features from "@/components/Features";
import ExtraContent from "@/components/ExtraContent";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HowItWorks />
      <StatsSection />

      {/* Short Summary Sections on Home page */}
      <AboutSection />
      <CourseSection />
      <TutorListing />


      {/* Proof and Trust */}
      <Features />
      <Testimonials />

      {/* Final Conversion Path */}
      <Pricing />
      <ExtraContent />
      <FAQ />
      <CTASection />
    </div>
  );
}
