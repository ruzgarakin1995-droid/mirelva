"use client";

import React, { useState, useRef, useEffect } from "react";
import { Wand2, Send, Plus, MessageSquare, Trash2, Bot, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { createSession, deleteSession, addMessage } from "@/actions/copilot";

export default function CopilotClient({ 
  sessions, 
  currentSession 
}: { 
  sessions: any[];
  currentSession: any;
}) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentSession?.messages]);

  const handleNewSession = async () => {
    const res = await createSession("Yeni Sohbet");
    if (res.success && res.data) {
      const url = new URL(window.location.href);
      url.searchParams.set("session", res.data.id);
      router.push(url.toString());
    }
  };

  const handleDeleteSession = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if(confirm("Bu sohbeti silmek istediğinize emin misiniz?")) {
      await deleteSession(id);
      if (currentSession?.id === id) {
        router.push("/studio/copilot");
      } else {
        router.refresh();
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return;

    const messageContent = input.trim();
    setInput("");
    setIsProcessing(true);

    let targetSessionId = currentSession?.id;

    // Create session if it doesn't exist
    if (!targetSessionId) {
      const res = await createSession(messageContent.substring(0, 30) + "...");
      if (res.success && res.data) {
        targetSessionId = res.data.id;
        // update url without reloading
        window.history.pushState(null, '', `?session=${targetSessionId}`);
      }
    }

    if (targetSessionId) {
      // 1. Save User Message
      await addMessage(targetSessionId, "user", messageContent);
      
      // 2. Dummy AI Processing Delay
      setTimeout(async () => {
        // 3. Save AI Message
        await addMessage(targetSessionId, "assistant", "Bu özellik yakında gerçek bir yapay zeka API'si (OpenAI/Claude) ile entegre edilecektir. Şu anda test aşamasındayız.");
        setIsProcessing(false);
        router.refresh();
      }, 1000);
      
      router.refresh();
    } else {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex h-full gap-6 bg-[#111] rounded-3xl border border-white/5 overflow-hidden">
      
      {/* Sidebar: History */}
      <div className="w-80 border-r border-white/5 bg-[#0a0a0a]/50 hidden lg:flex flex-col">
        <div className="p-4 border-b border-white/5">
          <button 
            onClick={handleNewSession}
            className="w-full flex items-center justify-center gap-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 py-2.5 rounded-xl font-medium hover:bg-indigo-500/20 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Yeni Sohbet
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {sessions.length === 0 ? (
            <p className="text-center text-sm text-gray-500 mt-10">Henüz sohbet yok.</p>
          ) : (
            sessions.map(session => (
              <div 
                key={session.id}
                onClick={() => {
                  const url = new URL(window.location.href);
                  url.searchParams.set("session", session.id);
                  router.push(url.toString());
                }}
                className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                  currentSession?.id === session.id 
                    ? "bg-white/10" 
                    : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <MessageSquare className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-300 truncate font-medium">{session.title}</span>
                </div>
                <button 
                  onClick={(e) => handleDeleteSession(e, session.id)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-[#111]">
        
        {/* Header */}
        <div className="h-16 border-b border-white/5 flex items-center px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Wand2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-white">
              {currentSession ? currentSession.title : "Locizsa AI Copilot"}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!currentSession || currentSession.messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
              <Wand2 className="w-16 h-16 text-gray-500 mb-6" />
              <h2 className="text-2xl font-semibold text-white mb-2">Nasıl yardımcı olabilirim?</h2>
              <p className="text-gray-400 max-w-sm">Web sitesi oluşturmak, bileşen üretmek veya tema ayarlarını değiştirmek için bir komut verin.</p>
            </div>
          ) : (
            currentSession.messages.map((msg: any) => (
              <div key={msg.id} className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1
                  ${msg.role === 'user' ? 'bg-zinc-800' : 'bg-gradient-to-br from-indigo-500 to-purple-600'}`}>
                  {msg.role === 'user' ? <User className="w-4 h-4 text-gray-300" /> : <Bot className="w-4 h-4 text-white" />}
                </div>
                <div className={`px-5 py-3.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-zinc-800 text-white rounded-tr-sm' 
                    : 'bg-[#1A1A1A] text-gray-200 border border-white/5 rounded-tl-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))
          )}

          {isProcessing && (
            <div className="flex gap-4 max-w-3xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="px-5 py-4 rounded-2xl bg-[#1A1A1A] border border-white/5 rounded-tl-sm flex gap-1.5 items-center">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}} />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/5 bg-[#0a0a0a]/50">
          <div className="max-w-3xl mx-auto relative flex items-end gap-2 bg-[#1A1A1A] border border-white/10 rounded-2xl p-2 focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
            <textarea 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if(e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Bir komut girin (örn: Modern bir navbar oluştur)..."
              className="w-full bg-transparent text-white placeholder-gray-500 resize-none max-h-32 p-3 text-sm outline-none"
              rows={1}
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isProcessing}
              className="p-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:hover:bg-indigo-500 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-gray-500">AI yanıtları bazen hatalı olabilir, lütfen kontrol edin.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
