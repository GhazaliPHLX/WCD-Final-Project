import ctaBackgroundImg from './assets/Green.jpg'; 

// Komponen ini tidak lagi memerlukan wasteImg di dalam card, jadi bisa dihapus.

export default function CTA() {
  return (
    // Section ini tidak lagi full-screen (h-screen dihapus),
    // tapi diberi padding vertikal yang cukup (py-24)
    <section 
      id='cta' // ID diubah dari 'home'
      className="bg-cover bg-center bg-no-repeat w-full text-white flex items-center justify-center py-24 sm:py-32"
      style={{ backgroundImage: `url(${ctaBackgroundImg})` }}
    >
      {/* Struktur Glassmorphism dipertahankan, tapi layout di dalamnya disederhanakan */}
      <div className="
          relative w-11/12 max-w-4xl p-8 sm:p-12 md:p-16 {/* Ukuran & padding disesuaikan */}
          bg-white/20 
          backdrop-blur-lg 
          rounded-3xl 
          border border-white/30 
          shadow-lg
          flex flex-col justify-center text-center {/* Konten dibuat terpusat */}
      ">
        
        {/* Layout diubah dari grid 2 kolom menjadi 1 kolom terpusat untuk fokus */}
        <div className="flex flex-col gap-6 items-center">
          
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Siap Membuat <br /> <span className='text-primary'>Perubahan?</span>
          </h2>

          <p className="text-neutral max-w-xl"> {/* max-w ditambahkan agar teks tidak terlalu lebar */}
            Diskusikan kebutuhan pengelolaan sampah Anda dengan tim ahli kami. Temukan solusi yang paling efisien untuk bisnis atau komunitas Anda.
          </p>
          
          <div className='pt-6'>
            <button className='bg-accent rounded-md py-3 px-8 text-white font-semibold  hover:bg-primary transition-colors shadow-md'>
              Jadwalkan Konsultasi
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}