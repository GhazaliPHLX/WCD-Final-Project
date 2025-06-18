import heroImg from './assets/Green.jpg';
import wasteImg from './assets/Waste.jpg';

export default function Hero() {
  return (
    <section 
      id='home'
      className="bg-cover bg-center bg-no-repeat h-screen w-full text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="
          relative w-11/12 max-w-7xl p-8 {/* Padding sekarang 2rem di semua ukuran */}
          bg-white/20 
          backdrop-blur-lg 
          rounded-3xl 
          border border-white/30 
          shadow-lg
          min-h-[60vh] 
          flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col gap-4 text-black order-last md:order-first">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left"> {/* Ukuran font mobile disesuaikan */}
              Layanan <br /> <span className='text-green-900'>Pemilahan Sampah</span> <br /> Professional
            </h1>
            <p className="text-gray-800 text-center md:text-left"> {/* Text align disesuaikan */}
              Sampah terpilah dengan baik adalah langkah pertama untuk memaksimalkan potensi daur ulang dan mengurangi limbah ke TPA.
            </p>
            <div className='flex justify-center md:justify-start md:pt-24'>
            <button className='bg-accent rounded-md w-40 text-white font-semibold border border-black hover:bg-green-600 transition-colors'>Layanan Kami</button>
            </div>
          </div>
          
          {/* Kolom Gambar */}
          <div className="flex justify-center items-center order-first md:order-last">
            <img 
              src={wasteImg} 
              alt="Waste"
              className="w-full max-w-sm md:max-w-full h-auto object-cover rounded-2xl shadow-xl" // w-lg tidak standar, diganti max-w-sm untuk mobile
            />
          </div>
        </div>
      </div>
    </section>
  );
}