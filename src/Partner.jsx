import banksampah from './assets/BankSampah.png';
import wasteChg from './assets/WasteChange.png';
import smash from './assets/Smash.png';


const Partners = () => {
  return (
<section id="partners" className="bg-primary-200 py-8">
        <div className="container mx-auto px-4 text-center md:h-[220px]">
          
          <h3 className="text-sm font-semibold text-black tracking-widest uppercase pb-6 md:pb-0">
            Mitra Kebanggaan kami
          </h3>
          
          {/* Kontainer untuk logo-logo */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 md:pt-10">
            
            <img className="max-h-20 max-w-60" src={banksampah} alt="Mie Gacoan" />
            <img className="w-20" src={wasteChg} alt="Cakyu" />
            <img className="max-h-20" src={smash} alt="Wizzmie" />
          </div>
          
        </div>
      </section>
  )}
  export default Partners;