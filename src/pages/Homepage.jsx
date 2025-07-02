import '../App.css'
//import Navbar from '../Navbar';
import Hero from '../Hero';
import AboutUs from '../About';
import Partners from '../Partner';
import ServicesSection from '../Services';
import CTA from '../CTA';
import Footer from '../Footer';


function Homepage() {
  
  return (
    <>
     <div className="bg-gray-500 min-h-screen">

      

      <main className="">
        <Hero />
        <Partners />
        <AboutUs />
        <ServicesSection />
        <CTA />
        <Footer />
      </main>

    </div> 
    </>
  )
}

export default Homepage;
