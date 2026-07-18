/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DesignSystemToken } from '../types';

export const COLOR_PALETTE = [
  {
    name: 'Primary Charcoal',
    token: 'text-slate-900',
    hex: '#0F172A',
    description: 'Digunakan untuk teks utama, judul, dan elemen prioritas tertinggi yang membutuhkan kontras luar biasa.'
  },
  {
    name: 'Secondary Slate',
    token: 'text-slate-600',
    hex: '#475569',
    description: 'Digunakan untuk teks tubuh (body text) agar nyaman dibaca dalam waktu lama.'
  },
  {
    name: 'Muted Gray',
    token: 'text-slate-400',
    hex: '#94A3B8',
    description: 'Digunakan untuk caption, sub-keterangan, dan elemen dekoratif halus.'
  },
  {
    name: 'SD Emerald',
    token: 'bg-emerald-600',
    hex: '#059669',
    description: 'Aksen ceria dan ramah untuk tingkat SD. Melambangkan pertumbuhan dan energi.'
  },
  {
    name: 'SMP Indigo',
    token: 'bg-indigo-600',
    hex: '#4F46E5',
    description: 'Aksen akademis untuk tingkat SMP. Melambangkan transisi, fokus, dan kepandaian.'
  },
  {
    name: 'SMA Amber',
    token: 'bg-amber-600',
    hex: '#D97706',
    description: 'Aksen dinamis dan eksploratif untuk tingkat SMA. Melambangkan keberanian beropini.'
  },
  {
    name: 'UMUM Rose',
    token: 'bg-rose-600',
    hex: '#E11D48',
    description: 'Aksen profesional dan elegan untuk tingkat UMUM. Melambangkan karir dan kesuksesan.'
  }
];

export const TYPOGRAPHY_HIERARCHY: DesignSystemToken[] = [
  {
    name: 'Title',
    class: 'font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight',
    description: 'Dipakai untuk header utama halaman atau judul besar portal. Menggunakan font "Outfit" dengan penekanan berat ekstrem.',
    exampleText: 'English Learning Portal'
  },
  {
    name: 'h1',
    class: 'font-display font-bold text-xl md:text-2xl lg:text-3xl tracking-tight text-slate-800',
    description: 'Dipakai untuk judul unit pembelajaran atau nama level utama di halaman. Sangat menonjol dan terstruktur.',
    exampleText: 'Unit 1: Numbers & Colors (Angka & Warna)'
  },
  {
    name: 'h2',
    class: 'font-display font-semibold text-lg md:text-xl lg:text-2xl text-slate-800',
    description: 'Dipakai untuk judul sub-bagian modul seperti "Vocabulary List", "Grammar Focus", atau "Quiz Sandbox".',
    exampleText: 'Grammar Focus: Simple Present Tense'
  },
  {
    name: 'h3',
    class: 'font-sans font-semibold text-base md:text-lg text-slate-800',
    description: 'Dipakai untuk judul komponen di dalam kartu (card titles) atau pengelompokan yang lebih spesifik.',
    exampleText: '1. Adjective + Noun Pattern'
  },
  {
    name: 'h4',
    class: 'font-sans font-medium text-xs md:text-sm text-slate-500 uppercase tracking-wider',
    description: 'Dipakai untuk sub-header kecil, pelabelan kategori, atau teks pengantar singkat yang membutuhkan huruf kapital penuh.',
    exampleText: 'SECTION FOCUS: BASIC CONVERSATION'
  },
  {
    name: 'body',
    class: 'font-sans text-sm md:text-base text-slate-600 leading-relaxed font-normal',
    description: 'Format teks paragraf utama. Menggunakan font "Inter" untuk menjamin tingkat keterbacaan (readability) yang optimal di berbagai ukuran layar.',
    exampleText: 'Halo Adik-adik! Di modul pertama ini kita akan bersama-sama mempelajari penyebutan angka dan nama-mana warna dalam Bahasa Inggris dengan menyenangkan.'
  },
  {
    name: 'descr',
    class: 'font-sans text-xs md:text-sm text-slate-500 leading-relaxed font-light',
    description: 'Teks deskripsi ringkas atau kutipan pengantar modul. Ukurannya sedikit lebih kecil dan berbobot ringan untuk mengurangi ketegangan visual.',
    exampleText: 'Mempelajari angka 1-10 dan warna-warna dasar di sekitar kita secara interaktif dengan metode visualisasi.'
  },
  {
    name: 'quote',
    class: 'font-sans italic text-sm md:text-base text-slate-700 bg-slate-50/80 border-l-4 border-slate-300 pl-4 py-2.5 my-3 rounded-r-md block',
    description: 'Dipakai untuk contoh ucapan, kalimat percakapan (dialogue), atau kutipan penting. Diberi aksen batas vertikal di sebelah kiri.',
    exampleText: '"I have one red apple" — Saya memiliki satu buah apel merah.'
  },
  {
    name: 'label',
    class: 'font-mono text-[10px] md:text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block',
    description: 'Digunakan untuk badge indikator, tipe data, part of speech, atau label status. Menggunakan font "JetBrains Mono" dengan spasi renggang.',
    exampleText: 'NOUN / NUMERAL'
  },
  {
    name: 'caption',
    class: 'font-sans text-xs text-slate-400 italic block mt-1.5',
    description: 'Dipakai untuk catatan kaki kecil di bawah tabel, gambar, atau instruksi penggunaan komponen yang bersifat opsional.',
    exampleText: '*Catatan: Selalu posisikan kata sifat warna sebelum nama objeknya.'
  },
  {
    name: 'highlighted text',
    class: 'bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-medium text-xs md:text-sm border border-amber-200 inline',
    description: 'Dipakai untuk menyorot kata kunci penting, istilah bahasa Inggris baru, atau frasa yang sedang dibahas di dalam paragraf.',
    exampleText: 'Action Verbs'
  }
];
