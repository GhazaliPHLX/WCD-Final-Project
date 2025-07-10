import botolBeningImg from './assets/BotolBening.jpg';
import botolWarnaImg from './assets/BotolWarna.jpg'; 
import aluminiumImg from './assets/Kaleng.jpg';
import kardusImg from './assets/Kardus.jpg';
import kertasImg from './assets/Kertas.jpg';
import botolKacaImg from './assets/Botol.jpg';

import { Link } from 'react-router-dom';

// Data untuk setiap kategori sampah
const categories = [
  { name: 'Botol plastik bening (PET)', image: botolBeningImg },
  { name: 'Botol plastik warna', image: botolWarnaImg },
  { name: 'Aluminium', image: aluminiumImg },
  { name: 'Kertas kardus', image: kardusImg },
  { name: 'Kertas', image: kertasImg },
  { name: 'Botol Kaca', image: botolKacaImg },
];

const CategoryCard = ({ name, image }) => (
  <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105">
    <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <p className="font-semibold text-gray-700">{name}</p>
  </div>
);

export default function Fokus() {
  return (
    <section className="bg-primary-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-head font-bold">
          Fokus pada <span className="text-secondary-600">Enam Kategori</span> Utama Ini:
        </h1>
        <h3 className="font-semibold mt-4 text-lg md:text-head3 max-w-5xl mx-auto">
          Kami menerima <span className='text-secondary-600'>berbagai jenis</span>  sampah anorganik. Anda dapat memulai dengan jenis yang{' '}
          <span className=" text-secondary-600">paling umum</span> ditemukan di rumah.
        </h3>

        {/* Grid untuk menampilkan kategori */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category.name} image={category.image} />
          ))}
        </div>

        <p className="mt-12 text-[25px] text-gray-700">
          Untuk ketentuan lebih lengkap, dapat Anda lihat setelah{' '}
          <Link to='/Register' className="text-secondary-600 font-semibold hover:underline">
            mendaftar
          </Link>
        </p>
      </div>
    </section>
  );
}