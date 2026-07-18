/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  HelpCircle, 
  Eye, 
  CheckCircle, 
  Settings, 
  Layers, 
  ChevronRight, 
  Search, 
  Bookmark, 
  ListTodo, 
  Compass, 
  Info,
  Sliders
} from 'lucide-react';

import { LEARNING_LEVELS } from './data/learningModules';
import { LevelKey, LearningUnit } from './types';
import DesignSystemViewer from './components/DesignSystemViewer';
import UnitViewer from './components/UnitViewer';
import QuizSection from './components/QuizSection';

export default function App() {
  // Navigation Tabs: 'modules' | 'design-system'
  const [activeTab, setActiveTab] = useState<'modules' | 'design-system'>('modules');
  
  // Active learning level: SD | SMP | SMA | UMUM
  const [activeLevel, setActiveLevel] = useState<LevelKey>('SD');
  
  // Active unit in the selected level
  const [activeUnitId, setActiveUnitId] = useState<string>('sd-u1');
  
  // Inspector tool active state
  const [inspectorActive, setInspectorActive] = useState<boolean>(true);

  // Completed units persistence using localStorage
  const [completedUnits, setCompletedUnits] = useState<string[]>([]);

  // Search filter for Units
  const [searchQuery, setSearchQuery] = useState('');

  // Initial load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('akademika_completed_units');
    if (saved) {
      try {
        setCompletedUnits(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading progress', e);
      }
    }
  }, []);

  // Update unit choice if active level shifts
  useEffect(() => {
    const levelData = LEARNING_LEVELS.find(l => l.key === activeLevel);
    if (levelData && levelData.units.length > 0) {
      // Find first unit of this level
      setActiveUnitId(levelData.units[0].id);
    }
  }, [activeLevel]);

  // Mark a unit as completed
  const handleToggleComplete = (unitId: string) => {
    let updated: string[];
    if (completedUnits.includes(unitId)) {
      updated = completedUnits.filter(id => id !== unitId);
    } else {
      updated = [...completedUnits, unitId];
    }
    setCompletedUnits(updated);
    localStorage.setItem('akademika_completed_units', JSON.stringify(updated));
  };

  const getActiveLevelData = () => {
    return LEARNING_LEVELS.find(l => l.key === activeLevel) || LEARNING_LEVELS[0];
  };

  const getActiveUnitData = (): LearningUnit | undefined => {
    const level = getActiveLevelData();
    return level.units.find(u => u.id === activeUnitId) || level.units[0];
  };

  const activeLevelData = getActiveLevelData();
  const activeUnit = getActiveUnitData();

  // Calculate completion percentage for the active level
  const totalUnitsInLevel = activeLevelData.units.length;
  const completedInLevel = activeLevelData.units.filter(u => completedUnits.includes(u.id)).length;
  const completionPercentage = totalUnitsInLevel > 0 
    ? Math.round((completedInLevel / totalUnitsInLevel) * 100) 
    : 0;

  // Filter levels or units if search is entered
  const filteredUnits = activeLevelData.units.filter(unit => 
    unit.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    unit.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    unit.focus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 antialiased font-sans flex flex-col">
      
      {/* 1. Global Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('modules')}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <GraduationCap className="h-5.5 w-5.5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg text-slate-900 tracking-tight leading-none block">
                AKADEMIKA
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                English Learning
              </span>
            </div>
          </div>

          {/* Center Tabs Switcher */}
          <nav className="flex items-center bg-slate-100/80 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                activeTab === 'modules'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Modul Pembelajaran
            </button>
            <button
              onClick={() => setActiveTab('design-system')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                activeTab === 'design-system'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layers className="h-4 w-4" />
              Design System
            </button>
          </nav>

          {/* Right Header Element: Brief Info badge */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
            <Compass className="h-4 w-4 text-slate-400" />
            <span>Materi Terstruktur Per Tingkat</span>
          </div>
        </div>
      </header>

      {/* 2. Main Content Wrapper */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: LEARNING PORTAL */}
          {activeTab === 'modules' && (
            <motion.div
              key="modules-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              
              {/* Level Selection Grid - Responsive Accent Bars */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {LEARNING_LEVELS.map((level) => {
                  const isActive = activeLevel === level.key;
                  const isCompletedAll = level.units.every(u => completedUnits.includes(u.id));
                  
                  return (
                    <button
                      key={level.key}
                      onClick={() => setActiveLevel(level.key)}
                      className={`relative overflow-hidden text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? `bg-white border-slate-200 shadow-md ring-2 ring-indigo-500/10`
                          : `bg-white/80 hover:bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5`
                      }`}
                    >
                      {/* Top Accent Strip */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 ${level.colorTheme.primary}`} />
                      
                      <div className="flex justify-between items-start pt-1">
                        <div>
                          <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${level.colorTheme.secondary}`}>
                            {level.badge}
                          </span>
                          <h3 className="font-display font-extrabold text-lg text-slate-800 tracking-tight mt-2.5">
                            {level.name}
                          </h3>
                        </div>
                        {isCompletedAll && (
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0 animate-bounce" />
                        )}
                      </div>

                      {/* Small Info Progress footer */}
                      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                        <span>{level.units.length} Unit Modul</span>
                        <span className="font-mono font-bold text-slate-600">
                          {level.units.filter(u => completedUnits.includes(u.id)).length} Selesai
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Level Audience Info Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 bg-slate-800 text-slate-400 rounded">
                      AUDIENCE GUIDELINES
                    </span>
                    <span className="text-xs text-indigo-300 font-medium">{activeLevelData.name}</span>
                  </div>
                  <p className="font-sans text-xs md:text-sm text-slate-300 font-light max-w-3xl leading-relaxed">
                    {activeLevelData.audience}
                  </p>
                </div>

                {/* Level Completion Circle */}
                <div className="flex items-center gap-3 bg-slate-800/60 px-4.5 py-3 rounded-xl border border-slate-800 flex-shrink-0 self-start md:self-auto">
                  <div className="relative h-10 w-10 flex items-center justify-center">
                    {/* SVG Progress Circle */}
                    <svg className="absolute w-full h-full transform -rotate-90">
                      <circle cx="20" cy="20" r="16" className="stroke-slate-700 fill-none" strokeWidth="3" />
                      <circle 
                        cx="20" cy="20" r="16" 
                        className={`fill-none stroke-indigo-400 transition-all duration-500`}
                        strokeWidth="3" 
                        strokeDasharray={100}
                        strokeDashoffset={100 - completionPercentage}
                      />
                    </svg>
                    <span className="text-[10px] font-mono font-bold text-slate-100">
                      {completionPercentage}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-semibold">Tingkat Progress</span>
                    <span className="text-xs text-white font-medium">{completedInLevel}/{totalUnitsInLevel} Unit Selesai</span>
                  </div>
                </div>
              </div>

              {/* Level Content Grid: Units Sidebar + active Unit Content reading pane */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* SIDEBAR: Units Navigator (4 columns) */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* SEARCH & FILTERS BOX */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                      <span className="text-xs font-mono font-bold text-slate-400">DAFTAR UNIT PEMBELAJARAN</span>
                      <BookOpen className="h-4 w-4 text-slate-400" />
                    </div>
                    
                    {/* Search Field */}
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Cari materi unit..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full text-xs pl-9 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:border-indigo-300 focus:bg-white transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* UNITS SCROLL LIST */}
                  <div className="space-y-3">
                    {filteredUnits.length > 0 ? (
                      filteredUnits.map((unit) => {
                        const isUnitActive = activeUnitId === unit.id;
                        const isUnitCompleted = completedUnits.includes(unit.id);

                        return (
                          <div
                            key={unit.id}
                            onClick={() => setActiveUnitId(unit.id)}
                            className={`group text-left p-4 rounded-2xl border transition-all duration-150 cursor-pointer flex justify-between items-center gap-3 ${
                              isUnitActive
                                ? `bg-white border-indigo-200 shadow-md ring-1 ring-indigo-100`
                                : `bg-white/80 hover:bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md`
                            }`}
                          >
                            <div className="space-y-1.5 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                  UNIT {unit.number}
                                </span>
                                <span className={`text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-50 text-slate-500`}>
                                  {unit.focus}
                                </span>
                              </div>
                              <h4 className={`font-display font-bold text-sm tracking-tight transition-colors truncate ${
                                isUnitActive ? 'text-indigo-900' : 'text-slate-700 group-hover:text-slate-900'
                              }`}>
                                {unit.title}
                              </h4>
                              <p className="text-[11px] text-slate-400 line-clamp-2 font-sans font-light">
                                {unit.description}
                              </p>
                            </div>

                            {/* Checkbox button or Chevron to indicate choice */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleComplete(unit.id);
                              }}
                              className={`p-2 rounded-xl border flex-shrink-0 transition-colors ${
                                isUnitCompleted
                                  ? 'bg-emerald-50 border-emerald-100 text-emerald-600'
                                  : 'bg-slate-50 border-slate-100 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50'
                              }`}
                              title={isUnitCompleted ? "Tandai Belum Selesai" : "Tandai Selesai"}
                            >
                              <CheckCircle className="h-4 w-4" />
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-center py-8 bg-white border border-slate-100 rounded-2xl p-4 text-xs text-slate-400 font-sans italic">
                        Tidak ada unit yang cocok dengan "{searchQuery}"
                      </div>
                    )}
                  </div>

                  {/* PRESTASI / QUICK STATS WIDGET */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
                    <h4 className="font-display font-bold text-xs text-slate-900 flex items-center gap-2 border-b border-slate-50 pb-2.5">
                      <ListTodo className="h-4 w-4 text-slate-600" />
                      Checklist Prestasi Belajar
                    </h4>
                    <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                      {LEARNING_LEVELS.flatMap(lvl => lvl.units).map(u => {
                        const isDone = completedUnits.includes(u.id);
                        return (
                          <div key={u.id} className="flex items-center justify-between gap-3 text-xs">
                            <span className={`truncate flex-1 font-sans ${isDone ? 'line-through text-slate-400' : 'text-slate-600 font-medium'}`}>
                              {u.title}
                            </span>
                            <span className="font-mono text-[9px] text-slate-400">{u.id.split('-')[0].toUpperCase()}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>

                {/* READING AREA: Active Unit module render + Inspector option (8 columns) */}
                <div className="lg:col-span-8 space-y-8">
                  
                  {/* DESIGN INSPECTOR CONTROL BANNER */}
                  <div className="bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-transparent border border-sky-100/50 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-3">
                      <div className="p-2 rounded-xl bg-white border border-sky-100 text-sky-600 shadow-sm self-start flex-shrink-0">
                        <Sliders className="h-4 w-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-display font-bold text-xs text-slate-800 flex items-center gap-1.5">
                          Design System Inspector
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 text-[9px] font-mono font-bold tracking-wider">
                            EXCLUSIVE TOOL
                          </span>
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                          Ketika diaktifkan, modul akan menampilkan penanda visual token tipografi. Arahkan mouse untuk melihat rincian utilitas Tailwind.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setInspectorActive(!inspectorActive)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all self-start sm:self-auto flex items-center gap-2 ${
                        inspectorActive
                          ? 'bg-sky-500 text-white shadow-md shadow-sky-100 hover:bg-sky-600'
                          : 'bg-white hover:bg-slate-50 text-slate-600 border border-slate-200'
                      }`}
                    >
                      <Eye className="h-3.5 w-3.5" />
                      {inspectorActive ? 'Matikan Detektor' : 'Aktifkan Detektor'}
                    </button>
                  </div>

                  {/* ACTIVE MODULE CONTAINER */}
                  {activeUnit ? (
                    <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-12">
                      
                      {/* Active Unit content sections render */}
                      <UnitViewer 
                        unit={activeUnit} 
                        colorTheme={activeLevelData.colorTheme} 
                        inspectorActive={inspectorActive} 
                      />

                      {/* Divider */}
                      <div className="h-px bg-slate-100 my-8"></div>

                      {/* UNIT QUIZ SANDBOX */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="font-display font-bold text-lg text-slate-800">
                            Unit Quiz Sandbox
                          </h3>
                          <p className="text-xs text-slate-500 font-light">
                            Uji pemahaman Anda terhadap kosakata, percakapan, dan tata bahasa dari materi unit ini.
                          </p>
                        </div>
                        
                        <QuizSection 
                          questions={activeUnit.quiz} 
                          colorTheme={activeLevelData.colorTheme}
                          inspectorActive={inspectorActive}
                          onUnitCompleted={() => {
                            if (!completedUnits.includes(activeUnit.id)) {
                              handleToggleComplete(activeUnit.id);
                            }
                          }}
                        />
                      </div>

                    </div>
                  ) : (
                    <div className="text-center py-20 bg-white border border-slate-100 rounded-3xl">
                      <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                      <p className="text-sm text-slate-400">Silakan pilih unit pembelajaran di sidebar kiri.</p>
                    </div>
                  )}

                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 2: DESIGN SYSTEM DOCUMENTATION & PLAYGROUND */}
          {activeTab === 'design-system' && (
            <motion.div
              key="design-system-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <DesignSystemViewer />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <footer className="bg-white border-t border-slate-100 py-6 mt-16 text-center text-xs text-slate-400 font-sans">
        <div className="max-w-7xl mx-auto px-4 space-y-1.5">
          <p>© 2026 Akademika English Portal. Didesain secara khusus mengutamakan keterbacaan, navigasi intuitif, dan visual akademis.</p>
          <div className="flex justify-center gap-4 text-[11px] font-mono">
            <span>Fonts: Outfit & Inter</span>
            <span>•</span>
            <span>Framework: React 19 + Tailwind v4</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
