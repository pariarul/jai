import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader 
        title="Our Pricing" 
        subtitle="Simple, transparent plans designed to fit your budget and academic needs." 
      />
      <Pricing />
      
      {/* Comparison table extra content */}
      <section className="py-24 bg-gray-50 dark:bg-black/50">
        <div className="container mx-auto px-6 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white dark:bg-gray-900 rounded-[40px] overflow-hidden shadow-2xl min-w-[600px]">
            <thead className="bg-premium-gradient text-white">
              <tr>
                <th className="p-8 font-black text-xl">Service</th>
                <th className="p-8 font-black text-xl">Elementary</th>
                <th className="p-8 font-black text-xl">Middle</th>
                <th className="p-8 font-black text-xl">Competitive</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="p-8 font-bold">1-on-1 Sessions</td>
                <td className="p-8">✔ Include</td>
                <td className="p-8">✔ Include</td>
                <td className="p-8">✔ Include</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="p-8 font-bold">Study Materials</td>
                <td className="p-8">✔ Include</td>
                <td className="p-8">✔ Include</td>
                <td className="p-8">✔ Include</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="p-8 font-bold">Mock Tests</td>
                <td className="p-8">Quarterly</td>
                <td className="p-8">Monthly</td>
                <td className="p-8">Weekly</td>
              </tr>
              <tr>
                <td className="p-8 font-bold">Academic Proof</td>
                <td className="p-8">Yearly</td>
                <td className="p-8">Termly</td>
                <td className="p-8">Dedicated Coach</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
