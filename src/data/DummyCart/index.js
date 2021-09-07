import { Akhlaq, Alquran, Aqidah, Bukuadab, Bukualquran, Bukuaqidah, Bukufiqih, Fiqih, } from '../../assets'

export const DummyCart = [
    {
        id: 1,
        status: 'keranjang',
        tanggalPemesanan: 'Jumat, 3 September 2021',
        totalHarga: 560000,
        berat: 2,
        pesanan: [
            {
                id: 1,
                product: {
                    id: 1,
                    name: "Aqidah Islamiah",
                    image: Bukuaqidah,
                    harga: 80000,
                    berat: 1,
                    jumlah: 2,
                    totalHarga: 160000,
                    kategori: {
                        id: 2,
                        name: 'Aqidah',
                        image: Aqidah
                    },
                    keterangan: "Packing yang rapih ya gan!!"
                },

            },
            {
                id: 2,
                product: {
                    name: "Fiqih Islamiah",
                    image: Bukufiqih,
                    harga: 200000,
                    berat: 1,
                    jumlah: 2,
                    totalHarga: 400000,
                    kategori: {
                        id: 4,
                        name: 'Fiqih',
                        image: Fiqih,
                    },
                    keterangan: "Packing yang rapih ya gan!!"
                }
            },
        ]
    },
    {
        id: 2,
        status: 'lunas',
        tanggalPemesanan: 'Sabtu, 4 September 2021',
        totalHarga: 600000,
        berat: 2,
        pesanan: [
            {
                id: 1,
                product: {
                    name: "Al Quran",
                    image: Bukualquran,
                    harga: 80000,
                    berat: 1,
                    jumlah: 2,
                    totalHarga: 160000,
                    kategori: {
                        id: 1,
                        name: 'Alquran',
                        image: Alquran
                    },
                    keterangan: "Packing yang rapih ya gan!!"
                }
            },
            {
                id: 2,
                product: {
                    name: "Akhlaq Anak",
                    image: Bukuadab,
                    harga: 200000,
                    berat: 1,
                    jumlah: 2,
                    totalHarga: 400000,
                    kategori: {
                        id: 3,
                        name: 'Akhlaq',
                        image: Akhlaq,
                    },
                    keterangan: "Packing yang rapih ya gan!!"
                }
            },
        ]
    },

]