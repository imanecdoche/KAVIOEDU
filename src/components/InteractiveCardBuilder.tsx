import React, { useState } from 'react';
import { Volume2, Sparkles, User, MapPin, Calendar, Heart, Award, Home, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function InteractiveCardBuilder() {
  const [formData, setFormData] = useState({
    name: 'Rani',
    from: 'Jakarta',
    age: '8',
    hobby: 'drawing',
    like: 'ice cream',
    pet: 'cat',
    place: 'home',
    dream: 'doctor'
  });

  const [cardColor, setCardColor] = useState('bg-gradient-to-br from-emerald-400 to-teal-500');
  const [activeSpeech, setActiveSpeech] = useState(false);

  const englishIntro = `Hello! My name is ${formData.name || '___'}. I am from ${formData.from || '___'}. I am ${formData.age || '___'} years old. My hobby is ${formData.hobby || '___'}. I like ${formData.like || '___'}. I have a ${formData.pet || '___'} at ${formData.place || '___'}. My dream is being a ${formData.dream || '___'}. Nice to meet you!`;

  const indonesianIntro = `Halo! Nama saya adalah ${formData.name || '___'}. Saya berasal dari ${formData.from || '___'}. Umur saya ${formData.age || '___'} tahun. Hobi saya adalah ${formData.hobby || '___'}. Saya suka ${formData.like || '___'}. Saya memiliki ${formData.pet || '___'} di ${formData.place || '___'}. Cita-cita saya adalah menjadi seorang ${formData.dream || '___'}. Senang bertemu denganmu!`;

  const speakText = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(englishIntro);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // slightly slower for elementary students
    
    utterance.onstart = () => setActiveSpeech(true);
    utterance.onend = () => setActiveSpeech(false);
    utterance.onerror = () => setActiveSpeech(false);

    window.speechSynthesis.speak(utterance);
  };

  const colors = [
    { name: 'Emerald', class: 'bg-gradient-to-br from-emerald-400 to-teal-500' },
    { name: 'Indigo', class: 'bg-gradient-to-br from-indigo-400 to-violet-500' },
    { name: 'Amber', class: 'bg-gradient-to-br from-amber-400 to-orange-500' },
    { name: 'Rose', class: 'bg-gradient-to-br from-rose-400 to-pink-500' },
    { name: 'Sky', class: 'bg-gradient-to-br from-sky-400 to-blue-500' }
  ];

  const getDreamEmoji = (dream: string) => {
    const d = dream.toLowerCase();
    if (d.includes('doctor')) return '🩺';
    if (d.includes('teacher')) return '👩‍🏫';
    if (d.includes('pilot')) return '✈️';
    if (d.includes('police')) return '👮';
    if (d.includes('firefighter')) return '👨‍🚒';
    if (d.includes('chef')) return '👨‍🍳';
    if (d.includes('artist') || d.includes('draw')) return '🎨';
    if (d.includes('football') || d.includes('player')) return '⚽';
    if (d.includes('singer')) return '🎤';
    return '🌟';
  };

  return (
    <div id="interactive-card-builder" className="space-y-8 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm">
      <div className="border-b border-slate-100 pb-4">
        <h2 className="font-display font-semibold text-lg md:text-xl lg:text-2xl text-slate-800 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-500" />
          6. INTERACTIVE PLAYGROUND & MINI PROJECT
        </h2>
        <p className="text-xs md:text-sm text-slate-500 mt-1 leading-relaxed font-light">
          Ayo isi formulir di bawah ini dengan data dirimu sendiri, dengarkan cara mengucapkannya, dan lihat kartu perkenalan keren yang terbentuk!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form area: 5 cols */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="font-display font-bold text-sm text-slate-700 uppercase tracking-wider mb-2">
            Isi Data Dirimu (In Indonesian/English)
          </h3>
          
          <div className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Nama Kamu (Name)</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Contoh: Rani"
                  className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Asal Kota (From)</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.from}
                  onChange={(e) => setFormData({ ...formData, from: e.target.value })}
                  placeholder="Contoh: Jakarta"
                  className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Umur (Age)</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="Contoh: 8"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Hobi (Hobby)</label>
                <input
                  type="text"
                  value={formData.hobby}
                  onChange={(e) => setFormData({ ...formData, hobby: e.target.value })}
                  placeholder="Contoh: drawing"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Hal yang Disukai (Like)</label>
              <div className="relative">
                <Heart className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.like}
                  onChange={(e) => setFormData({ ...formData, like: e.target.value })}
                  placeholder="Contoh: ice cream"
                  className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Benda/Hewan (Pet/Thing)</label>
                <input
                  type="text"
                  value={formData.pet}
                  onChange={(e) => setFormData({ ...formData, pet: e.target.value })}
                  placeholder="Contoh: cat"
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Di Mana? (Place)</label>
                <div className="relative">
                  <Home className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={formData.place}
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                    placeholder="Contoh: home"
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1">Cita-Cita (Dream)</label>
              <div className="relative">
                <Award className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={formData.dream}
                  onChange={(e) => setFormData({ ...formData, dream: e.target.value })}
                  placeholder="Contoh: doctor"
                  className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Passport / Generated Card area: 7 cols */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-display font-bold text-sm text-slate-700 uppercase tracking-wider">
                10. MY INTRODUCTION CARD
              </h3>
              
              {/* Color selectors */}
              <div className="flex gap-1.5">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setCardColor(c.class)}
                    className={`h-5 w-5 rounded-full border-2 ${c.class} ${
                      cardColor === c.class ? 'border-slate-800 scale-110 shadow-sm' : 'border-white hover:scale-105'
                    } transition-all`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            {/* Student ID Card visualization */}
            <motion.div 
              layout
              className={`${cardColor} rounded-3xl p-6 text-white shadow-lg relative overflow-hidden h-72 flex flex-col justify-between`}
            >
              {/* Card design accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-8 -mb-8 blur-lg pointer-events-none" />
              
              {/* Card Header */}
              <div className="flex justify-between items-start border-b border-white/20 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest bg-white/20 px-2 py-0.5 rounded-full font-bold">
                    English Learner Passport
                  </span>
                  <h4 className="font-display font-extrabold text-base tracking-tight text-white/95">
                    ALL ABOUT ME
                  </h4>
                </div>
                <div className="text-2xl" role="img" aria-label="avatar">
                  {getDreamEmoji(formData.dream)}
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-12 gap-4 my-4 flex-grow items-center">
                <div className="col-span-4 flex flex-col items-center justify-center border-r border-white/10 pr-2">
                  <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-inner">
                    👦
                  </div>
                  <span className="text-[10px] font-mono mt-1 bg-black/20 px-1.5 py-0.5 rounded text-white/80">
                    ID: {formData.name.toUpperCase().slice(0, 3)}-{formData.age}
                  </span>
                </div>

                <div className="col-span-8 space-y-1.5 text-xs">
                  <div className="grid grid-cols-3">
                    <span className="opacity-80 font-medium">Name:</span>
                    <span className="col-span-2 font-bold tracking-wide text-white">{formData.name || '___'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="opacity-80 font-medium">From:</span>
                    <span className="col-span-2 font-semibold text-white/95">{formData.from || '___'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="opacity-80 font-medium">Age:</span>
                    <span className="col-span-2 font-semibold text-white/95">{formData.age || '___'} years old</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="opacity-80 font-medium">Hobby:</span>
                    <span className="col-span-2 font-semibold text-white/95">{formData.hobby || '___'}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="opacity-80 font-medium">Dream:</span>
                    <span className="col-span-2 font-bold text-amber-200 flex items-center gap-1">
                      {formData.dream || '___'} {getDreamEmoji(formData.dream)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-between items-center pt-2 border-t border-white/15 text-[10px] font-mono text-white/80">
                <span>STARS AWARDED: ⭐⭐⭐⭐⭐</span>
                <span className="bg-white text-slate-800 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                  SD LEVEL 1
                </span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Speech Trigger */}
          <div className="space-y-3 bg-slate-50 border border-slate-100 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display font-bold text-xs text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Volume2 className="h-4 w-4 text-emerald-600" />
                9. LATIHAN BERBICARA & AUDIO
              </h4>
              <button
                onClick={speakText}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeSpeech
                    ? 'bg-emerald-600 text-white shadow-md animate-pulse'
                    : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200'
                }`}
              >
                <Volume2 className="h-3.5 w-3.5" />
                {activeSpeech ? 'Memutar...' : 'Dengarkan Suara'}
              </button>
            </div>

            <div className="space-y-2 text-xs md:text-sm bg-white border border-slate-100 rounded-xl p-3 shadow-inner">
              <p className="font-sans font-semibold text-slate-800 leading-relaxed">
                {englishIntro}
              </p>
              <div className="border-t border-slate-100 my-1.5 pt-1.5" />
              <p className="font-sans text-slate-500 italic">
                Artinya: {indonesianIntro}
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-lg p-2.5 text-[11px] text-amber-800 flex items-start gap-1.5 leading-relaxed font-light">
              <span className="text-sm">🗣️</span>
              <div>
                <strong>Tips saat berbicara:</strong> Baca pelan-pelan. Tidak apa-apa belum lancar. Ulangi 2 sampai 3 kali dan mintalah bantuan tutor untuk mendampingimu!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
