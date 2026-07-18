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
        title: 'All About Me (Semua Tentangku)',
        description: 'Belajar cara memperkenalkan diri dalam bahasa Inggris secara lengkap dari nama, umur, hobi, hingga cita-cita.',
        focus: 'Perkenalan Diri (Introduction)',
        sections: [
          {
            id: 'sd-u1-s1',
            type: 'intro',
            title: 'Welcome to Unit 1: All About Me',
            introText: `Halo, teman-teman! 👋

Di unit ini, kita akan belajar cara **memperkenalkan diri dalam bahasa Inggris**.

Memperkenalkan diri artinya kita memberi tahu orang lain tentang diri kita, seperti:

- nama
- asal
- umur
- hobi
- hal yang kita suka
- benda atau hewan yang kita punya
- cita-cita

Kita akan belajar pelan-pelan. Tidak perlu takut salah. Yang penting kamu mau mencoba! 😊`
          },
          {
            id: 'sd-u1-s2',
            type: 'intro',
            title: 'Tujuan Belajar',
            introText: `Setelah belajar unit ini, kamu diharapkan bisa:

1. Mengucapkan kalimat perkenalan sederhana dalam bahasa Inggris.
2. Menyebutkan nama, umur, asal, hobi, kesukaan, benda/hewan yang dimiliki, dan cita-cita.
3. Memahami arti kalimat perkenalan dalam bahasa Indonesia.
4. Membuat teks perkenalan diri sendiri.
5. Berani berbicara di depan teman atau tutor.`
          },
          {
            id: 'sd-u1-s3',
            type: 'intro',
            title: '1. THE COMPLETE INTRODUCTION',
            introText: `### **Teks Perkenalan Lengkap**

Yuk, baca contoh perkenalan di bawah ini.

Kamu bisa mengganti bagian kosong sesuai dengan data dirimu sendiri.

> **"Hello! My name is [nama kamu]. I am from [asal kamu]. I am [umur kamu] years old. My hobby is [hobi kamu]. I like [hal yang kamu suka]. I have a [benda/hewan] at [tempat]. My dream is being a [cita-cita kamu]. Nice to meet you!"**

### **Arti dalam Bahasa Indonesia**

> **"Halo! Nama saya adalah [nama kamu]. Saya berasal dari [asal kamu]. Umur saya [umur kamu] tahun. Hobi saya adalah [hobi kamu]. Saya suka [hal yang kamu suka]. Saya memiliki [benda/hewan] di [tempat]. Cita-cita saya adalah menjadi seorang [cita-cita kamu]. Senang bertemu denganmu!"**`
          },
          {
            id: 'sd-u1-s4',
            type: 'intro',
            title: '2. CONTOH PERKENALAN',
            introText: `Sekarang, lihat contoh di bawah ini.

### **Contoh 1**

> **"Hello! My name is Rani. I am from Jakarta. I am 8 years old. My hobby is drawing. I like ice cream. I have a cat at home. My dream is being a doctor. Nice to meet you!"**

Artinya:

> Halo! Nama saya Rani. Saya berasal dari Jakarta. Umur saya 8 tahun. Hobi saya menggambar. Saya suka es krim. Saya punya seekor kucing di rumah. Cita-cita saya adalah menjadi dokter. Senang bertemu denganmu!

### **Contoh 2**

> **"Hello! My name is Budi. I am from Bandung. I am 10 years old. My hobby is playing football. I like noodles. I have a bicycle at home. My dream is being a pilot. Nice to meet you!"**

Artinya:

> Halo! Nama saya Budi. Saya berasal dari Bandung. Umur saya 10 tahun. Hobi saya bermain sepak bola. Saya suka mi. Saya punya sepeda di rumah. Cita-cita saya adalah menjadi pilot. Senang bertemu denganmu!`
          },
          {
            id: 'sd-u1-s5',
            type: 'intro',
            title: '3. BREAKING IT DOWN',
            introText: `### **Bedah Kalimat Satu per Satu**

Agar lebih mudah dipahami, kita akan belajar bagian-bagian kalimatnya satu per satu.

---

### **A. Menyebutkan Nama**

## **My name is...**

Kalimat ini digunakan untuk menyebutkan nama.

**My name is...** artinya **Nama saya adalah...**

Contoh:

- **My name is Rani.**
    Artinya: Nama saya Rani.
- **My name is Budi.**
    Artinya: Nama saya Budi.
- **My name is Siti.**
    Artinya: Nama saya Siti.

Cara membaca:

> **My name is** = /mai neim iz/

Latihan:

- My name is [nama kamu].

---

### **B. Menyebutkan Asal**

## **I am from...**

Kalimat ini digunakan untuk menyebutkan asal kota, daerah, atau negara.

**I am from...** artinya **Saya berasal dari...**

Contoh:

- **I am from Jakarta.**
    Artinya: Saya berasal dari Jakarta.
- **I am from Surabaya.**
    Artinya: Saya berasal dari Surabaya.
- **I am from Indonesia.**
    Artinya: Saya berasal dari Indonesia.

Cara membaca:

> **I am from** = /ai em from/

Latihan:

- I am from [asal kamu].

---

### **C. Menyebutkan Umur**

## **I am ... years old**

Kalimat ini digunakan untuk menyebutkan umur.

**I am ... years old** artinya **Saya berumur ... tahun**

Contoh:

- **I am 7 years old.**
    Artinya: Saya berumur 7 tahun.
- **I am 9 years old.**
    Artinya: Saya berumur 9 tahun.
- **I am 12 years old.**
    Artinya: Saya berumur 12 tahun.

Cara membaca:

> **I am** = /ai em/
> **years old** = /yiers old/

Latihan:

- I am [umur kamu] years old.

<aside>
💡 Dalam bahasa Inggris, saat menyebutkan umur, kita memakai **I am**, bukan **I have**.
</aside>

---

### **D. Menyebutkan Hobi**

## **My hobby is...**

Kalimat ini digunakan untuk menyebutkan hobi.

**My hobby is...** artinya **Hobi saya adalah...**

Contoh hobi:

- drawing = menggambar
- singing = bernyanyi
- dancing = menari
- reading = membaca
- swimming = berenang
- playing football = bermain sepak bola
- playing games = bermain gim
- cycling = bersepeda

Contoh kalimat:

- **My hobby is drawing.**
    Artinya: Hobi saya menggambar.
- **My hobby is singing.**
    Artinya: Hobi saya bernyanyi.
- **My hobby is playing football.**
    Artinya: Hobi saya bermain sepak bola.

Cara membaca:

> **My hobby is** = /mai hobi iz/

Latihan:

- My hobby is [hobi kamu].

---

### **E. Menyebutkan Hal yang Disukai**

## **I like...**

Kalimat ini digunakan untuk menyebutkan sesuatu yang kamu suka.

**I like...** artinya **Saya suka...**

Kamu bisa menyebutkan:

- makanan
- minuman
- warna
- hewan
- benda
- kegiatan

Contoh:

- **I like fried rice.**
    Artinya: Saya suka nasi goreng.
- **I like chocolate.**
    Artinya: Saya suka cokelat.
- **I like cats.**
    Artinya: Saya suka kucing.
- **I like blue.**
    Artinya: Saya suka warna biru.

Cara membaca:

> **I like** = /ai laik/

Latihan:

- I like [hal yang kamu suka].

---

### **F. Menyebutkan Benda atau Hewan yang Dimiliki**

## **I have a...**

Kalimat ini digunakan untuk menyebutkan benda atau hewan yang kamu punya.

**I have a...** artinya **Saya punya sebuah/seekor...**

Contoh:

- **I have a cat.**
    Artinya: Saya punya seekor kucing.
- **I have a dog.**
    Artinya: Saya punya seekor anjing.
- **I have a pencil.**
    Artinya: Saya punya sebuah pensil.
- **I have a bicycle.**
    Artinya: Saya punya sebuah sepeda.

Cara membaca:

> **I have a** = /ai hev e/

Latihan:

- I have a [benda/hewan].

---

### **G. Menyebutkan Tempat**

## **at home / at school**

Kata **at** digunakan untuk menunjukkan tempat.

Contoh tempat:

- **at home** = di rumah
- **at school** = di sekolah
- **in my bag** = di tas saya
- **in my room** = di kamar saya

Contoh kalimat:

- **I have a cat at home.**
    Artinya: Saya punya seekor kucing di rumah.
- **I have a pencil in my bag.**
    Artinya: Saya punya sebuah pensil di tas saya.
- **I have a toy in my room.**
    Artinya: Saya punya mainan di kamar saya.

Latihan:

- I have a [benda/hewan] at [tempat].

---

### **H. Menyebutkan Cita-Cita**

## **My dream is being a...**

Kalimat ini digunakan untuk menyebutkan cita-cita.

**My dream is being a...** artinya **Cita-cita saya adalah menjadi seorang...**

Contoh cita-cita:

- doctor = dokter
- teacher = guru
- pilot = pilot
- police officer = polisi
- firefighter = pemadam kebakaran
- chef = koki
- artist = seniman
- football player = pemain sepak bola
- singer = penyanyi

Contoh kalimat:

- **My dream is being a doctor.**
    Artinya: Cita-cita saya adalah menjadi dokter.
- **My dream is being a teacher.**
    Artinya: Cita-cita saya adalah menjadi guru.
- **My dream is being a pilot.**
    Artinya: Cita-cita saya adalah menjadi pilot.

Cara membaca:

> **My dream is being a** = /mai drim iz bi-ing e/

Latihan:

- My dream is being a [cita-cita kamu].`
          },
          {
            id: 'sd-u1-s6',
            type: 'intro',
            title: '4. KOSAKATA PENTING & 5. POLA KALIMAT MUDAH',
            introText: `| English | Bahasa Indonesia |
| --- | --- |
| Hello | Halo |
| My name is | Nama saya adalah |
| I am from | Saya berasal dari |
| I am | Saya adalah / Saya berumur |
| years old | tahun |
| My hobby is | Hobi saya adalah |
| I like | Saya suka |
| I have | Saya punya |
| at home | di rumah |
| at school | di sekolah |
| My dream is | Cita-cita saya adalah |
| Nice to meet you | Senang bertemu denganmu |

---

Gunakan pola ini untuk membuat perkenalanmu sendiri.

1. **Hello!**  
    Halo!
2. **My name is [nama kamu].**  
    Nama saya adalah [nama kamu].
3. **I am from [asal kamu].**  
    Saya berasal dari [asal kamu].
4. **I am [umur kamu] years old.**  
    Saya berumur [umur kamu] tahun.
5. **My hobby is [hobi kamu].**  
    Hobi saya adalah [hobi kamu].
6. **I like [hal yang kamu suka].**  
    Saya suka [hal yang kamu suka].
7. **I have a [benda/hewan] at [tempat].**  
    Saya punya [benda/hewan] di [tempat].
8. **My dream is being a [cita-cita kamu].**  
    Cita-cita saya adalah menjadi [cita-cita kamu].
9. **Nice to meet you!**  
    Senang bertemu denganmu!`
          },
          {
            id: 'sd-u1-s7',
            type: 'intro',
            title: "6. LET'S PRACTICE",
            introText: ''
          },
          {
            id: 'sd-u1-s8',
            type: 'intro',
            title: '8. LATIHAN MENYUSUN KALIMAT',
            introText: ''
          },
          {
            id: 'sd-u1-s9',
            type: 'intro',
            title: '11. CATATAN UNTUK TUTOR & 12. REVIEW CEPAT',
            introText: `Gunakan bahasa yang sederhana dan beri contoh dekat dengan kehidupan anak-anak.

### **Saran Mengajar untuk Tutor:**

1. Baca contoh kalimat terlebih dahulu.
2. Minta anak menirukan satu kalimat pendek.
3. Jelaskan arti kalimat dalam bahasa Indonesia.
4. Beri contoh dengan nama anak.
5. Jangan terlalu cepat.
6. Ulangi kata sulit beberapa kali.
7. Puji anak setelah mencoba berbicara.
8. Untuk kelas 1-2 SD, fokus pada meniru dan mengisi nama/umur.
9. Untuk kelas 3-4 SD, ajak anak membuat kalimat lengkap.
10. Untuk kelas 5-6 SD, ajak anak berbicara tanpa membaca teks terlalu banyak.

---

### **12. REVIEW CEPAT**

Hari ini kita belajar:

- **My name is...** = Nama saya adalah...
- **I am from...** = Saya berasal dari...
- **I am ... years old** = Saya berumur ... tahun
- **My hobby is...** = Hobi saya adalah...
- **I like...** = Saya suka...
- **I have a...** = Saya punya...
- **My dream is being a...** = Cita-cita saya adalah menjadi...

🌟 Kamu hebat! Sekarang kamu sudah bisa memperkenalkan diri dalam bahasa Inggris. Terus latihan, ya!`
          }
        ],
        quiz: [
          {
            id: 'sd-u1-q1',
            question: 'My name is Riko. Artinya adalah...',
            options: ['Saya suka Riko.', 'Nama saya Riko.', 'Saya berasal dari Riko.'],
            correctAnswer: 1,
            explanation: '"My name is Riko" artinya "Nama saya Riko".'
          },
          {
            id: 'sd-u1-q2',
            question: 'I am 8 years old. Artinya adalah...',
            options: ['Saya berumur 8 tahun.', 'Saya punya 8 tahun.', 'Saya suka angka 8.'],
            correctAnswer: 0,
            explanation: '"I am 8 years old" artinya "Saya berumur 8 tahun". Untuk menyebutkan umur kita menggunakan "I am".'
          },
          {
            id: 'sd-u1-q3',
            question: 'I like apples. Artinya adalah...',
            options: ['Saya punya apel.', 'Saya suka apel.', 'Nama saya apel.'],
            correctAnswer: 1,
            explanation: '"I like" artinya "Saya suka", sedangkan "apples" adalah apel. Jadi artinya "Saya suka apel".'
          },
          {
            id: 'sd-u1-q4',
            question: 'My hobby is swimming. Artinya adalah...',
            options: ['Cita-cita saya berenang.', 'Hobi saya berenang.', 'Saya berasal dari kolam renang.'],
            correctAnswer: 1,
            explanation: '"My hobby is swimming" artinya "Hobi saya berenang". "Hobby" artinya hobi, "swimming" artinya berenang.'
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
