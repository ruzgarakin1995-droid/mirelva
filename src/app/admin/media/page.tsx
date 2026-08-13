import React from 'react';
import { Image as ImageIcon, UploadCloud } from 'lucide-react';

export default function MediaPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Medya Kütüphanesi</h1>
          <p className="mt-1 text-sm text-white/40">Görsel, video ve belgelerinizi merkezi olarak yönetin.</p>
        </div>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
          <UploadCloud className="w-4 h-4" />
          Yükle
        </button>
      </div>

      <div className="flex flex-col items-center justify-center h-96 border border-dashed border-white/10 rounded-2xl bg-[#111111]">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/5">
          <ImageIcon className="w-8 h-8 text-white/40" />
        </div>
        <h3 className="text-lg font-medium text-white mb-2">Medya bulunamadı</h3>
        <p className="text-white/40 text-sm max-w-sm text-center mb-6">
          Web sitenizde kullanmak üzere görselleri buraya sürükleyip bırakabilir veya yükleyebilirsiniz.
        </p>
        <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors border border-white/5 flex items-center gap-2">
          <UploadCloud className="w-4 h-4" />
          Dosya Seç
        </button>
      </div>
    </div>
  );
}
