import dollarImg from './assets/CiDollar.png';
import houseImg from './assets/CleanHouse.png';
import earthImg from './assets/Earth.png';

export default function Manfaat() {
  const manfaatList = [
    {
      img: dollarImg,
      title: (
        <>
          Menghasilkan <br />
          <span className="text-warning-500">Pendapatan</span>
        </>
      ),
      desc: "Sampah anorganik yang bersih memiliki nilai jual. Kumpulkan, kami jemput, dan dapatkan dananya langsung di saldo akun Anda.",
    },
    {
      img: houseImg,
      title: (
        <>
          Rumah Menjadi <br />
          <span className="text-warning-500">Bersih & Sehat</span>
        </>
      ),
      desc: "Dengan memisahkan sampah kering yang tidak berbau, area sampah di rumah Anda menjadi lebih bersih dan terhindar dari penyakit.",
    },
    {
      img: earthImg,
      title: (
        <>
          <span className="text-warning-500">Kontribusi</span> Mudah <br />
          untuk <span className="text-warning-500">Bumi</span>
        </>
      ),
      desc: "Setiap sampah yang Anda pilah berarti mengurangi tumpukan di TPA. Sebuah usaha sederhana dengan dampak yang besar.",
    },
  ];

  return (
    <section className="bg-sky-200 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Bukan Sekadar untuk Lingkungan, Ini Manfaatnya bagi Anda:
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {manfaatList.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <img
                src={item.img}
                alt={`Icon ${index}`}
                className="w-[100px] md:w-[125px] h-auto mb-4"
              />
              <h3 className="font-bold text-head2 mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
