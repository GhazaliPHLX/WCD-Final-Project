
import { FaRecycle, FaTrashAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';

import wasteSortImage from './assets/WasteSort.jpg';
import wasteTrackImage from './assets/WasteTrack.jpg';
import consultImage from './assets/Consult.jpg';

const servicesData = [
  {
    image: wasteSortImage,
    icon: <FaRecycle className="text-xl" />,
    title: 'Layanan Pemilahan Terpadu',
    description: 'Layanan pemilahan sampah yang sistematis dan andal untuk bisnis, perkantoran, dan komunitas, memastikan sampah Anda siap untuk didaur ulang.',
    link: '#',
  },
  {
    image: wasteTrackImage,
    icon: <FaTrashAlt className="text-xl" />,
    title: 'Pelacakan & Laporan Sampah',
    description: 'Pantau perjalanan sampah terpilah Anda dan dapatkan laporan data transparan untuk mengukur dampak positif yang Anda hasilkan.',
    link: '#',
  },
  {
    image: consultImage,
    icon: <FaChartLine className="text-xl" />,
    title: 'Konsultasi Manajemen Limbah',
    description: 'Bimbingan ahli dari tim kami untuk membantu organisasi Anda merancang dan menerapkan sistem pengelolaan sampah yang paling efektif dan efisien.',
    link: '#',
  },
];

const ServiceCard = ({ image, icon, title, description, link }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 h-24">{description}</p>
      <a href={link} className="text-green-500 font-medium inline-flex items-center group">
        Pelajari Lebih Lanjut
        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);


// 5. Komponen Utama
const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 xl:px-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-black leading-tight mb-6">
            Layanan Kami.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menawarkan solusi terfokus untuk membantu Anda mengelola sampah secara praktis dan bertanggung jawab.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping data ke komponen ServiceCard */}
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