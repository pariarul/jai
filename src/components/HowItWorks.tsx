"use client";
import { motion } from "framer-motion";
import { ClipboardList, UserCheck, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Tell Us Your Needs",
      desc: "Share your subject, class, and board requirements with us.",
      icon: <ClipboardList size={32} className="text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Get Free Demo",
      desc: "Experience a session with our expert tutors for free.",
      icon: <UserCheck size={32} className="text-white" />,
      color: "bg-purple-500",
    },
    {
      title: "Confirm If You Like",
      desc: "Start your regular sessions once you are satisfied.",
      icon: <CheckCircle2 size={32} className="text-white" />,
      color: "bg-green-500",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            How <span className="gradient-text">It Works</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg uppercase tracking-widest font-semibold">
            Simple 3-step process to success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[15%] left-[20%] right-[20%] h-0.5 bg-dashed border-t-2 border-dashed border-gray-200 dark:border-gray-800 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-8 bg-white dark:bg-gray-900 rounded-[30px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 relative group"
            >
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                {step.desc}
              </p>
              
              <div className="absolute top-4 right-4 text-6xl font-black text-gray-100 dark:text-gray-800 -z-10 bg-clip-text">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
