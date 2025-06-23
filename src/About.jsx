import React from 'react';
import aboutImage from './assets/GoGreen.jpg'; // Ganti dengan path gambar gedungmu
import { FaStarOfLife } from 'react-icons/fa'; // Contoh ikon untuk ornamen


const AboutUs = () => {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        
        {/* Kontainer utama dengan layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* === KOLOM KIRI: Teks & Statistik === */}
          <div className="order-last lg:order-first md:pl-10">
            

            {/* Judul dan Paragraf */}
            <h2 className="text-5xl font-bold text-primary leading-tight mb-6">
              About us.
            </h2>
            <p className="text-neutral leading-relaxed mb-8">
            PilahPraktis didirikan pada tahun 2025 atas dasar sebuah keyakinan sederhana: pengelolaan sampah yang baik dimulai dari pemilahan yang benar di sumbernya. Kami melihat betapa banyaknya material berharga yang terbuang sia-sia karena tercampur, dan kami hadir untuk memberikan solusi
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-primary transition-colors"
            >
              Learn more
            </a>
          </div>

          {/* === KOLOM KANAN: Gambar & Ornamen === */}
          <div className="relative flex justify-center items-center order-first lg:order-last">
            {/* Wrapper untuk gambar dan ornamen agar mudah di-positioning */}
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px]">
              {/* Gambar Utama */}
              <img 
                src={aboutImage} 
                alt="About Us" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />

              {/* Ornamen: Arch/Lengkungan (simulasi dengan border) */}
              <div className="absolute -top-8 -right-8 w-[90%] h-[90%] border-t-2 border-r-2 border-gray-400 rounded-tr-full z-0"></div>
              
              {/* Ornamen: Lingkaran Hitam */}
              <div className="absolute -top-4 -left-12 w-24 h-24 bg-black rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-black rounded-full"></div>
              
              {/* Ornamen: Bintang/Sparkle */}
              <FaStarOfLife className="absolute text-black text-3xl -top-2 left-1/3" />
              <FaStarOfLife className="absolute text-black text-xl -bottom-12 left-1/4" />
              <FaStarOfLife className="absolute text-black text-2xl top-1/2 -right-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;