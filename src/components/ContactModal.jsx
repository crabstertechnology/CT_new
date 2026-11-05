import React, { useState } from 'react';
import { X, Send, Phone, MapPin, Mail, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    location: 'Coimbatore',
    service: 'Industrial IoT & Edge Solutions',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production this can connect to backend API / WhatsApp / email
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl relative border border-gray-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="bg-[#09111E] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
              Direct Floor Consultation
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Talk to an Automation Engineer
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Request Received</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
                Thank you! An engineer from Crabster Technology in Coimbatore will review your requirements and call you back shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#0E3B64] hover:bg-[#092645] rounded-md"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Factory / Plant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Precision Works"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Plant Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                  >
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Tirupur">Tirupur</option>
                    <option value="Salem">Salem</option>
                    <option value="Erode">Erode</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Other Tamil Nadu">Other Tamil Nadu / South India</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none bg-white"
                >
                  <option value="Industrial IoT & Edge Solutions">Industrial IoT &amp; Edge Solutions</option>
                  <option value="Automation Panel Boards">Automation Panel Boards</option>
                  <option value="Process Automation">Process Automation</option>
                  <option value="Production Automation">Production Automation &amp; Retrofits</option>
                  <option value="General Plant Assessment">On-floor Plant Assessment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Tell us about your machine or floor bottleneck
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. We have 6 CNC lines and manual counting causes shift disputes. Need live line status."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-gray-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>On-site visits available across TN</span>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0E3B64] hover:bg-[#092645] rounded-md shadow-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
