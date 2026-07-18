import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, ArrowRight, RotateCcw, HelpCircle, Star, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScrambleQuestion {
  id: number;
  scrambled: string[];
  target: string;
  hint: string;
}

const QUESTIONS: ScrambleQuestion[] = [
  {
    id: 1,
    scrambled: ['name', 'My', 'is', 'Dina'],
    target: 'My name is Dina.',
    hint: 'Nama saya Dina.'
  },
  {
    id: 2,
    scrambled: ['from', 'I', 'am', 'Indonesia'],
    target: 'I am from Indonesia.',
    hint: 'Saya berasal dari Indonesia.'
  },
  {
    id: 3,
    scrambled: ['old', 'am', 'I', 'years', '9'],
    target: 'I am 9 years old.',
    hint: 'Saya berumur 9 tahun.'
  },
  {
    id: 4,
    scrambled: ['like', 'I', 'chocolate'],
    target: 'I like chocolate.',
    hint: 'Saya suka cokelat.'
  }
];

export default function WordScramblePractice() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [remainingWords, setRemainingWords] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [stars, setStars] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  const question = QUESTIONS[currentIdx];

  // Helper to shuffle array
  const shuffleArray = (arr: string[]) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (question) {
      setRemainingWords(shuffleArray(question.scrambled));
      setSelectedWords([]);
      setIsCorrect(null);
      setShowExplanation(false);
    }
  }, [currentIdx]);

  const selectWord = (word: string, index: number) => {
    if (isCorrect) return;
    setSelectedWords([...selectedWords, word]);
    const updated = [...remainingWords];
    updated.splice(index, 1);
    setRemainingWords(updated);
  };

  const deselectWord = (word: string, index: number) => {
    if (isCorrect) return;
    const updatedSelected = [...selectedWords];
    updatedSelected.splice(index, 1);
    setSelectedWords(updatedSelected);
    setRemainingWords([...remainingWords, word]);
  };

  const handleReset = () => {
    setRemainingWords(shuffleArray(question.scrambled));
    setSelectedWords([]);
    setIsCorrect(null);
  };

  const handleCheck = () => {
    const constructedSentence = selectedWords.join(' ') + '.';
    const matchesTarget = constructedSentence.toLowerCase() === question.target.toLowerCase();
    
    if (matchesTarget) {
      setIsCorrect(true);
      setStars(prev => prev + 1);
    } else {
      setIsCorrect(false);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setGameFinished(true);
    }
  };

  const handleRestartGame = () => {
    setCurrentIdx(0);
    setStars(0);
    setGameFinished(false);
    setRemainingWords(shuffleArray(QUESTIONS[0].scrambled));
    setSelectedWords([]);
    setIsCorrect(null);
    setShowExplanation(false);
  };

  return (
    <div id="word-scramble-sandbox" className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm relative">
      <div className="border-b border-slate-100 pb-4 mb-6">
        <h2 className="font-display font-semibold text-lg md:text-xl lg:text-2xl text-slate-800 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-indigo-500" />
          8. LATIHAN MENYUSUN KALIMAT (Word Scramble)
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed font-light">
          Susunlah kata-kata acak berikut agar membentuk kalimat perkenalan bahasa Inggris yang benar dan sesuai artinya!
        </p>
      </div>

      {!gameFinished ? (
        <div className="space-y-6">
          {/* Progress and Stars */}
          <div className="flex justify-between items-center bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-xs font-mono">
            <span className="text-slate-500 font-bold">SOAL {currentIdx + 1} DARI {QUESTIONS.length}</span>
            <span className="text-amber-600 font-bold flex items-center gap-1">
              <Star className="h-4 w-4 fill-amber-500 text-amber-500 animate-bounce" />
              SKOR: {stars} BINTANG
            </span>
          </div>

          {/* Prompt/Translation Goal */}
          <div className="bg-indigo-50/50 border border-indigo-100/60 rounded-2xl p-4 space-y-1">
            <h4 className="text-xs font-mono font-bold text-indigo-700 tracking-wider">SUSUNLAH KALIMAT INI:</h4>
            <p className="text-base font-semibold text-slate-800 font-sans">
              "{question.hint}"
            </p>
          </div>

          {/* Constructed Sentence Area */}
          <div className="min-h-[72px] bg-slate-50/40 border-2 border-dashed border-slate-200 rounded-2xl p-4 flex flex-wrap items-center gap-2 shadow-inner">
            {selectedWords.length === 0 ? (
              <span className="text-sm text-slate-400 italic">Klik kata di bawah untuk mulai menyusun...</span>
            ) : (
              selectedWords.map((word, index) => (
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  key={index}
                  onClick={() => deselectWord(word, index)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-3.5 py-1.5 rounded-xl shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {word}
                </motion.button>
              ))
            )}
            {selectedWords.length > 0 && <span className="font-bold text-indigo-600 text-lg">.</span>}
          </div>

          {/* Scrambled Word Pool */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">KATA ACAK:</h4>
            <div className="flex flex-wrap gap-2 pt-1">
              <AnimatePresence>
                {remainingWords.map((word, index) => (
                  <motion.button
                    layout
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    key={`${word}-${index}`}
                    onClick={() => selectWord(word, index)}
                    className="bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm active:scale-95 hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-pointer"
                  >
                    {word}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Action and Reset Buttons */}
          <div className="flex gap-3 justify-end pt-2">
            <button
              onClick={handleReset}
              disabled={selectedWords.length === 0 || isCorrect === true}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 border border-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40 transition-all"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Mulai Ulang
            </button>

            <button
              onClick={handleCheck}
              disabled={selectedWords.length === 0 || isCorrect === true}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-100 rounded-xl text-xs font-semibold flex items-center gap-1.5 disabled:opacity-40 transition-all"
            >
              Periksa Jawaban
            </button>
          </div>

          {/* Explanation Alert */}
          {showExplanation && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className={`p-4 rounded-2xl border flex items-start gap-3 ${
                isCorrect
                  ? 'bg-emerald-50 border-emerald-100 text-emerald-800'
                  : 'bg-rose-50 border-rose-100 text-rose-800'
              }`}
            >
              {isCorrect ? (
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0 animate-bounce" />
              ) : (
                <AlertCircle className="h-5 w-5 text-rose-600 mt-0.5 flex-shrink-0 animate-wiggle" />
              )}
              <div className="space-y-1">
                <h4 className="font-bold text-sm">
                  {isCorrect ? 'Luar Biasa! Jawabanmu Benar!' : 'Yah, Hampir Tepat! Yuk coba lagi.'}
                </h4>
                <p className="text-xs md:text-sm font-light leading-relaxed opacity-95">
                  {isCorrect
                    ? `Kalimat "${question.target}" tersusun sempurna.`
                    : `Susunan kalimatmu adalah "${selectedWords.join(' ')}." sedangkan jawaban yang tepat adalah "${question.target}".`}
                </p>
                
                {isCorrect && (
                  <button
                    onClick={handleNext}
                    className="mt-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-1.5 rounded-lg flex items-center gap-1.5 shadow transition-all self-start"
                  >
                    {currentIdx < QUESTIONS.length - 1 ? 'Lanjut Soal Berikut' : 'Selesaikan Game'}
                    <ArrowRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      ) : (
        /* Final Completion Screen */
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12 space-y-6 flex flex-col items-center"
        >
          <div className="h-20 w-20 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center text-4xl shadow-inner animate-bounce">
            🏆
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-extrabold text-2xl text-slate-800">Hore, Kamu Berhasil!</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-light">
              Kamu telah menyelesaikan semua tantangan menyusun kalimat perkenalan bahasa Inggris dengan skor sempurna:
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200/60 text-amber-800 font-bold px-6 py-2 rounded-2xl flex items-center gap-2 shadow-sm text-sm">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            {stars} / {QUESTIONS.length} BINTANG BERHASIL DIRAIH!
          </div>

          <button
            onClick={handleRestartGame}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-100 text-sm font-semibold tracking-wide transition-all flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Main Lagi
          </button>
        </motion.div>
      )}
    </div>
  );
}
