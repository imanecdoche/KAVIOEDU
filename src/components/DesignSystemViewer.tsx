/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Type, Palette, HelpCircle, Eye, RefreshCw, Settings, Sparkles } from 'lucide-react';
import { TYPOGRAPHY_HIERARCHY, COLOR_PALETTE } from '../data/designSystem';
import { DesignSystemToken } from '../types';

export default function DesignSystemViewer() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const [playgroundText, setPlaygroundText] = useState('');
  const [activePlaygroundToken, setActivePlaygroundToken] = useState<string>('Title');

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(tokenName);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const getActiveTokenInfo = (): DesignSystemToken => {
    return TYPOGRAPHY_HIERARCHY.find(t => t.name === activePlaygroundToken) || TYPOGRAPHY_HIERARCHY[0];
  };

  return (
    <div className="space-y-12">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-indigo-400" />
            DESIGN SYSTEM & VISUAL GUIDES
          </div>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight text-white">
            Akademika English Design System
          </h1>
          <p className="font-sans text-sm md:text-base text-slate-300 leading-relaxed font-light">
            Sistem desain ini dibuat khusus untuk menjamin keselarasan visual, kejelasan navigasi, dan kenyamanan membaca bagi siswa dari berbagai tingkat usia (SD, SMP, SMA, hingga UMUM). Seluruh elemen teks mengikuti skala keterbacaan yang rasional dengan kontras warna yang tinggi.
          </p>
        </div>
      </div>

      {/* Grid: Typography & Palette */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Typography Section (Left 8 columns) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-slate-50 text-slate-800 border border-slate-100 shadow-sm">
                <Type className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-slate-900">Hierarki Tipografi</h2>
                <p className="text-xs text-slate-500">Gaya huruf yang dipakai untuk menstrukturkan materi modul</p>
              </div>
            </div>
            <span className="font-mono text-xs text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
              Outfit & Inter Fonts
            </span>
          </div>

          <div className="space-y-6">
            {TYPOGRAPHY_HIERARCHY.map((token) => (
              <div 
                key={token.name} 
                className="group relative bg-white border border-slate-100 rounded-2xl p-5 hover:border-slate-200 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  {/* Name, Tag and Description */}
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {token.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 font-light truncate">
                        {token.name === 'body' || token.name === 'descr' || token.name === 'caption' || token.name === 'quote' ? 'Sans-Serif (Inter)' : token.name === 'label' ? 'Monospace (JetBrains Mono)' : 'Display (Outfit)'}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                      {token.description}
                    </p>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(token.class, token.name)}
                    className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-100 rounded-lg transition-colors"
                    title="Copy tailwind classes"
                  >
                    {copiedToken === token.name ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy classes</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Live rendering container */}
                <div className="bg-slate-50/50 border border-slate-100/50 rounded-xl p-5 relative overflow-hidden">
                  <span className="absolute right-3 bottom-3 text-[9px] font-mono text-slate-300 uppercase tracking-widest pointer-events-none select-none">
                    Preview Rendering
                  </span>
                  
                  {/* The rendering block */}
                  {token.name === 'quote' ? (
                    <blockquote className={token.class}>
                      {token.exampleText}
                    </blockquote>
                  ) : token.name === 'highlighted text' ? (
                    <p className="text-slate-600 text-sm">
                      Contoh penggunaan: Di dalam kalimat ini terdapat kata <span className={token.class}>{token.exampleText}</span> yang tersorot.
                    </p>
                  ) : (
                    <span className={`${token.class} block`}>
                      {token.exampleText}
                    </span>
                  )}
                </div>

                {/* Class list reveal on hover / detail */}
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="font-mono text-[10px] text-slate-400">Class:</span>
                  <code className="font-mono text-[10.5px] text-indigo-600 bg-indigo-50/40 px-2 py-0.5 rounded border border-indigo-50/30 break-all">
                    {token.class}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Palettes & Playgrounds (Right 4 columns) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Colors Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
              <Palette className="h-4.5 w-4.5 text-slate-800" />
              <h3 className="font-display font-bold text-base text-slate-900">Palet Warna Level</h3>
            </div>
            
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
              Setiap tingkat pendidikan memiliki aksen warna khusus untuk merangsang kognisi visual yang unik dan mempermudah navigasi.
            </p>

            <div className="space-y-4 pt-1">
              {COLOR_PALETTE.map((color) => (
                <div key={color.name} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                  {/* Color box */}
                  <div 
                    className={`h-11 w-11 rounded-lg shadow-inner flex-shrink-0 flex items-center justify-center`}
                    style={{ backgroundColor: color.hex }}
                  >
                    <span className="text-[10px] font-mono text-white/50">{color.hex}</span>
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <p className="font-display font-semibold text-xs text-slate-800 truncate">
                      {color.name}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-relaxed font-light line-clamp-2">
                      {color.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Playground Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
              <Settings className="h-4.5 w-4.5 text-slate-800" />
              <h3 className="font-display font-bold text-base text-slate-900">Interactive Text Play</h3>
            </div>
            
            <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
              Ketikkan kata-kata Anda di bawah ini dan pilih token di atas untuk melihat bagaimana modul akan memformat tulisan Anda secara real-time!
            </p>

            {/* Selector */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                Pilih Tipe Desain Token:
              </label>
              <select 
                value={activePlaygroundToken}
                onChange={(e) => setActivePlaygroundToken(e.target.value)}
                className="w-full text-xs bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 text-slate-700 outline-none focus:border-indigo-300 focus:bg-white transition-all"
              >
                {TYPOGRAPHY_HIERARCHY.map((token) => (
                  <option key={token.name} value={token.name}>
                    {token.name} ({token.name === 'body' || token.name === 'descr' ? 'Sans-serif' : 'Display'})
                  </option>
                ))}
              </select>
            </div>

            {/* Input area */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                Teks Custom Anda:
              </label>
              <textarea
                value={playgroundText}
                onChange={(e) => setPlaygroundText(e.target.value)}
                placeholder="Tulis kalimat bahasa Inggris Anda di sini..."
                rows={3}
                className="w-full text-xs border border-slate-100 rounded-xl px-3 py-2 outline-none focus:border-indigo-300 focus:bg-white bg-slate-50/50 resize-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Render results */}
            <div className="border border-indigo-50 bg-indigo-50/10 rounded-xl p-4 min-h-[90px] flex flex-col justify-between relative overflow-hidden">
              <span className="absolute right-2 top-2 bg-indigo-100 text-indigo-700 text-[8px] font-mono px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                {activePlaygroundToken} Output
              </span>
              
              <div className="py-2">
                {playgroundText ? (
                  activePlaygroundToken === 'quote' ? (
                    <blockquote className={getActiveTokenInfo().class}>
                      "{playgroundText}"
                    </blockquote>
                  ) : activePlaygroundToken === 'highlighted text' ? (
                    <p className="text-slate-600 text-sm">
                      Poin utama: <span className={getActiveTokenInfo().class}>{playgroundText}</span>
                    </p>
                  ) : (
                    <span className={getActiveTokenInfo().class}>
                      {playgroundText}
                    </span>
                  )
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    (Ketik teks Anda di atas untuk melihat visualisasi format)
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-indigo-50/50 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-400">Preview</span>
                <button
                  onClick={() => setPlaygroundText('Let us learn English together with fun and joy!')}
                  className="text-[9px] font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
                >
                  <RefreshCw className="h-2 w-2" /> Load Default
                </button>
              </div>
            </div>
          </div>
          
          {/* Rules / Tip Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-3">
            <h4 className="font-display font-semibold text-xs text-slate-800 flex items-center gap-1.5">
              <HelpCircle className="h-4 w-4 text-indigo-500" />
              Panduan Menulis Modul
            </h4>
            <ul className="text-xs text-slate-500 space-y-2 list-disc list-inside leading-relaxed font-light">
              <li>Posisikan <span className="font-semibold text-slate-700">Title</span> hanya 1 kali di halaman utama.</li>
              <li>Pecah setiap unit menjadi bagian-bagian menggunakan <span className="font-semibold text-slate-700">h1</span>.</li>
              <li>Gunakan <span className="font-semibold text-slate-700">h2</span> untuk membedakan kategori (e.g. Kosakata, Tata Bahasa).</li>
              <li>Tulis semua deskripsi penjelas dengan <span className="font-semibold text-slate-700">descr</span> di bagian atas sub-unit.</li>
              <li>Selalu gunakan format <span className="font-semibold text-slate-700">quote</span> untuk kalimat percakapan lengkap yang memiliki arti dalam bahasa Indonesia.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
