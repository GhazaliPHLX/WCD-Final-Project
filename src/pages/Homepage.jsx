import '../App.css'
import Hero from '../Hero';
import AboutUs from '../About';
import Why from '../Why';
import Partners from '../Partner';
import ServicesSection from '../Services';
import Footer from '../Footer';


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
        
        <Footer />
      </main>

    </div> 
    </>
  )
}

export default Homepage;
