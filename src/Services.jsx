
import { FaArrowRight } from 'react-icons/fa';

import wasteSortImage from './assets/Panggilan.jpg';
import wasteTrackImage from './assets/Rutin.jpg';
import callIcon from './assets/Calendar.png'
import RutinIcon from './assets/RutinIcon.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const servicesData = [
  {
    image: wasteSortImage,
    icon: <img className='w-6 h-6' src={callIcon} alt="Call Service Icon" />,
    title: 'Layanan Panggilan',
    description: (
      <>
        <p className="mb-4">
          Butuh angkut sampah sekarang?{' '}
          <span className="text-secondary-600 font-semibold">Pesan sekali jemput</span>,
          sama mudahnya seperti memesan ojek online. Tim kami akan segera datang
          sesuai permintaan Anda.
        </p>
        <h4 className="font-semibold mb-2 text-gray-800">Cocok untuk:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Sampah yang menumpuk tak terduga.</li>
          <li>Kebutuhan pembersihan setelah acara atau renovasi kecil.</li>
          <li>Anda yang ingin mencoba layanan kami untuk pertama kali.</li>
        </ul>
      </>
    ),
    link: '/panggilan',
  },
  {
    image: wasteTrackImage,
    icon: <img className='w-6 h-6' src={RutinIcon} alt="Routine Service Icon" />,
    title: 'Layanan Rutin',
    description: (
      <>
        <p className="mb-4">
          Atur jadwal{' '}
          <span className="text-secondary-600 font-semibold">penjemputan otomatis</span>{' '}
          sesuai kebutuhan, baik mingguan maupun bulanan. Praktis dan efisien, tanpa perlu repot memesan berulang kali.
        </p>
        <h4 className="font-semibold mb-2 text-gray-800">Cocok untuk:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Kebutuhan konsisten rumah tangga dan keluarga.</li>
          <li>Pengelolaan sampah untuk kantor, ruko, atau tempat usaha.</li>
          <li>Anda yang menginginkan lingkungan bersih secara teratur.</li>
        </ul>
      </>
    ),
    link: '/rutin',
  },
];


//  KOMPONEN CARD 
const ServiceCard = ({ image, icon, title, description, link }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLearnMore = () => {
    if (!user) {
      navigate('/Login'); // langsung ke login jika belum login
    } else {
      navigate(link); // jika sudah login, arahkan ke halaman layanan
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col transition-transform duration-300 hover:-translate-y-2 max-w-[458px]">
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      <div className="p-8 flex flex-col grow">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>

        <div className="grow text-gray-600 text-base leading-relaxed">
          {description}
        </div>

        {/* Tombol navigasi */}
        <button
          onClick={handleLearnMore}
          className="text-green-600 font-bold inline-flex items-center group mt-6"
        >
          Pelajari Lebih Lanjut
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

//  Komponen Utama
const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-secondary-50">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-head font-bold text-primary leading-tight mb-6">
            Layanan Kami.
          </h3>
          <p className=" w-full mx-auto font-semibold text-2xl md:text-head3">
            Dari tumpukan <span className='text-primary-600'>sampah dadakan</span> hingga rencana <span className='text-primary-600'>pengelolaan rutin</span>, kami punya solusinya.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-12 md:gap-x-30 justify-center">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;