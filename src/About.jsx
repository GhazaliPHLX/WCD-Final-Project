import React from 'react';
import warriorImg from './assets/Warrior.jpg'; // Ganti dengan path gambar gedungmu
import { FaStarOfLife } from 'react-icons/fa'; // Contoh ikon untuk ornamen


const AboutUs = () => {
  return (
    <section id="about" className="bg-secondary-50 py-20 md:py-28">
      <div className="container mx-auto px-4">
        
        {/* Kontainer utama dengan layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* === KOLOM KIRI: Teks & Statistik === */}
          <div className="order-last lg:order-first md:pl-30 ">
            

            {/* Judul dan Paragraf */}
            <h2 className="text-3xl font-extrabold inline-block leading-tight mb-6">
              Tentang kami
            <hr className='border-black border-2 mt-2'/>
            </h2>
            <p className="text-black leading-relaxed mb-8">
            PilahPraktis hadir untuk menjawab tantangan sampah di perkotaan. Kami percaya, mengurus sampah seharusnya praktis dan andal.
Dengan memanfaatkan teknologi, kami membangun platform yang menghubungkan kebutuhan Anda akan kebersihan dengan layanan penjemputan yang cepat, andal, dan mudah diakses langsung dari genggaman Anda.
            </p>
          </div>

          {/* === KOLOM KANAN: Gambar & Ornamen === */}
          <div className="relative flex justify-center items-center order-first lg:order-last">
            {/* Wrapper untuk gambar dan ornamen agar mudah di-positioning */}
            <div className="relative w-[300px] h-[400px] md:w-[600px] md:h-[400px]">
              {/* Gambar Utama */}
              <img 
                src={warriorImg} 
                alt="About Us" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;