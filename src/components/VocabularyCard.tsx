/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2, RefreshCw, HelpCircle, BookOpen } from 'lucide-react';
import { VocabularyItem } from '../types';

interface VocabularyCardProps {
  key?: string;
  item: VocabularyItem;
}

export default function VocabularyCard({ item }: VocabularyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card from flipping when clicking sound button
    if (!('speechSynthesis' in window)) {
      alert('Your browser does not support Speech Synthesis.');
      return;
    }

    setIsPlaying(true);
    // Cancel any ongoing speeches
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(item.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for better learning

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const speakExample = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    
    // Cancel ongoing
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(item.example);
    utterance.lang = 'en-US';
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div 
      className="relative h-64 w-full cursor-pointer group perspective"
      id={`vocab-card-${item.id}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Card Inner Container for flipping */}
      <motion.div
        className="relative w-full h-full duration-500 transform-style-3d shadow-sm hover:shadow-md rounded-2xl border border-slate-100"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front Side: English Word */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
              {item.partOfSpeech}
            </span>
            <button
              onClick={speak}
              className={`p-2 rounded-full transition-all ${
                isPlaying 
                  ? 'bg-indigo-100 text-indigo-600 animate-pulse' 
                  : 'bg-slate-100 hover:bg-indigo-50 text-slate-500 hover:text-indigo-600'
              }`}
              title="Pronounce word"
            >
              <Volume2 className="h-4 w-4" />
            </button>
          </div>

          <div className="text-center py-4">
            <h3 className="font-display font-extrabold text-2xl text-slate-800 tracking-tight">
              {item.word}
            </h3>
            <p className="font-mono text-xs text-slate-400 mt-1">
              {item.pronunciation}
            </p>
          </div>

          <div className="flex justify-between items-center text-xs text-slate-400 font-sans border-t border-slate-50 pt-3">
            <span className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" /> Klik untuk arti
            </span>
            <RefreshCw className="h-3.5 w-3.5 opacity-60 group-hover:rotate-45 transition-transform" />
          </div>
        </div>

        {/* Back Side: Indonesian Translation + Example */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
              Arti & Contoh
            </span>
            <span className="text-xs text-indigo-300 font-medium">Terjemahan</span>
          </div>

          <div className="my-auto">
            <p className="text-center font-display font-semibold text-xl text-indigo-200">
              {item.meaning}
            </p>
            
            {/* Divider */}
            <div className="h-px bg-slate-800 my-3"></div>

            {/* Example sentence */}
            <div className="text-left space-y-1">
              <div className="flex items-center gap-1.5">
                <p className="text-xs text-slate-300 font-medium font-sans">Contoh Kalimat:</p>
                <button 
                  onClick={speakExample}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                  title="Pronounce sentence"
                >
                  <Volume2 className="h-3 w-3" />
                </button>
              </div>
              <p className="text-sm text-slate-200 italic leading-relaxed">
                "{item.example}"
              </p>
              <p className="text-xs text-indigo-300 font-light leading-relaxed">
                Artinya: {item.exampleTranslation}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center text-[11px] text-slate-400 border-t border-slate-800 pt-3">
            <span className="flex items-center gap-1">
              <RefreshCw className="h-3 w-3" /> Klik untuk kembali ke depan
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
