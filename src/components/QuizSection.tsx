/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, Award, ArrowRight, RefreshCw, AlertCircle } from 'lucide-react';
import { QuizQuestion } from '../types';

interface QuizSectionProps {
  questions: QuizQuestion[];
  colorTheme: {
    primary: string;
    secondary: string;
    accent: string;
    hover: string;
    text: string;
  };
  onUnitCompleted?: () => void;
}

export default function QuizSection({ questions, colorTheme, onUnitCompleted }: QuizSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100 p-6">
        <AlertCircle className="h-10 w-10 text-slate-400 mx-auto mb-3" />
        <p className="text-sm text-slate-500 font-sans">Belum ada pertanyaan latihan untuk unit ini.</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIdx];

  const handleOptionSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIdx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      if (onUnitCompleted) {
        onUnitCompleted();
      }
    }
  };

  const handleResetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div 
      className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 shadow-sm relative"
      id="quiz-sandbox"
    >
      {!quizFinished ? (
        <div className="space-y-6">
          {/* Header Progress */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-50 pb-4">
            <span className="font-semibold text-slate-500">QUIZ SANDBOX</span>
            <span>Pertanyaan {currentIdx + 1} dari {questions.length}</span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${colorTheme.primary} transition-all duration-300`}
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <span className={`text-[11px] font-mono font-semibold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600`}>
              QUESTION
            </span>
            <h3 className="font-display font-bold text-lg md:text-xl text-slate-900 leading-snug">
              {currentQuestion.question}
            </h3>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              // Styling states
              let buttonStyle = 'border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-slate-50 text-slate-700';
              
              if (selectedOption === idx) {
                buttonStyle = 'border-indigo-500 bg-indigo-50/20 text-indigo-900 font-medium ring-1 ring-indigo-500';
              }

              if (isAnswered) {
                if (idx === currentQuestion.correctAnswer) {
                  // Correct answer gets green highlight
                  buttonStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                } else if (selectedOption === idx) {
                  // Incorrect user choice gets red highlight
                  buttonStyle = 'border-rose-500 bg-rose-50 text-rose-900 ring-1 ring-rose-500';
                } else {
                  // Other options get faded
                  buttonStyle = 'border-slate-100 bg-slate-50/30 text-slate-400 cursor-not-allowed';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border text-sm md:text-base flex items-center justify-between transition-all duration-150 ${buttonStyle}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-400 bg-white border border-slate-200 h-6 w-6 rounded-md flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                  </span>

                  {isAnswered && idx === currentQuestion.correctAnswer && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  )}
                  {isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && (
                    <XCircle className="h-5 w-5 text-rose-600 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-50 flex items-center justify-between gap-4">
            {!isAnswered ? (
              <>
                <p className="text-xs text-slate-400 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" /> Pilih opsi terbaik untuk mensubmit
                </p>
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOption === null}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    selectedOption !== null
                      ? `${colorTheme.primary} hover:opacity-90 text-white cursor-pointer`
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
              </>
            ) : (
              <div className="w-full space-y-4">
                {/* Answer Explanation */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-xs md:text-sm leading-relaxed space-y-1">
                  <p className="font-semibold text-slate-700 flex items-center gap-1.5">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" /> Jawaban Benar!
                      </span>
                    ) : (
                      <span className="text-rose-600 flex items-center gap-1">
                        <XCircle className="h-4 w-4" /> Jawaban Kurang Tepat
                      </span>
                    )}
                  </p>
                  <p className="text-slate-600 italic">
                    {currentQuestion.explanation}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold text-white ${colorTheme.primary} hover:opacity-90 transition-all flex items-center gap-1.5 cursor-pointer`}
                  >
                    {currentIdx < questions.length - 1 ? (
                      <>
                        Next Question <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      'Finish Quiz'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Summary Finished State */
        <div className="text-center py-6 md:py-10 space-y-6">
          <div className="relative inline-block">
            <div className={`p-5 rounded-full ${colorTheme.secondary} inline-block`}>
              <Award className="h-14 w-14" />
            </div>
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md">
              COMPLETED
            </span>
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-display font-extrabold text-2xl text-slate-900">
              Hasil Latihan Unit Selesai!
            </h3>
            <p className="font-sans text-sm text-slate-500 font-light leading-relaxed">
              Selamat Anda telah menyelesaikan latihan uji pemahaman unit ini. Mari terus tingkatkan kemampuan Anda!
            </p>
          </div>

          {/* Scoring Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <div className="text-center border-r border-slate-100 py-2">
              <span className="text-xs text-slate-400 font-mono">SKOR ANDA</span>
              <p className="font-display font-extrabold text-3xl text-slate-800 mt-1">
                {score} / {questions.length}
              </p>
            </div>
            <div className="text-center py-2">
              <span className="text-xs text-slate-400 font-mono">AKURASI</span>
              <p className="font-display font-extrabold text-3xl text-indigo-600 mt-1">
                {percentage}%
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
            <button
              onClick={handleResetQuiz}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="h-4 w-4" /> Ulangi Kuis
            </button>
            <button
              disabled
              className={`px-5 py-2.5 ${colorTheme.primary} text-white opacity-90 rounded-xl text-sm font-semibold flex items-center justify-center gap-1.5`}
            >
              <CheckCircle2 className="h-4 w-4" /> Unit Ditandai Selesai
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
