"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  capacity: string;
  location: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // silently handle
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-[#d2d2d7] rounded-[10px] px-4 py-3 text-[#1d1d1f] text-[0.9375rem] placeholder-[#86868b] focus:outline-none focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] transition-colors";

  const labelClass = "block text-[0.75rem] font-semibold text-[#1d1d1f] uppercase tracking-wide mb-1.5";

  return (
    <main className="pt-11">
      {/* Hero */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-[0.75rem] font-semibold text-[#86868b] uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <h1
            className="font-display font-bold text-black mb-5"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em" }}
          >
            Request a quote.
          </h1>
          <p className="text-[#86868b] text-xl max-w-xl mx-auto">
            Share your project details and our engineering team will respond within one business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#f5f5f7] py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form — 2 cols */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[20px] p-8 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-14 h-14 bg-[#30d158]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#30d158" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h2 className="font-display font-bold text-[#1d1d1f] text-2xl mb-3">
                      Message received.
                    </h2>
                    <p className="text-[#6e6e73] text-[0.9375rem]">
                      Our engineering team will review your requirements and respond within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          {...register("name", { required: true })}
                          placeholder="Rajesh Sharma"
                          className={inputClass}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Company *</label>
                        <input
                          {...register("company", { required: true })}
                          placeholder="Acme Industries Pvt. Ltd."
                          className={inputClass}
                        />
                        {errors.company && <p className="text-red-500 text-xs mt-1">Required</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Phone *</label>
                        <input
                          {...register("phone", { required: true })}
                          placeholder="+91 98765 43210"
                          className={inputClass}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input
                          {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                          placeholder="rajesh@acme.com"
                          className={inputClass}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">Valid email required</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Storage Capacity Required</label>
                        <select {...register("capacity")} className={inputClass}>
                          <option value="">Select capacity range</option>
                          <option value="<500kWh">Under 500 kWh (Model A)</option>
                          <option value="500kWh-1MWh">500 kWh – 1 MWh (Model B)</option>
                          <option value="1MWh-5MWh">1 MWh – 5 MWh (Multiple units)</option>
                          <option value=">5MWh">5 MWh+ (Model C / Utility)</option>
                          <option value="unsure">Not sure — need guidance</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Project Location</label>
                        <input
                          {...register("location")}
                          placeholder="State, City"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Project Description</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Brief description: application type, connected load, solar capacity (if any), grid-tied or off-grid..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-full bg-[#2997ff] text-white text-[1.0625rem] font-medium hover:bg-[#0077ed] disabled:opacity-50 transition-colors"
                    >
                      {submitting ? "Sending…" : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact info sidebar */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-[20px] p-6">
                <h3 className="font-display font-semibold text-[#1d1d1f] text-lg mb-5">Contact us directly</h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="tel:+911800-2026-252"
                    className="flex items-start gap-3 group"
                  >
                    <Phone size={16} className="text-[#2997ff] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[0.6875rem] text-[#86868b] uppercase tracking-wider mb-0.5">Phone</div>
                      <div className="text-[0.9375rem] text-[#1d1d1f] group-hover:text-[#2997ff] transition-colors">1800-2026-252</div>
                    </div>
                  </a>
                  <a
                    href="mailto:info@ornatesolar.com"
                    className="flex items-start gap-3 group"
                  >
                    <Mail size={16} className="text-[#2997ff] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[0.6875rem] text-[#86868b] uppercase tracking-wider mb-0.5">Email</div>
                      <div className="text-[0.9375rem] text-[#1d1d1f] group-hover:text-[#2997ff] transition-colors">info@ornatesolar.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#2997ff] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-[0.6875rem] text-[#86868b] uppercase tracking-wider mb-0.5">Office</div>
                      <div className="text-[0.9375rem] text-[#1d1d1f] leading-relaxed">
                        A-87, Okhla Phase – II<br />New Delhi – 110020
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-6">
                <h3 className="font-display font-semibold text-black text-lg mb-3">
                  What happens next?
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    "Our team reviews your requirements",
                    "Site & load assessment call (30 min)",
                    "Custom proposal with ROI analysis",
                    "Delivery within 8–12 weeks of order",
                  ].map((step, i) => (
                    <div key={step} className="flex gap-3 items-start">
                      <span className="w-5 h-5 rounded-full bg-[#2997ff] flex-shrink-0 flex items-center justify-center text-white text-[0.625rem] font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-[#86868b] text-[0.875rem] leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://ornatesolar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white rounded-[20px] p-5 group hover:shadow-sm transition-shadow"
              >
                <span className="text-[0.9375rem] font-medium text-[#1d1d1f]">Visit Ornate Solar</span>
                <ChevronRight size={18} className="text-[#6e6e73] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
