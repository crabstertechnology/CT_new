import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  description: string;
}

export default function EnquirySection() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit enquiry. Please try again.');
      }

      // Explicitly trigger GA4 & GTM form_submit event (for SPA AJAX submissions)
      if (typeof window !== 'undefined') {
        const win = window as any;
        if (typeof win.gtag === 'function') {
          win.gtag('event', 'form_submit', {
            form_id: 'enquiry_form',
            form_name: 'Main Floor Modernization Enquiry',
            form_destination: '/api/enquiry'
          });
        }
        if (Array.isArray(win.dataLayer)) {
          win.dataLayer.push({
            event: 'form_submit',
            form_id: 'enquiry_form',
            form_name: 'Main Floor Modernization Enquiry',
            form_destination: '/api/enquiry'
          });
        }
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting enquiry:', err);
      setErrorMessage(
        err.message || 'Something went wrong while sending your enquiry. Please verify your connection or email directly at crabstertech@gmail.com'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="flex flex-col justify-center bg-white border-b border-gray-100 relative px-6 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-12 w-full"
    >
      <div className="w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full">
          
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#E87121] mb-2">
              START WITH A CONVERSATION
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-extrabold text-gray-950 tracking-tight leading-tight mb-4 max-w-xl">
              Tell us what the plant is doing now
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-normal max-w-xl">
              Describe the machine, line or process that is not behaving the way you want. We will come back with questions — and if it looks like a fit, arrange a visit to see it running.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 xl:col-span-7 w-full">
            {submitted ? (
              <div className="bg-orange-50/50 border border-orange-200 rounded-none p-8 sm:p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-orange-100 text-[#E87121] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent to crabstertech@gmail.com</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>! An engineer will review your floor requirements and get back to your email ({formData.email}) or phone ({formData.phone}) with questions or to plan a plant visit.
                </p>
                <button
                  type="button"
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
              <form id="enquiry_form" name="enquiry_form" onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {errorMessage && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 p-4 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Your name * */}
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Your name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={loading}
                      className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all disabled:opacity-60"
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
                      disabled={loading}
                      className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all disabled:opacity-60"
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
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={loading}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all disabled:opacity-60"
                  />
                </div>

                {/* What is not working? * */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    What is not working? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the machine, line, or floor process issue..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    disabled={loading}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-gray-300 rounded-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E87121] focus:border-transparent transition-all resize-y disabled:opacity-60"
                  ></textarea>
                </div>

                {/* Submit Button & Privacy note */}
                <div className="pt-2 flex flex-wrap items-center gap-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-[#E87121] hover:bg-[#D45E12] active:scale-[0.98] rounded-none shadow-lg shadow-orange-500/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending to Crabster...</span>
                      </>
                    ) : (
                      <span>Send enquiry</span>
                    )}
                  </button>
                  <p className="text-xs sm:text-sm text-gray-500 font-normal">
                    We send your enquiry directly to <span className="font-semibold text-gray-700">crabstertech@gmail.com</span> to arrange a visit or reply.
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
