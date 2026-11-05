import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="page-section min-h-screen flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-20 w-full"
    >
      <div className="w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2.5">
              START WITH A CONVERSATION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-6 max-w-xl">
              Tell us what the plant is doing now
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-xl">
              Describe the machine, line or process that is not behaving the way you want. We will come back with questions — and if it looks like a fit, arrange a visit to see it running.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 xl:col-span-7 w-full">
            {submitted ? (
              <div className="bg-orange-50/50 border border-orange-200 rounded-2xl p-8 sm:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-[#E87121] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent Successfully</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you! An engineer will review your floor requirements and get back to you with questions or to plan a plant visit.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', description: '' });
                  }}
                  className="px-6 py-2.5 text-sm font-bold text-[#E87121] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Your name * */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your answer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email * */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Phone * */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your answer"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all"
                  />
                </div>

                {/* What is not working? * */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    What is not working? *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="How can we help?"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all resize-y"
                  ></textarea>
                </div>

                {/* Submit Button & Privacy note */}
                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <button
                    type="submit"
                    className="px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#E87121] hover:bg-[#D45E12] active:scale-[0.98] rounded-md shadow-lg shadow-orange-500/25 transition-all"
                  >
                    <span>Send enquiry</span>
                  </button>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal">
                    We use your details only to reply to this enquiry.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
