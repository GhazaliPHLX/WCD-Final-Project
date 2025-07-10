import '../App.css'
import Hero from '../Hero';
import AboutUs from '../About';
import Why from '../Why';
import Partners from '../Partner';
import ServicesSection from '../Services';
import Manfaat from '../Manfaat';
import Panduan from '../Panduan';
import Fokus from '../Fokus';


function Homepage() {
  
  return (
    <>
     <div className="bg-gray-500 min-h-screen">

      

      <main className="">
        <Hero />
        <Partners />
        <AboutUs />
        <Why />
        <ServicesSection />
        <Manfaat />
        <Panduan />
        <Fokus />
        
        
      </main>

    </div> 
    </>
  )
}

export default Homepage;
