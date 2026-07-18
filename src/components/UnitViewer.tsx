/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, BookOpen, Sparkles, MessageCircle, Info, ChevronRight, HelpCircle } from 'lucide-react';
import { LearningUnit, ModuleSection, DialogueLine, ExpressionItem } from '../types';
import VocabularyCard from './VocabularyCard';
import { TYPOGRAPHY_HIERARCHY } from '../data/designSystem';

interface UnitViewerProps {
  unit: LearningUnit;
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    hover: string;
    text: string;
  };
}

// Wrapper for inspectable design system items
interface InspectableProps {
  token: 'Title' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'descr' | 'quote' | 'label' | 'caption' | 'highlighted text';
  children: React.ReactNode;
  active?: boolean;
  inline?: boolean;
}

function Inspectable({ token, children }: InspectableProps) {
  const tokenInfo = TYPOGRAPHY_HIERARCHY.find(t => t.name === token);
  const classes = tokenInfo?.class || '';

  if (token === 'quote') {
    return <blockquote className={classes}>{children}</blockquote>;
  }
  if (token === 'highlighted text') {
    return <span className={classes}>{children}</span>;
  }
  return <div className={classes}>{children}</div>;
}

export default function UnitViewer({ unit, colorTheme }: UnitViewerProps) {
  const [activeSpeech, setActiveSpeech] = useState<string | null>(null);
  const inspectorActive = false;

  const speakText = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    setActiveSpeech(id);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    
    utterance.onend = () => setActiveSpeech(null);
    utterance.onerror = () => setActiveSpeech(null);
    
    window.speechSynthesis.speak(utterance);
  };

  const renderSection = (section: ModuleSection) => {
    switch (section.type) {
      case 'intro':
        return (
          <div key={section.id} className="space-y-4">
            <Inspectable token="h1" active={inspectorActive}>
              {section.title}
            </Inspectable>
            <Inspectable token="body" active={inspectorActive}>
              {section.introText}
            </Inspectable>
          </div>
        );

      case 'vocabulary':
        return (
          <div key={section.id} className="space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <Inspectable token="h2" active={inspectorActive}>
                {section.title}
              </Inspectable>
              <Inspectable token="descr" active={inspectorActive}>
                Daftar kosakata penting untuk menunjang materi unit ini. Klik kartu untuk melihat arti kata dan contoh kalimat.
              </Inspectable>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {section.vocabulary?.map((vocab) => (
                <VocabularyCard 
                  key={vocab.id} 
                  item={vocab} 
                />
              ))}
            </div>
          </div>
        );

      case 'grammar':
        return (
          <div key={section.id} className="space-y-4 bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <div className="border-b border-slate-200 pb-3">
              <Inspectable token="h2" active={inspectorActive}>
                {section.title}
              </Inspectable>
              <div className="flex items-center gap-1.5 mt-1">
                <Inspectable token="label" active={inspectorActive}>
                  Tata Bahasa (Grammar)
                </Inspectable>
                <Inspectable token="caption" active={inspectorActive}>
                  *Penting untuk menyusun struktur kalimat
                </Inspectable>
              </div>
            </div>

            {section.grammarExplanation && (
              <div className="space-y-4 pt-1">
                {/* Pattern Block */}
                <div className="bg-white border border-slate-100 rounded-xl p-4 shadow-inner">
                  <Inspectable token="h4" active={inspectorActive}>
                    RUMUS / POLA UTAMA:
                  </Inspectable>
                  <div className="mt-2 text-sm md:text-base font-mono font-bold text-slate-800 bg-slate-50 px-3.5 py-2.5 rounded-lg border border-slate-100 inline-block">
                    {section.grammarExplanation.pattern}
                  </div>
                </div>

                {/* Explanation */}
                <div className="space-y-1">
                  <Inspectable token="h3" active={inspectorActive}>
                    Penjelasan Pola
                  </Inspectable>
                  <Inspectable token="body" active={inspectorActive}>
                    {section.grammarExplanation.description}
                  </Inspectable>
                </div>

                {/* Example Sentences */}
                <div className="space-y-2">
                  <Inspectable token="h3" active={inspectorActive}>
                    Contoh Penerapan Kalimat:
                  </Inspectable>
                  <div className="space-y-2.5">
                    {section.grammarExplanation.examples.map((ex, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-white/50 border border-slate-50 rounded-lg p-3">
                        <ChevronRight className="h-4 w-4 text-indigo-500 mt-1 flex-shrink-0" />
                        <div className="space-y-0.5">
                          <Inspectable token="highlighted text" active={inspectorActive} inline>
                            {ex.form}
                          </Inspectable>
                          <Inspectable token="descr" active={inspectorActive}>
                            Artinya: {ex.translation}
                          </Inspectable>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes footer */}
                <div className="pt-2 border-t border-slate-200">
                  <Inspectable token="caption" active={inspectorActive}>
                    Tips: {section.grammarExplanation.notes}
                  </Inspectable>
                </div>
              </div>
            )}
          </div>
        );

      case 'dialogue':
        return (
          <div key={section.id} className="space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <Inspectable token="h2" active={inspectorActive}>
                {section.title}
              </Inspectable>
              <Inspectable token="descr" active={inspectorActive}>
                Peragakan percakapan di bawah ini bersama teman kelas Anda untuk melatih kelancaran berbicara (pronunciation).
              </Inspectable>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto pt-2">
              {section.dialogue?.map((line, idx) => {
                const lineId = `${section.id}-line-${idx}`;
                const isA = line.role === 'A';
                
                return (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 ${isA ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    {/* Avatar circle */}
                    <div className={`h-9 w-9 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-sm flex-shrink-0 ${
                      isA ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-white'
                    }`}>
                      {line.speaker[0]}
                    </div>

                    {/* Speech Bubble */}
                    <div className={`relative max-w-[80%] rounded-2xl p-4 shadow-sm space-y-1.5 ${
                      isA 
                        ? 'bg-indigo-50/50 border border-indigo-100 rounded-tl-none' 
                        : 'bg-slate-50 border border-slate-100 rounded-tr-none'
                    }`}>
                      <div className="flex justify-between items-center gap-4">
                        <span className="text-xs font-bold text-slate-800">{line.speaker}</span>
                        <button
                          onClick={() => speakText(line.text, lineId)}
                          className={`p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors ${
                            activeSpeech === lineId ? 'text-indigo-600 bg-indigo-50 animate-bounce' : ''
                          }`}
                          title="Pronounce this line"
                        >
                          <Volume2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <Inspectable token="quote" active={inspectorActive}>
                        {line.text}
                      </Inspectable>

                      <div className="text-xs text-slate-500 font-sans leading-relaxed">
                        Terjemahan: {line.translation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'expressions':
        return (
          <div key={section.id} className="space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <Inspectable token="h2" active={inspectorActive}>
                {section.title}
              </Inspectable>
              <Inspectable token="descr" active={inspectorActive}>
                Ungkapan-ungkapan penting (idiom & phrases) yang sering digunakan dalam situasi nyata sehari-hari.
              </Inspectable>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {section.expressions?.map((exp, idx) => (
                <div key={idx} className="bg-white border border-slate-100 hover:border-slate-200 p-4 rounded-xl shadow-sm transition-all space-y-2">
                  <div className="flex justify-between items-start">
                    <Inspectable token="highlighted text" active={inspectorActive} inline>
                      {exp.phrase}
                    </Inspectable>
                    <button
                      onClick={() => speakText(exp.phrase, `exp-${idx}`)}
                      className="p-1 text-slate-400 hover:text-indigo-600 rounded"
                    >
                      <Volume2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                    <Inspectable token="body" active={inspectorActive}>
                      {exp.usage}
                    </Inspectable>
                    <div className="text-xs text-slate-500 font-sans italic">
                      Terjemahan: "{exp.translation}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Unit Welcome Banner */}
      <div className={`p-6 md:p-8 rounded-3xl ${colorTheme.secondary} border relative overflow-hidden`}>
        <div className="absolute top-10 right-10 opacity-10">
          <Sparkles className="h-24 w-24" />
        </div>
        
        <div className="space-y-2 max-w-2xl relative z-10">
          <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-white text-slate-700 shadow-sm border border-slate-100`}>
            UNIT {unit.number} • FOCUS: {unit.focus}
          </span>
          <Inspectable token="Title" active={inspectorActive}>
            {unit.title}
          </Inspectable>
          <Inspectable token="descr" active={inspectorActive}>
            {unit.description}
          </Inspectable>
        </div>
      </div>

      {/* Render each module section in the unit */}
      <div className="space-y-12">
        {unit.sections.map((section) => (
          <div key={section.id} className="space-y-4">
            {renderSection(section)}
          </div>
        ))}
      </div>
    </div>
  );
}
