import laptopImg from './assets/Laptop.png'

export default function Why() {
  return (
    <section className="bg-primary-200 py-16 px-6 md:px-20 md:h-[800px]">
      <div className="w-full mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-head font-semibold text-gray-800">
            Kenapa <span className="text-warning-600 font-bold">memilih kami?</span>
          </h2>
          <h3 className="mt-2 text-gray-700 text-lg md:text-head3">
            Membuat Hidup Anda <span className="text-orange-500 font-semibold">Lebih Mudah</span> dan <span className="text-orange-500 font-semibold">Lebih Bersih</span>.
          </h3>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-1 md:order-2">
            <img src={laptopImg} alt="Laptop Preview" className="md:w-[744px] md:h-[437px] object-cover md:object-none drop-shadow-xl" />
          </div>

          <div className="space-y-10 md:space-y-24 order-2 md:order-1">
            <div>
              <h3 className="text-lg font-bold underline underline-offset-4 text-gray-800 md:text-head3">Kemudahan Akses</h3>
              <p className="mt-2">
                Pesan layanan kapan saja, dari mana saja. Lupakan cara lama yang merepotkan, semua kini ada di genggaman Anda.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold underline underline-offset-4 text-gray-800 md:text-head3">Keandalan Profesional</h3>
              <p className="mt-2">
                Tim yang terlatih dan jadwal yang pasti. Kami sangat menghargai waktu dan kepercayaan yang Anda berikan. Sampah Anda akan kami salurkan ke bank sampah mitra kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
