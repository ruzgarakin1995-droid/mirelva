"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';

interface ProjectQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectQuoteModal({ isOpen, onClose }: ProjectQuoteModalProps) {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-6"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 text-white rounded-none overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[800px]"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left Panel (Image/Info) */}
            <div className="hidden md:flex w-1/3 bg-white/5 border-r border-white/10 flex-col justify-between p-12">
              <div>
                <h3 className="text-2xl font-light tracking-tighter mb-4">Start a<br/><span className="font-bold">Project.</span></h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We take on a limited number of projects each year to ensure the highest level of detail and attention.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-sm text-white/40">
                  <span className={`w-6 h-px ${step >= 1 ? 'bg-white' : 'bg-white/20'} transition-colors duration-500`} />
                  <span className={step >= 1 ? 'text-white' : ''}>Project Details</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/40">
                  <span className={`w-6 h-px ${step >= 2 ? 'bg-white' : 'bg-white/20'} transition-colors duration-500`} />
                  <span className={step >= 2 ? 'text-white' : ''}>Scope & Timeline</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/40">
                  <span className={`w-6 h-px ${step >= 3 ? 'bg-white' : 'bg-white/20'} transition-colors duration-500`} />
                  <span className={step >= 3 ? 'text-white' : ''}>Contact Info</span>
                </div>
              </div>
            </div>

            {/* Right Panel (Form) */}
            <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h4 className="text-xl font-medium tracking-tight mb-8">What type of project are you planning?</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['Residential', 'Commercial', 'Cultural', 'Hospitality', 'Interior Design', 'Masterplanning'].map((type) => (
                      <label key={type} className="flex items-center p-4 border border-white/10 hover:border-white/40 cursor-pointer transition-colors group">
                        <input type="radio" name="projectType" className="sr-only" />
                        <div className="w-4 h-4 border border-white/30 rounded-full mr-4 group-hover:border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-sm uppercase tracking-widest">{type}</span>
                      </label>
                    ))}
                  </div>

                  <div className="pt-8 flex justify-end">
                    <button onClick={() => setStep(2)} className="flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-white/70 transition-colors">
                      <span>Next Step</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h4 className="text-xl font-medium tracking-tight mb-8">Tell us about the scale and timeline.</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Estimated Budget (USD)</label>
                      <select className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors">
                        <option value="" className="bg-[#0a0a0a] text-white">Select a range</option>
                        <option value="1" className="bg-[#0a0a0a] text-white">$500k - $1M</option>
                        <option value="2" className="bg-[#0a0a0a] text-white">$1M - $5M</option>
                        <option value="3" className="bg-[#0a0a0a] text-white">$5M+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Project Location</label>
                      <input type="text" placeholder="City, Country" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/20" />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Project Description</label>
                      <textarea rows={3} placeholder="Briefly describe your vision..." className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/20 resize-none"></textarea>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-between">
                    <button onClick={() => setStep(1)} className="text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                      Back
                    </button>
                    <button onClick={() => setStep(3)} className="flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-white/70 transition-colors">
                      <span>Next Step</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h4 className="text-xl font-medium tracking-tight mb-8">How can we reach you?</h4>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">First Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Last Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Email Address</label>
                      <input type="email" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors" />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Company (Optional)</label>
                      <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors" />
                    </div>
                  </div>

                  <div className="pt-8 flex justify-between items-center">
                    <button onClick={() => setStep(2)} className="text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                      Back
                    </button>
                    <button onClick={() => {
                      // Submit logic here
                      setStep(4);
                    }} className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/90 transition-colors flex items-center space-x-2">
                      <span>Submit Request</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4">
                    <Check size={24} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-light tracking-tighter">Request Received</h4>
                  <p className="text-white/50 text-sm max-w-sm mx-auto">
                    Thank you for your interest. Our partners will review your project details and respond within 48 hours.
                  </p>
                  <button onClick={onClose} className="mt-8 text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-white/70 transition-colors">
                    Close Window
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

