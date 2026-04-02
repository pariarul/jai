"use client";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  class: string;
  subject: string;
  details: string;
};

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-premium-gradient opacity-10 blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span className="text-secondary font-bold text-lg mb-4 block uppercase tracking-widest">
            Hiring a Tutor?
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Tell Us Your <span className="gradient-text">Requirements</span> & Get a Demo
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed mb-12">
            Fill out the form and our education counselor will call you within 30 minutes to match you with the perfect tutor.
          </p>
          
          <div className="space-y-6">
            {[ "100% Verified Tutors", "Free Demo Session", "Replacement Guarantee" ].map((item) => (
              <div key={item} className="flex items-center gap-4 text-lg font-semibold">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 size={20} />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-[40px] p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-800 relative z-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-green-600">Great Success!</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  We've received your requirements. Our counselor will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-2">Full Name</label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="e.g. John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all"
                    />
                    {errors.name && <span className="text-red-500 text-xs ml-2">Required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-2">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      placeholder="+91"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all"
                    />
                    {errors.phone && <span className="text-red-500 text-xs ml-2">Required</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-2">Class</label>
                    <select
                      {...register("class", { required: true })}
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all appearance-none"
                    >
                      <option value="">Select Class</option>
                      <option value="1-5">1st to 5th</option>
                      <option value="6-8">6th to 8th</option>
                      <option value="9-10">9th to 10th</option>
                      <option value="11-12">11th to 12th</option>
                      <option value="competitive">Competitive Exams</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-500 ml-2">Subjects</label>
                    <input
                      {...register("subject", { required: true })}
                      placeholder="e.g. Physics, Math"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 ml-2">Additional Details</label>
                  <textarea
                    {...register("details")}
                    placeholder="Tell us more about your needs..."
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-premium-gradient text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                >
                  Post Your Requirement <Send size={24} />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadForm;
