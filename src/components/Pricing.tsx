"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ShieldCheck, GraduationCap } from "lucide-react";

const pricingPlans = [
  {
    name: "Elementary",
    title: "1st to 5th Grade",
    price: "₹2,500",
    period: "/month",
    features: [
      "All major subjects covered",
      "One-on-one attention",
      "Interactive sessions",
      "Regular assessments",
      "Weekly progress report",
    ],
    color: "bg-blue-100/50",
    popular: false,
  },
  {
    name: "Middle School",
    title: "6th to 10th Grade",
    price: "₹4,000",
    period: "/month",
    features: [
      "Board-focused preparation",
      "Conceptual clarity",
      "Home assignment help",
      "Quarterly parent-tutor call",
      "Special IGCSE/ICSE focus",
    ],
    color: "bg-premium-gradient",
    popular: true,
  },
  {
    name: "Competitive Prep",
    title: "11th, 12th & JEE/NEET",
    price: "₹6,500",
    period: "/month",
    features: [
      "Targeted exam preparation",
      "Mock tests & analytics",
      "Advanced problem solving",
      "Student counseling",
      "All-subject support",
    ],
    color: "bg-purple-100/50",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary font-black uppercase tracking-widest text-xs mb-6 border border-primary/20"
          >
            <Sparkles size={16} fill="currentColor" /> Transparent Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-black mb-6 leading-tight"
          >
            Invest in Your <span className="gradient-text">Academic Future</span>
          </motion.h2>
          <p className="text-gray-500 text-lg font-medium">Choose a flexible plan tailored to your learning goals and school board.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-[40px] border shadow-2xl transition-all duration-500 hover:scale-[1.03] group ${
                plan.popular 
                  ? "border-primary bg-primary/5 -translate-y-4 shadow-primary/20" 
                  : "border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 py-2 px-8 bg-premium-gradient text-white text-xs font-black uppercase tracking-widest rounded-bl-3xl shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <span className={`font-black text-xs uppercase tracking-widest mb-4 block ${plan.popular ? "text-primary" : "text-gray-400"}`}>
                  {plan.name}
                </span>
                <h3 className="text-2xl font-black mb-8 leading-tight">{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-6 mb-12 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4 group/item">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                      plan.popular ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500 group-hover/item:text-primary"
                    }`}>
                      <Check size={14} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-bold md:text-lg group-hover/item:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-3xl font-black text-xl transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-3 ${
                plan.popular 
                  ? "bg-premium-gradient text-white shadow-primary/30" 
                  : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
                Join This Plan <Zap size={20} fill="currentColor" />
              </button>
              
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
                <ShieldCheck size={14} /> Certified Tutors
                <GraduationCap size={14} /> Academic Proof
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
