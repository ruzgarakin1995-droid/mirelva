"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion } from "framer-motion";

interface CodeViewerProps {
  code: string;
  language?: string;
}

export function CodeViewer({ code, language = "json" }: CodeViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden bg-[#0d1117] border border-zinc-800 group">
      <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-zinc-800/50">
        <span className="text-xs font-mono text-zinc-400 select-none">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <Check size={14} className="text-emerald-500" />
            </motion.div>
          ) : (
            <Copy size={14} />
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
