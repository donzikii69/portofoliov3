"use client";

import React, { useState, useEffect } from 'react';

/**
 * Interface untuk struktur data setiap slide.
 * Fleksibel untuk menerima tipe data number atau string pada id.
 */
interface CarouselItem {
    id: number | string;
    image: string;      // URL gambar
    description: string; // Deskripsi text
}

/**
 * Interface untuk Props component Carousel.
 * 'data' bersifat opsional (?), jadi component bisa berjalan tanpa props.
 */
interface CarouselProps {
    data?: CarouselItem[];
}

/**
 * Contoh Variable Array (Buatan Sendiri)
 * Ini digunakan sebagai data default jika parent component tidak mengirimkan props 'data'.
 * Memenuhi kebutuhan fleksibilitas penggunaan data.
 */
const defaultData: CarouselItem[] = [
    {
        id: 1,
        image: "/dummy/project/dumyproject.png",
        description: "Pemandangan alam yang indah dengan pegunungan nan megah."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        description: "Keindahan hutan yang asri dan menenangkan jiwa."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
        description: "Sinar matahari yang menembus dedaunan di pagi hari."
    }
];

/**
 * Component Carousel Reusable
 * 
 * Fitur:
 * 1. Menerima props data dari luar (flexible source).
 * 2. Menggunakan default data jika props kosong.
 * 3. Auto-slide setiap 2 detik.
 * 4. Layout terbagi 2: Atas (Foto), Bawah (Deskripsi).
 * 5. Auto-slide berhenti saat hover, lanjut saat cursor pergi.
 * 6. Tombol Navigasi Previous & Next.
 */
const Carousel: React.FC<CarouselProps> = ({ data = defaultData }) => {
    // State untuk melacak index slide yang sedang aktif ditampilkan
    const [currentIndex, setCurrentIndex] = useState(0);

    // State untuk melacak apakah cursor sedang berada di atas carousel (hover)
    const [isHovered, setIsHovered] = useState(false);

    /**
     * Fungsi untuk memindahkan slide ke sebelumnya (Previous)
     */
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    /**
     * Fungsi untuk memindahkan slide ke selanjutnya (Next)
     */
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    /**
     * useEffect untuk menjalankan timer auto-slide.
     * Fungsi ini akan dijalankan setiap kali component dirender atau dependensi berubah.
     * Timer hanya berjalan jika user TIDAK sedang hover di carousel.
     */
    useEffect(() => {
        // Jika sedang di-hover, jangan jalankan interval (pause auto-slide)
        if (isHovered) return;

        // Membuat interval yang berjalan setiap 2000ms (2 detik)
        const slideInterval = setInterval(() => {
            nextSlide(); // Menggunakan fungsi nextSlide untuk auto-slide
        }, 2000);

        // Cleanup function: Membersihkan interval saat component di-unmount atau isHovered berubah
        return () => clearInterval(slideInterval);
    }, [isHovered, data.length]); // Dependency: Efek di-reset jika status hover atau panjang data berubah

    return (
        // Container Utama: Relative agar child absolute bisa diposisikan. Overflow hidden untuk menyembunyikan slide di luar view.
        // Event Handler: onMouseEnter untuk pause, onMouseLeave untuk resume
        <div
            className="relative w-full overflow-hidden rounded-xl shadow-lg dark:bg-gray-800 min-h-full group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* Wrapper Slide dengan Transisi */}
            {/* Menggunakan transform translateX untuk menggeser slide sesuai index aktif */}
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* Mapping Data: Merender setiap item dalam array menjadi tampilan slide */}
                {data.map((item) => (
                    <div key={item.id} className="min-w-full shrink-0">

                        {/* Bagian 1: Atas - Foto */}
                        {/* Menggunakan h-64 (height fix) atau aspect ratio agar konsisten */}
                        <div className="relative w-full h-64 md:h-105 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.description}
                                className="w-full h-full object-fill"
                            />
                        </div>

                        {/* Bagian 2: Bawah - Deskripsi */}
                        <div className="text-center p-6 pb-12">
                            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Tombol Navigasi Previous (Kiri) */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none"
                aria-label="Previous Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Tombol Navigasi Next (Kanan) */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none"
                aria-label="Next Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Indikator Dots untuk navigasi visual posisi slide */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        // Logic Style: Dot aktif warnanya lebih terang/solid dibanding yang tidak aktif
                        className={`w-2 h-2 rounded-full transition-colors duration-300 focus:outline-none ${currentIndex === index ? "bg-white" : "bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
