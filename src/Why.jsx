import laptopImg from './assets/Laptop.png'

export default function Why() {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-20 md:h-full">
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Kenapa <span className="text-warning-600 font-bold">memilih kami?</span>
          </h2>
          <p className="mt-2 text-gray-700">
            Membuat Hidup Anda <span className="text-orange-500 font-semibold">Lebih Mudah</span> dan <span className="text-orange-500 font-semibold">Lebih Bersih</span>.
          </p>
        </div>

        {/* Isi utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Gambar ditaruh di atas pada mobile */}
          <div className="flex justify-center order-1 md:order-2 md:pl-40">
            <img src={laptopImg} alt="Laptop Preview" className="w-full max-w-md drop-shadow-xl" />
          </div>

          {/* Deskripsi di bawah gambar saat mobile */}
          <div className="space-y-10 order-2 md:order-1">
            <div>
              <h3 className="text-lg font-bold underline underline-offset-4 text-gray-800">Kemudahan Akses</h3>
              <p className="text-gray-700 mt-2">
                Pesan layanan kapan saja, dari mana saja. Lupakan cara lama yang merepotkan, semua kini ada di genggaman Anda.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold underline underline-offset-4 text-gray-800">Keandalan Profesional</h3>
              <p className="text-gray-700 mt-2">
                Tim yang terlatih dan jadwal yang pasti. Kami sangat menghargai waktu dan kepercayaan yang Anda berikan. Sampah Anda akan kami salurkan ke bank sampah mitra kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
