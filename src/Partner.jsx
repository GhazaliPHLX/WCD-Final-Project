import banksampah from './assets/BankSampah.png';
import wasteChg from './assets/WasteChange.png';
import smash from './assets/Smash.png';


const Partners = () => {
  return (
<section id="partners" className="bg-primary-100 py-16">
        <div className="container mx-auto px-4 text-center ">
          
          <h3 className="text-sm font-semibold text-black tracking-widest uppercase mb-8">
            Dipercaya oleh:
          </h3>
          
          {/* Kontainer untuk logo-logo */}
          <div className="flex flex-wrap justify-center items-center gap-24">
            
            <img className="max-h-20 max-w-60" src={banksampah} alt="Mie Gacoan" />
            <img className="max-h-20" src={wasteChg} alt="Cakyu" />
            <img className="max-h-20" src={smash} alt="Wizzmie" />
          </div>
          <h3 className="text-sm font-semibold text-black tracking-widest uppercase mt-10">
            Mitra Kebanggaan kami
          </h3>
        </div>
      </section>
  )}
  export default Partners;