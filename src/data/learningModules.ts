/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LevelConfig } from '../types';

export const LEARNING_LEVELS: LevelConfig[] = [
  {
    key: 'SD',
    name: 'Sekolah Dasar (SD)',
    badge: 'Elementary',
    colorTheme: {
      primary: 'bg-emerald-600',
      secondary: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accent: 'emerald',
      bg: 'emerald',
      hover: 'hover:bg-emerald-700',
      text: 'text-emerald-800'
    },
    audience: 'Cocok untuk anak-anak usia 7-12 tahun. Fokus pada pengenalan kata dasar, visualisasi, dan pelafalan sederhana.',
    units: [
      {
        id: 'sd-u1',
        number: 1,
        title: 'Numbers & Colors (Angka & Warna)',
        description: 'Mempelajari angka 1-10 dan warna-warna dasar di sekitar kita secara interaktif.',
        focus: 'Kosakata Dasar & Visualisasi',
        sections: [
          {
            id: 'sd-u1-s1',
            type: 'intro',
            title: 'Welcome to English Level SD!',
            introText: 'Halo Adik-adik! Selamat datang di modul pertama. Di sini kita akan belajar cara menyebutkan angka dan warna dalam Bahasa Inggris. Belajar bahasa Inggris itu sangat menyenangkan lho! Yuk kita mulai dengan mengenal angka dan warna!'
          },
          {
            id: 'sd-u1-s2',
            type: 'vocabulary',
            title: 'Vocabulary: Numbers (Angka)',
            vocabulary: [
              {
                id: 'sd-v1',
                word: 'One',
                partOfSpeech: 'noun / numeral',
                pronunciation: '/wʌn/',
                meaning: 'Satu',
                example: 'I have one red apple.',
                exampleTranslation: 'Saya punya satu apel merah.'
              },
              {
                id: 'sd-v2',
                word: 'Three',
                partOfSpeech: 'noun / numeral',
                pronunciation: '/θriː/',
                meaning: 'Tiga',
                example: 'There are three birds in the sky.',
                exampleTranslation: 'Ada tiga burung di langit.'
              },
              {
                id: 'sd-v3',
                word: 'Yellow',
                partOfSpeech: 'adjective',
                pronunciation: '/ˈjel.əʊ/',
                meaning: 'Kuning',
                example: 'The sun is big and yellow.',
                exampleTranslation: 'Matahari itu besar dan berwarna kuning.'
              },
              {
                id: 'sd-v4',
                word: 'Blue',
                partOfSpeech: 'adjective',
                pronunciation: '/bluː/',
                meaning: 'Biru',
                example: 'My school uniform is blue.',
                exampleTranslation: 'Seragam sekolahku berwarna biru.'
              }
            ]
          },
          {
            id: 'sd-u1-s3',
            type: 'grammar',
            title: 'Simple Rule: Adjective + Noun',
            grammarExplanation: {
              pattern: 'Color (Warna) + Object (Benda)',
              description: 'Dalam Bahasa Inggris, warna diletakkan SEBELUM nama benda. Ini berbeda dengan Bahasa Indonesia yang meletakkan warna di belakang benda.',
              examples: [
                { form: 'Red apple', translation: 'Apel merah (Bukan "Apple red")' },
                { form: 'Blue book', translation: 'Buku biru (Bukan "Book blue")' },
                { form: 'Yellow banana', translation: 'Pisang kuning' }
              ],
              notes: 'Ingat! Selalu letakkan warnanya dulu baru bendanya ya!'
            }
          },
          {
            id: 'sd-u1-s4',
            type: 'dialogue',
            title: 'Simple Conversation: My Toy Box',
            dialogue: [
              {
                speaker: 'Budi',
                text: 'Look! I have a new toy car.',
                translation: 'Lihat! Aku punya mobil mainan baru.',
                role: 'A'
              },
              {
                speaker: 'Siti',
                text: 'Wow, it is cool! What color is it?',
                translation: 'Wow, keren sekali! Apa warnanya?',
                role: 'B'
              },
              {
                speaker: 'Budi',
                text: 'It is green. I also have three blue marbles.',
                translation: 'Warnanya hijau. Aku juga punya tiga kelereng biru.',
                role: 'A'
              },
              {
                speaker: 'Siti',
                text: 'Beautiful! I love the color green.',
                translation: 'Indah! Aku suka warna hijau.',
                role: 'B'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 'sd-u1-q1',
            question: 'Bahasa Inggris dari "Buku Biru" adalah...',
            options: ['Book blue', 'Blue book', 'Blue books', 'A blue'],
            correctAnswer: 1,
            explanation: 'Sesuai aturan Adjective + Noun, kata sifat (warna "Blue") diletakkan sebelum kata benda ("book"). Maka yang benar adalah "Blue book".'
          },
          {
            id: 'sd-u1-q2',
            question: 'Siti berkata: "I have three marbles". Berapa kelereng yang dimiliki Siti?',
            options: ['1 kelereng', '2 kelereng', '3 kelereng', '4 kelereng'],
            correctAnswer: 2,
            explanation: '"Three" artinya tiga (3).'
          }
        ]
      },
      {
        id: 'sd-u2',
        number: 2,
        title: 'My Family & Greetings (Keluargaku & Salam)',
        description: 'Mengenal nama-nama anggota keluarga inti dan ungkapan salam sehari-hari.',
        focus: 'Keluarga & Percakapan Dasar',
        sections: [
          {
            id: 'sd-u2-s1',
            type: 'intro',
            title: 'My Sweet Family',
            introText: 'Keluarga adalah orang-orang terdekat kita. Hari ini kita belajar bagaimana memanggil ayah, ibu, kakak, dan adik dalam Bahasa Inggris, serta menyapa mereka di pagi hari!'
          },
          {
            id: 'sd-u2-s2',
            type: 'vocabulary',
            title: 'Vocabulary: Family Members & Greetings',
            vocabulary: [
              {
                id: 'sd-v2-1',
                word: 'Father',
                partOfSpeech: 'noun',
                pronunciation: '/ˈfɑː.ðər/',
                meaning: 'Ayah',
                example: 'My father is tall and kind.',
                exampleTranslation: 'Ayahku tinggi dan baik hati.'
              },
              {
                id: 'sd-v2-2',
                word: 'Mother',
                partOfSpeech: 'noun',
                pronunciation: '/ˈmʌð.ər/',
                meaning: 'Ibu',
                example: 'I love my mother so much.',
                exampleTranslation: 'Aku sangat menyayangi ibuku.'
              },
              {
                id: 'sd-v2-3',
                word: 'Good Morning',
                partOfSpeech: 'phrase',
                pronunciation: '/ɡʊd ˈmɔː.nɪŋ/',
                meaning: 'Selamat Pagi',
                example: 'Good morning, Father!',
                exampleTranslation: 'Selamat pagi, Ayah!'
              }
            ]
          },
          {
            id: 'sd-u2-s3',
            type: 'dialogue',
            title: 'Simple Dialogue: Morning Greetings',
            dialogue: [
              {
                speaker: 'Anisa',
                text: 'Good morning, Mother. Can I help you cook?',
                translation: 'Selamat pagi, Ibu. Bolehkah aku membantumu memasak?',
                role: 'A'
              },
              {
                speaker: 'Ibu',
                text: 'Good morning, dear. Yes, please wash these tomatoes.',
                translation: 'Selamat pagi, sayang. Ya, tolong cuci tomat-tomat ini.',
                role: 'B'
              },
              {
                speaker: 'Anisa',
                text: 'Okay, Mother! Where is Father?',
                translation: 'Baik, Ibu! Di mana Ayah?',
                role: 'A'
              },
              {
                speaker: 'Ibu',
                text: 'Your father is reading a book in the living room.',
                translation: 'Ayahmu sedang membaca buku di ruang tamu.',
                role: 'B'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 'sd-u2-q1',
            question: 'Apa arti dari salam "Good morning"?',
            options: ['Selamat siang', 'Selamat malam', 'Selamat sore', 'Selamat pagi'],
            correctAnswer: 3,
            explanation: '"Good morning" digunakan untuk memberi salam pada pagi hari hingga sebelum jam 12 siang.'
          }
        ]
      }
    ]
  },
  {
    key: 'SMP',
    name: 'Sekolah Menengah Pertama (SMP)',
    badge: 'Intermediate I',
    colorTheme: {
      primary: 'bg-indigo-600',
      secondary: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      accent: 'indigo',
      bg: 'indigo',
      hover: 'hover:bg-indigo-700',
      text: 'text-indigo-800'
    },
    audience: 'Cocok untuk remaja usia 12-15 tahun. Fokus pada tata bahasa dasar (Tenses), menceritakan aktivitas, dan menyusun kalimat sederhana.',
    units: [
      {
        id: 'smp-u1',
        number: 1,
        title: 'Introducing Yourself & Others',
        description: 'Belajar bagaimana memperkenalkan diri dan orang lain dengan sopan dan benar menggunakan Present Tense.',
        focus: 'Identitas & Perkenalan Diri',
        sections: [
          {
            id: 'smp-u1-s1',
            type: 'intro',
            title: 'The Art of First Impressions',
            introText: 'Memperkenalkan diri adalah langkah awal dalam berteman. Di tingkat SMP, kita tidak hanya menyebutkan nama, melainkan juga hobi, asal sekolah, dan usia dengan struktur kalimat (Subject + Verb) yang benar.'
          },
          {
            id: 'smp-u1-s2',
            type: 'vocabulary',
            title: 'Key Vocabulary: Introductions',
            vocabulary: [
              {
                id: 'smp-v1',
                word: 'Introduce',
                partOfSpeech: 'verb',
                pronunciation: '/ˌɪn.trəˈdjuːs/',
                meaning: 'Memperkenalkan',
                example: 'Let me introduce myself.',
                exampleTranslation: 'Izinkan saya memperkenalkan diri saya.'
              },
              {
                id: 'smp-v2',
                word: 'Hobby',
                partOfSpeech: 'noun',
                pronunciation: '/ˈhɒb.i/',
                meaning: 'Kegemaran / Hobi',
                example: 'My hobby is playing basketball.',
                exampleTranslation: 'Hobi saya adalah bermain bola basket.'
              },
              {
                id: 'smp-v3',
                word: 'Pleased',
                partOfSpeech: 'adjective',
                pronunciation: '/pliːzd/',
                meaning: 'Senang',
                example: 'I am pleased to meet you all.',
                exampleTranslation: 'Saya senang bertemu dengan kalian semua.'
              }
            ]
          },
          {
            id: 'smp-u1-s3',
            type: 'grammar',
            title: 'Grammar Focus: Simple Present Tense (To Be & Verb)',
            grammarExplanation: {
              pattern: 'Subject + Be (am/is/are) + Complement  ATAU  Subject + Verb 1 (-s/-es) + Object',
              description: 'Digunakan untuk menyatakan fakta umum atau hobi/kebiasaan saat ini.',
              examples: [
                { form: 'I am a student at SMP 1.', translation: 'Saya adalah seorang murid di SMP 1. (Menggunakan "am")' },
                { form: 'He likes reading English novels.', translation: 'Dia suka membaca novel bahasa Inggris. (Menggunakan tambahan "-s" pada "likes" karena subjek "He")' },
                { form: 'They live in Jakarta.', translation: 'Mereka tinggal di Jakarta.' }
              ],
              notes: 'Perhatikan subjek tunggal (He/She/It) memerlukan akhiran -s atau -es pada kata kerjanya!'
            }
          },
          {
            id: 'smp-u1-s4',
            type: 'expressions',
            title: 'Common Expressions for Introduction',
            expressions: [
              {
                phrase: 'How do you do?',
                usage: 'Sapaan formal yang diucapkan ketika pertama kali bertemu seseorang.',
                translation: 'Apa kabar? (Dijawab kembali dengan "How do you do?")'
              },
              {
                phrase: 'I’m originally from... but now I live in...',
                usage: 'Menjelaskan asal daerah dan tempat tinggal saat ini.',
                translation: 'Saya aslinya berasal dari... tapi sekarang tinggal di...'
              },
              {
                phrase: 'Nice to meet you.',
                usage: 'Ungkapan ramah di akhir perkenalan.',
                translation: 'Senang bertemu denganmu.'
              }
            ]
          },
          {
            id: 'smp-u1-s5',
            type: 'dialogue',
            title: 'Dialogue: The New Student',
            dialogue: [
              {
                speaker: 'Raka',
                text: 'Hello, my name is Raka. I am a new student in class 7B.',
                translation: 'Halo, nama saya Raka. Saya siswa baru di kelas 7B.',
                role: 'A'
              },
              {
                speaker: 'Dina',
                text: 'Hi Raka! I am Dina. Nice to meet you. Where are you from?',
                translation: 'Hai Raka! Saya Dina. Senang bertemu denganmu. Kamu berasal dari mana?',
                role: 'B'
              },
              {
                speaker: 'Raka',
                text: 'I am originally from Bandung, but my family moved here last week.',
                translation: 'Saya aslinya dari Bandung, tapi keluarga saya pindah ke sini minggu lalu.',
                role: 'A'
              },
              {
                speaker: 'Dina',
                text: 'Ah, I see. Welcome to our school! Let’s go to the class together.',
                translation: 'Ah, begitu. Selamat datang di sekolah kami! Mari kita ke kelas bersama.',
                role: 'B'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 'smp-u1-q1',
            question: 'Selesaikan kalimat ini: "She ___ playing video games in her free time."',
            options: ['like', 'likes', 'liking', 'is like'],
            correctAnswer: 1,
            explanation: 'Karena subjeknya adalah orang ketiga tunggal ("She"), maka kata kerja "like" mendapat tambahan "-s" menjadi "likes".'
          },
          {
            id: 'smp-u1-q2',
            question: 'Jika seseorang menyapa Anda dengan "How do you do?", respon terbaik Anda adalah:',
            options: ['I am fine, thank you.', 'Good morning.', 'How do you do?', 'Nice to meet you too.'],
            correctAnswer: 2,
            explanation: '"How do you do?" adalah sapaan formal khusus pertemuan pertama yang dijawab kembali persis dengan frasa "How do you do?".'
          }
        ]
      },
      {
        id: 'smp-u2',
        number: 2,
        title: 'Daily Activities & Routines',
        description: 'Menceritakan kegiatan sehari-hari dari bangun tidur sampai tidur kembali.',
        focus: 'Rutinitas & Keterangan Waktu',
        sections: [
          {
            id: 'smp-u2-s1',
            type: 'intro',
            title: 'Talking About Your Day',
            introText: 'Kunci menceritakan keseharian adalah menggunakan adverb of frequency (always, usually, sometimes, never) dan menyusun urutan waktu (then, after that, before).'
          },
          {
            id: 'smp-u2-s2',
            type: 'vocabulary',
            title: 'Vocabulary: Routine Verbs',
            vocabulary: [
              {
                id: 'smp-v2-1',
                word: 'Wake up',
                partOfSpeech: 'phrasal verb',
                pronunciation: '/weɪk ʌp/',
                meaning: 'Terbangun (membuka mata)',
                example: 'I usually wake up at 5:00 AM.',
                exampleTranslation: 'Saya biasanya bangun pukul 5 pagi.'
              },
              {
                id: 'smp-v2-2',
                word: 'Take a shower',
                partOfSpeech: 'phrase',
                pronunciation: '/teɪk ə ʃaʊ.ər/',
                meaning: 'Mandi',
                example: 'He takes a shower before breakfast.',
                exampleTranslation: 'Dia mandi sebelum sarapan.'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 'smp-u2-q1',
            question: 'Apa arti kata "usually" dalam kalimat rutinitas?',
            options: ['Seringkali', 'Biasanya', 'Kadang-kadang', 'Tidak pernah'],
            correctAnswer: 1,
            explanation: '"Usually" berarti "biasanya", yang menunjukkan tingkat kebiasaan sekitar 80%.'
          }
        ]
      }
    ]
  },
  {
    key: 'SMA',
    name: 'Sekolah Menengah Atas (SMA)',
    badge: 'Intermediate II',
    colorTheme: {
      primary: 'bg-amber-600',
      secondary: 'bg-amber-50 text-amber-700 border-amber-200',
      accent: 'amber',
      bg: 'amber',
      hover: 'hover:bg-amber-700',
      text: 'text-amber-800'
    },
    audience: 'Cocok untuk remaja usia 15-18 tahun. Fokus pada teks analitis, perdebatan opini, Conditional Sentences, serta percakapan yang lebih diplomatis.',
    units: [
      {
        id: 'sma-u1',
        number: 1,
        title: 'Expressing Opinions & Debating',
        description: 'Pelajari struktur berargumen formal dalam Bahasa Inggris. Cara menyatakan setuju, tidak setuju, dan memperkuat argumen dengan bukti.',
        focus: 'Debat & Ekspresi Opini',
        sections: [
          {
            id: 'sma-u1-s1',
            type: 'intro',
            title: 'The Power of Persuasion',
            introText: 'Di bangku SMA, murid didorong untuk kritis. Kita akan belajar cara memberikan opini secara profesional, menanggapi sanggahan teman, serta membingkai sudut pandang secara persuasif menggunakan kalimat pasif maupun aktif.'
          },
          {
            id: 'sma-u1-s2',
            type: 'vocabulary',
            title: 'Vocabulary for Debates',
            vocabulary: [
              {
                id: 'sma-v1',
                word: 'Perspective',
                partOfSpeech: 'noun',
                pronunciation: '/pəˈspek.tɪv/',
                meaning: 'Sudut pandang / Perspektif',
                example: 'From my perspective, social media has more pros than cons.',
                exampleTranslation: 'Dari sudut pandang saya, media sosial memiliki lebih banyak dampak positif dibanding negatif.'
              },
              {
                id: 'sma-v2',
                word: 'Controversial',
                partOfSpeech: 'adjective',
                pronunciation: '/ˌkɒn.trəˈvɜː.ʃəl/',
                meaning: 'Kontroversial / Menimbulkan Perdebatan',
                example: 'AI in art is a controversial topic.',
                exampleTranslation: 'Kecerdasan buatan dalam seni adalah topik yang kontroversial.'
              },
              {
                id: 'sma-v3',
                word: 'Advocate',
                partOfSpeech: 'verb / noun',
                pronunciation: '/ˈæd.və.keɪt/',
                meaning: 'Mendukung / Membela',
                example: 'Many organizations advocate for environmental preservation.',
                exampleTranslation: 'Banyak organisasi mendukung pelestarian lingkungan.'
              }
            ]
          },
          {
            id: 'sma-u1-s3',
            type: 'grammar',
            title: 'Grammar: Modal Auxiliaries for Softening Arguments',
            grammarExplanation: {
              pattern: 'Subject + Modal (should / could / might / would) + Verb 1',
              description: 'Untuk membuat argumen kita tidak terdengar terlalu mendikte atau kasar, gunakan modal auxiliary untuk memperhalus klaim kita.',
              examples: [
                { form: 'We should consider alternative sources.', translation: 'Kita sebaiknya mempertimbangkan sumber alternatif. (Lebih sopan daripada "We must use...")' },
                { form: 'One could argue that technology isolates us.', translation: 'Seseorang bisa berargumen bahwa teknologi mengisolasi kita.' }
              ],
              notes: 'Gunakan modal untuk memberi ruang diskusi yang sehat.'
            }
          },
          {
            id: 'sma-u1-s4',
            type: 'expressions',
            title: 'Expressions: Agreeing and Disagreeing Politely',
            expressions: [
              {
                phrase: 'I see your point, but...',
                usage: 'Digunakan untuk menunjukkan bahwa Anda mengerti pendapat lawan bicara, tetapi ingin menambahkan sanggahan.',
                translation: 'Saya mengerti poinmu, tetapi...'
              },
              {
                phrase: 'I beg to differ.',
                usage: 'Cara formal dan sopan untuk menyatakan tidak setuju.',
                translation: 'Saya kurang sependapat.'
              },
              {
                phrase: 'I couldn’t agree more.',
                usage: 'Digunakan untuk menyatakan persetujuan 100% yang mutlak.',
                translation: 'Saya sangat setuju sekali!'
              }
            ]
          },
          {
            id: 'sma-u1-s5',
            type: 'dialogue',
            title: 'Dialogue: Mobile Phones in School',
            dialogue: [
              {
                speaker: 'Kevin',
                text: 'In my opinion, students should be allowed to use mobile phones in class for quick research.',
                translation: 'Menurut pendapat saya, siswa sebaiknya diizinkan menggunakan ponsel di kelas untuk riset cepat.',
                role: 'A'
              },
              {
                speaker: 'Nadia',
                text: 'I see your point, but it could cause too much distraction during explanations.',
                translation: 'Saya mengerti poinmu, tetapi itu bisa menyebabkan terlalu banyak distraksi selama penjelasan guru.',
                role: 'B'
              },
              {
                speaker: 'Kevin',
                text: 'That’s a fair point, but teachers can set strict guidelines to monitor their usage.',
                translation: 'Itu poin yang bagus, tapi guru bisa menetapkan panduan yang ketat untuk mengawasi penggunaannya.',
                role: 'A'
              },
              {
                speaker: 'Nadia',
                text: 'I agree that clear boundaries would help, but executing it might be difficult in large classes.',
                translation: 'Saya setuju batas yang jelas akan membantu, tapi menjalankannya mungkin sulit di kelas yang besar.',
                role: 'B'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 'sma-u1-q1',
            question: 'Manakah ungkapan yang menunjukkan rasa ketidaksetujuan secara sopan?',
            options: ['You are totally wrong!', 'I couldn’t agree more.', 'I see your point, but I have a different view.', 'Shut up, your argument is weak.'],
            correctAnswer: 2,
            explanation: '"I see your point, but..." adalah strategi diplomatis untuk mengakui masukan lawan bicara sebelum mengutarakan oposisi kita.'
          },
          {
            id: 'sma-u1-q2',
            question: 'Apa arti dari frasa "I beg to differ"?',
            options: ['Saya meminta pendapatmu', 'Saya ingin menambahkan sesuatu', 'Saya sangat setuju', 'Saya kurang sependapat'],
            correctAnswer: 3,
            explanation: '"I beg to differ" adalah idiom formal untuk menyatakan "Saya tidak setuju / Saya kurang sependapat".'
          }
        ]
      },
      {
        id: 'sma-u2',
        number: 2,
        title: 'Narrative Texts: Legends & Myths',
        description: 'Menganalisis struktur teks naratif (Orientation, Complication, Resolution, Re-orientation) menggunakan Past Tense.',
        focus: 'Analisis Sastra & Penulisan Kreatif',
        sections: [
          {
            id: 'sma-u2-s1',
            type: 'intro',
            title: 'Storytelling in English',
            introText: 'Melalui teks naratif, kita belajar menyampaikan cerita imajinatif dengan kronologi yang runtut dan menarik.'
          }
        ],
        quiz: [
          {
            id: 'sma-u2-q1',
            question: 'Bagian teks naratif yang berisi pemecahan masalah atau akhir konflik disebut...',
            options: ['Orientation', 'Complication', 'Resolution', 'Re-orientation'],
            correctAnswer: 2,
            explanation: '"Resolution" adalah tahap di mana masalah atau ketegangan (Complication) diselesaikan.'
          }
        ]
      }
    ]
  },
  {
    key: 'UMUM',
    name: 'Masyarakat Umum / Professional (UMUM)',
    badge: 'Advanced / ESP',
    colorTheme: {
      primary: 'bg-rose-600',
      secondary: 'bg-rose-50 text-rose-700 border-rose-200',
      accent: 'rose',
      bg: 'rose',
      hover: 'hover:bg-rose-700',
      text: 'text-rose-800'
    },
    audience: 'Cocok untuk mahasiswa, pekerja, dan pembelajar dewasa. Fokus pada English for Specific Purposes (ESP), percakapan profesional, wawancara kerja, dan penulisan bisnis.',
    units: [
      {
        id: 'umum-u1',
        number: 1,
        title: 'Writing a Professional CV & Resume',
        description: 'Panduan menyusun CV berbahasa Inggris yang menarik bagi HRD internasional. Penggunaan action verbs dan metrik pencapaian.',
        focus: 'Korespondensi Karir & Profesionalisme',
        sections: [
          {
            id: 'umum-u1-s1',
            type: 'intro',
            title: 'How to Stand Out in the Job Market',
            introText: 'Menulis resume dalam bahasa Inggris membutuhkan pilihan kata yang kuat. Hindari kata-kata pasif atau membosankan. Kita akan mempelajari bagaimana menyusun kalimat menggunakan "Action Verbs" untuk memberi dampak besar pada pencapaian karir Anda.'
          },
          {
            id: 'umum-u1-s2',
            type: 'vocabulary',
            title: 'Resume Action Verbs',
            vocabulary: [
              {
                id: 'umum-v1',
                word: 'Spearhead',
                partOfSpeech: 'verb (past: spearheaded)',
                pronunciation: '/ˈspɪə.hed/',
                meaning: 'Memelopori / Memimpin inisiatif utama',
                example: 'Spearheaded a cross-functional team of 5 to launch the new web app.',
                exampleTranslation: 'Memimpin tim lintas divisi beranggotakan 5 orang untuk meluncurkan aplikasi web baru.'
              },
              {
                id: 'umum-v2',
                word: 'Optimize',
                partOfSpeech: 'verb (past: optimized)',
                pronunciation: '/ˈɒp.tɪ.maɪz/',
                meaning: 'Mengoptimalkan / Memaksimalkan efisiensi',
                example: 'Optimized server response time, reducing latency by 40%.',
                exampleTranslation: 'Mengoptimalkan waktu respons server, mengurangi latensi sebesar 40%.'
              },
              {
                id: 'umum-v3',
                word: 'Collaborate',
                partOfSpeech: 'verb (past: collaborated)',
                pronunciation: '/kəˈlæb.ə.reɪt/',
                meaning: 'Berkolaborasi / Bekerjasama',
                example: 'Collaborated with international clients to design strategic roadmaps.',
                exampleTranslation: 'Berkolaborasi dengan klien internasional untuk merancang peta jalan strategis.'
              }
            ]
          },
          {
            id: 'umum-u1-s3',
            type: 'grammar',
            title: 'Formatting CV Bullet Points: The XYZ Formula',
            grammarExplanation: {
              pattern: 'Accomplished [X] as measured by [Y], by doing [Z]',
              description: 'Formula dari Google ini membantu membuat poin-poin pencapaian Anda terukur dan kuat secara linguistik.',
              examples: [
                { form: 'Increased organic traffic (X) by 25% (Y) by rewriting SEO metadata (Z).', translation: 'Meningkatkan lalu lintas organik sebesar 25% melalui penulisan ulang metadata SEO.' },
                { form: 'Reduced billing errors (X) by 15% (Y) by implementing automated validation scripts (Z).', translation: 'Mengurangi kesalahan penagihan sebesar 15% dengan menerapkan skrip validasi otomatis.' }
              ],
              notes: 'Selalu gunakan Past Tense (V2) untuk pencapaian kerja di masa lampau!'
            }
          },
          {
            id: 'umum-u1-s4',
            type: 'expressions',
            title: 'Professional Summary Statements',
            expressions: [
              {
                phrase: 'Result-oriented professional with 5+ years of experience in...',
                usage: 'Kalimat pembuka di bagian profil atas resume.',
                translation: 'Profesional yang berorientasi pada hasil dengan 5+ tahun pengalaman dalam...'
              },
              {
                phrase: 'Proven track record of driving operational efficiency and...',
                usage: 'Menunjukkan bukti kesuksesan di pekerjaan sebelumnya.',
                translation: 'Rekam jejak terbukti dalam mendorong efisiensi operasional dan...'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 'umum-u1-q1',
            question: 'Di antara kata kerja berikut, manakah "Action Verb" yang paling kuat untuk menunjukkan kepemimpinan proyek?',
            options: ['Was in charge of...', 'Spearheaded...', 'Helped with...', 'Did...'],
            correctAnswer: 1,
            explanation: '"Spearheaded" adalah action verb yang sangat kuat yang mengekspresikan inisiatif aktif dan kepemimpinan yang tegas dalam meluncurkan proyek.'
          },
          {
            id: 'umum-u1-q2',
            question: 'Mengapa formula XYZ (Accomplished X, measured by Y, by doing Z) direkomendasikan untuk resume?',
            options: ['Agar resume terlihat lebih panjang', 'Agar HRD bingung dengan angka', 'Untuk memberikan bukti nyata dan hasil terukur dari pekerjaan Anda', 'Karena bahasa Inggris selalu menggunakan huruf XYZ'],
            correctAnswer: 2,
            explanation: 'Formula XYZ membuat pencapaian Anda kredibel karena melampirkan angka atau persentase (Y) dan metode tindakan Anda (Z).'
          }
        ]
      },
      {
        id: 'umum-u2',
        number: 2,
        title: 'Mastering Job Interviews',
        description: 'Teknik menjawab pertanyaan sulit dalam wawancara kerja seperti "Tell me about yourself" dan metode STAR.',
        focus: 'Public Speaking & Wawancara Kerja',
        sections: [
          {
            id: 'umum-u2-s1',
            type: 'intro',
            title: 'Nailing Your Dream Job',
            introText: 'Wawancara kerja bahasa Inggris bukan sekadar tes kelancaran berbicara, melainkan kemampuan menyampaikan nilai kompetensi Anda secara sistematis.'
          }
        ],
        quiz: [
          {
            id: 'umum-u2-q1',
            question: 'Metode "STAR" dalam wawancara kerja adalah singkatan dari...',
            options: ['Start, Talk, Act, Repeat', 'Situation, Task, Action, Result', 'Status, Target, Ability, Reward', 'Skills, Talents, Achievements, Roles'],
            correctAnswer: 1,
            explanation: '"STAR" stands for Situation (Situasi), Task (Tugas), Action (Tindakan), and Result (Hasil). Ini adalah framework terbaik menceritakan pengalaman kerja.'
          }
        ]
      }
    ]
  }
];
