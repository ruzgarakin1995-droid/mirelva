"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";

interface Step {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface StepperFormProps {
  steps: Step[];
  onComplete: () => void;
}

export function StepperForm({ steps, onComplete }: StepperFormProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-zinc-200 dark:bg-zinc-800" />
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-blue-600 dark:bg-blue-500 transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
          
          {steps.map((step, index) => {
            const isCompleted = currentStep > index;
            const isCurrent = currentStep === index;
            
            return (
              <div key={step.id} className="relative z-10 flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isCompleted || isCurrent ? "rgb(37 99 235)" : "rgb(255 255 255)",
                    borderColor: isCompleted || isCurrent ? "rgb(37 99 235)" : "rgb(228 228 231)",
                    color: isCompleted || isCurrent ? "white" : "rgb(161 161 170)"
                  }}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-medium text-sm transition-colors duration-300 dark:bg-zinc-950 dark:border-zinc-800`}
                >
                  {isCompleted ? <Check size={16} /> : index + 1}
                </motion.div>
                <span className={`absolute top-10 text-xs font-medium whitespace-nowrap transition-colors duration-300 ${isCurrent ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-500"}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-16 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {steps[currentStep].content}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors"
          >
            {currentStep === steps.length - 1 ? "Complete" : "Next"}
            {currentStep !== steps.length - 1 && <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
}
