import { 
  FaRecycle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, 
  FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn 
} from 'react-icons/fa';
import Logo from './assets/Logo.png'

// 2. Data untuk link media sosial. Array 'quickLinks' sudah tidak dibutuhkan.
const socialLinks = [
  { name: 'Instagram', href: '#', icon: <FaInstagram /> },
  { name: 'Facebook', href: '#', icon: <FaFacebookF /> },
  { name: 'Twitter', href: '#', icon: <FaTwitter /> },
  { name: 'LinkedIn', href: '#', icon: <FaLinkedinIn /> },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-neutral-100">
      <div className="container mx-auto px-6 py-16">
        {/* -- Bagian Atas Footer dengan Grid -- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Kolom 1: Identitas & Logo */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img src={Logo} alt="" className='w-8' />
              <span className="text-xl font-bold">
                Pilah<span className="">Praktis</span>
              </span>
            </div>
            <p className=" text-sm">
              Sampah Anorganik Menumpuk? Pesan <span className='text-primary-600'>Penjemputan dalam Sekejap.</span>
            </p>
          </div>

          {/* Kolom 2: Diubah menjadi Daftar Media Sosial */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-white transition-colors flex items-center gap-3"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kolom 3: Informasi Kontak */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <address className="not-italic ">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="mt-1 mr-3 t flex-shrink-0" />
                <p>Jl. Kemuning No. 17, Cipete Selatan, Cilandak, Jakarta Selatan 12410</p>
              </div>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="mr-3 t" />
                <p>+62 812-3456-7890</p>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-3 t" />
                <p>info@PilahPraktis.com</p>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-3 t" />
                <p>Senin-Jum'at: 8AM - 5PM</p>
              </div>
            </address>
          </div>

        </div>
        
        {/* -- Bagian Bawah Footer untuk Copyright -- */}
        <div className="mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} PilahPraktis Waste Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;