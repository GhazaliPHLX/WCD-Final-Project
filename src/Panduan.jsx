import img1 from './assets/Recycle.jpeg';
import img2 from './assets/Pupuk.jpeg';
import iconX from './assets/x.png';
import iconCheck from './assets/Check.png';

export default function Panduan() {
  return (
    <section id="panduan" className="bg-secondary-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl md:text-head font-bold mb-4">Apakah caranya sulit?</h1>
        <p className="text-lg md:text-head3 font-medium mb-12">
          Tidak perlu khawatir. Untuk memulai, Anda hanya perlu mengingat <span className="text-primary-600 font-semibold">dua hal sederhana</span> ini.
        </p>

        {/* LANGKAH 1: [Teks-Image] di Desktop, [Image-Teks] di Mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Kiri: Angka + Teks */}
          <div className="flex items-center gap-4 w-full md:w-1/2 order-2 md:order-1">
            <div className="min-w-[100px] md:min-w-[140px] h-[180px] md:h-[380px] flex items-center justify-center">
              <h3 className="text-primary-600 font-bold text-[120px] md:text-[240px] leading-none">1</h3>
            </div>
            <div className="text-left">
              <h4 className="text-xl md:text-2xl font-bold mb-2">
                Pisahkan Sampah <br /> Organik (Basah)
              </h4>
              <hr className="w-full border border-black mb-3" />
              <p className="text-sm md:text-base leading-relaxed max-w-md">
                Ini adalah <span className="text-danger-600">sisa makanan, kulit buah, atau sampah basah lainnya</span>. Silakan buang sampah jenis ini seperti biasa. Layanan kami tidak menjemputnya.
              </p>
            </div>
          </div>

          {/* Kanan: Gambar */}
          <div className="relative w-full md:w-1/2 order-1 md:order-2">
            <img src={img1} alt="Organik" className="w-full rounded-xl" />
            <img
              src={iconX}
              alt="Not accepted"
              className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14"
            />
          </div>
        </div>

        {/* LANGKAH 2: [Image-Teks] di Desktop, [Image-Teks] di Mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Kiri: Gambar */}
          {/* Urutan di mobile: 1, Urutan di desktop: 1 (kiri) */}
          <div className="relative w-full md:w-1/2 order-1 md:order-1">
            <img src={img2} alt="Anorganik" className="w-full rounded-xl" />
            <img
              src={iconCheck}
              alt="Accepted"
              className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14"
            />
          </div>

          {/* Kanan: Angka + Teks */}
          {/* Urutan di mobile: 2, Urutan di desktop: 2 (kanan) */}
          {/* Kita hapus flex-col dan order di dalam sini agar tidak bentrok */}
          <div className="flex items-center gap-4 w-full md:w-1/2 order-2 md:order-2">
            {/* Angka */}
            <div className="min-w-[100px] md:min-w-[140px] h-[180px] md:h-[380px] flex items-center justify-center">
              <h3 className="text-primary-600 font-bold text-[120px] md:text-[240px] leading-none">2</h3>
            </div>
            {/* Teks */}
            <div className="text-left">
              <h4 className="text-xl md:text-2xl font-bold mb-2">
                Kumpulkan Sampah <br /> Anorganik (Kering)
              </h4>
              <hr className="w-full border border-black mb-3" />
              <p className="text-sm md:text-base leading-relaxed max-w-md">
                Inilah yang kami sebut 'aset' Anda: <span className="text-success-600">Botol plastik, kertas, kardus, kaleng aluminium, dan kaca</span>. Pastikan dalam kondisi kering dan tidak tercampur sisa makanan. Masing-masing kategori dikumpulkan dalam wadah-wadah berbeda.
              </p>
            </div>
          </div>
        </div>


        {/* Penutup */}
        <p className="mt-12 text-lg text-center font-medium">
          Hanya <span className="text-primary-600 font-semibold">sampah anorganik kering</span> yang akan kami jemput dan hargai. Sederhana, bukan?
        </p>
      </div>
    </section>
  );
}