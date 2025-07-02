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
          relative w-11/12 max-w-7xl p-8 
          bg-secondary-50
          backdrop-blur-lg 
          rounded-3xl 
          border border-white/30 
          shadow-lg
          min-h-[60vh] 
          flex flex-col justify-center">
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
          
          <div className="flex flex-col gap-4 text-black order-last md:order-first">
            <h1 className="text-4xl md:text-3xl font-extrabold leading-tight text-center md:text-left max-w-[400px]"> {/* Ukuran font mobile disesuaikan */}
             Sampah Menumpuk?  Pesan <span className='text-primary-600'>Penjemputan dalam Sekejap. </span>  
            </h1>
            <p className="text-black text-center md:text-left max-w-[300px] mt-16"> {/* Text align disesuaikan */}
              Jadwalkan penjemputan sampah sesuai kebutuhanmu, langsung dari website. Praktis, cepat, dan dapat diandalkan.
            </p>
            <div className='flex justify-center md:justify-start mt-6 md:mt-16'>
            <button className='bg-warning-400 rounded-2xl h-8 w-56 text-black font-medium hover:bg-warning-600 transition-colors'>Yuk, Coba Layanan Kami</button>
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