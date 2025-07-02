import gacoan from './assets/Gacoan.png';
import cakrawala from './assets/Cakrawala.jpg';
import wizzmie from './assets/Wizzmie.png';


const Partners = () => {
  return (
<section id="partners" className="bg-primary-100 py-16">
        <div className="container mx-auto px-4 text-center ">
          
          <h3 className="text-sm font-semibold text-black tracking-widest uppercase mb-8">
            Dipercaya oleh:
          </h3>
          
          {/* Kontainer untuk logo-logo */}
          <div className="flex flex-wrap justify-center items-center gap-12">
            
            <img className="max-h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300" src={gacoan} alt="Mie Gacoan" />
            <img className="max-h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300" src={cakrawala} alt="Cakyu" />
            <img className="max-h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300" src={wizzmie} alt="Wizzmie" />
          </div>
          <h3 className="text-sm font-semibold text-black tracking-widest uppercase mt-10">
            Mitra Kebanggaan kami
          </h3>
        </div>
      </section>
  )}
  export default Partners;