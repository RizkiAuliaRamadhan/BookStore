import {
  Bukusirah,
  Bukufiqih,
  Bukubahasa,
  Bukuaqidah,
  Bukualquran,
  Bukuadab,
  Alquran,
  Aqidah,
  Akhlaq,
  Fiqih,
  Lughah,
  Sirah,
} from '../../assets/image';

export const dummyBooks = [
  {
    id: 1,
    name: 'Alquran terjemah',
    image: [Bukualquran, Bukualquran],
    category: {
      id: 1,
      name: 'Al-quran',
      gambar: Alquran,
    },
    harga: 60000,
    berat: 0.5,
    stock: 5,
    ready: true,
    description: "Ready, Silahkan diorder !!"
  },
  {
    id: 2,
    name: 'Aqidah islamiah',
    image: [Bukuaqidah, Bukualquran, Bukusirah],
    category: {
      id: 2,
      name: 'Aqidah',
      gambar: Aqidah,
    },
    harga: 80000,
    berat: 0.7,
    stock: 5,
    ready: true,
    description: "Ready, Silahkan diorder !!"
  },
  {
    id: 3,
    name: 'Akhlaq Anak',
    image: [Bukuadab, Bukuadab],
    category: {
      id: 3,
      name: 'Akhlaq',
      gambar: Akhlaq,
    },
    harga: 50000,
    berat: 0.4,
    stock: 5,
    ready: true,
    description: "Ready, Silahkan diorder !!"
  },
  {
    id: 4,
    name: 'Fiqih Islamiah',
    image: [Bukufiqih, Bukufiqih],
    category: {
      id: 4,
      name: 'Fiqih',
      gambar: Fiqih,
    },
    harga: 100000,
    berat: 1,
    stock: 5,
    ready: true,
    description: "Ready, Silahkan diorder !!"
  },
  {
    id: 5,
    name: 'Bahasa',
    image: [Bukubahasa, Bukubahasa],
    category: {
      id: 5,
      name: 'Bahasa',
      gambar: [Lughah, Lughah],
    },
    harga: 120000,
    berat: 1.2,
    stock: 5,
    ready: true,
    description: "Ready, Silahkan diorder !!"
  },
  {
    id: 6,
    name: 'Sirah Nabawiah',
    image: [Bukusirah, Bukusirah],
    category: {
      id: 6,
      name: 'Sirah',
      gambar: Sirah,
    },
    harga: 150000,
    berat: 1.5,
    stock: 5,
    ready: true,
    description: "Ready, Silahkan diorder !!"
  },
];
