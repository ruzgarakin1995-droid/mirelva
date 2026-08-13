"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface ModernInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: boolean;
}

export function ModernInput({ label, error, success, ...props }: ModernInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  
  const hasValue = props.value !== undefined && props.value !== "";
  const isFloating = isFocused || hasValue;

  return (
    <div className="relative w-full mb-4">
      <div className="relative group">
        <input
          {...props}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          className={`
            w-full bg-white dark:bg-zinc-950 px-4 pt-6 pb-2 rounded-xl border
            text-zinc-900 dark:text-zinc-100 text-sm outline-none transition-all duration-200
            ${error ? "border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" : 
              success ? "border-emerald-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10" : 
              "border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-zinc-300 dark:hover:border-zinc-700"}
          `}
        />
        
        <motion.label
          initial={false}
          animate={{
            y: isFloating ? -12 : 0,
            scale: isFloating ? 0.85 : 1,
            color: error ? "rgb(239 68 68)" : success ? "rgb(16 185 129)" : isFocused ? "rgb(59 130 246)" : "rgb(161 161 170)"
          }}
          className="absolute left-4 top-4 origin-[0] pointer-events-none text-zinc-500"
        >
          {label}
        </motion.label>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          {error && <AlertCircle size={18} className="text-red-500" />}
          {success && !error && <CheckCircle2 size={18} className="text-emerald-500" />}
        </div>
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 mt-1.5 ml-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
