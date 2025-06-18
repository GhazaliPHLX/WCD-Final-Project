import './App.css'
import Navbar from './NavBar';
import Hero from './Hero';
import AboutUs from './About';
import Partners from './Partner';
import ServicesSection from './Services';
import CTA from './CTA';
import Footer from './Footer';


function App() {
  
  return (
    <>
     <div className="bg-gray-500 min-h-screen">

      {/* 2. Gunakan komponen Navbar di sini */}
      <Navbar />

      {/* Konten halaman lainnya bisa diletakkan di bawah Navbar */}
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

export default App
