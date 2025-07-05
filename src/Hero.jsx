import heroImg from './assets/Hero.jpg';
import wasteImg from './assets/High.jpg';

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fef6ec]/80 z-0" />

      {/* Content Container */}
      <div className="
        relative z-10 w-11/12 max-w-7xl p-6 md:p-8
        bg-secondary-50 backdrop-blur-lg 
        rounded-3xl border border-white/30 shadow-lg
        min-h-[60vh] flex flex-col justify-center
      ">
        {/* Responsive Layout: Mobile = stacked, Desktop = side by side */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center gap-8">
          
          {/* Text Section */}
          <div className="flex flex-col gap-6 text-black items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug max-w-md">
              Sampah Anorganik Menumpuk? <br />
              Pesan <span className="text-primary-600">Penjemputan dalam Sekejap.</span>
            </h1>
            <p className="max-w-md">
              Jadwalkan penjemputan sampah sesuai kebutuhanmu, langsung dari website.
              Praktis, cepat, dan dapat diandalkan.
            </p>
            <button className="bg-warning-400 rounded-2xl px-5 py-2 text-black font-medium hover:bg-warning-600 transition-colors">
              Yuk, Coba Layanan Kami
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center md:pl-30">
            <img 
              src={wasteImg} 
              alt="Waste"
              className="w-[160px] md:w-[300px] h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
