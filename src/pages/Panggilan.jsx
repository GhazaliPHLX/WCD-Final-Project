import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useAuth } from '../AuthContext';
import supabase from '../config/supabaseClient';
import botolBeningimg from '../assets/BotolBening.jpg';
import botolimg from '../assets/Botol.jpg';
import botolWarna from '../assets/BotolWarna.jpg';
import aluminimumimg from '../assets/Kaleng.jpg';
import kertasimg from '../assets/Kertas.jpg';
import kardusimg from '../assets/Kardus.jpg';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

export default function Panggilan() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [waktu, setWaktu] = useState('');
  const [alamat, setAlamat] = useState('');
  const [keranjang, setKeranjang] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  const biayaLayanan = 25000;

  const jenisSampahList = [
    { nama: 'Botol plastik bening', harga: 3500, img: botolBeningimg },
    { nama: 'Botol plastik warna', harga: 2800, img: botolWarna },
    { nama: 'Aluminium', harga: 12000, img: aluminimumimg },
    { nama: 'Kertas karton', harga: 1400, img: kardusimg },
    { nama: 'Kertas', harga: 800, img: kertasimg },
    { nama: 'Botol kaca', harga: 500, img: botolimg },
  ];

  const tambahKeKeranjang = (nama, hargaPerKg) => {
    setKeranjang((prev) => {
      if (prev.find((item) => item.nama === nama)) return prev;
      return [...prev, { nama, berat: '', hargaPerKg, subtotal: 0 }];
    });
  };

  const handleBeratChange = (index, beratBaru) => {
    setKeranjang((prev) => {
      const newKeranjang = [...prev];
      const berat = parseFloat(beratBaru);
      const validBerat = isNaN(berat) ? '' : berat;
      const subtotal = validBerat ? validBerat * newKeranjang[index].hargaPerKg : 0;
      newKeranjang[index] = {
        ...newKeranjang[index],
        berat: beratBaru,
        subtotal
      };
      return newKeranjang;
    });
  };

  const hapusItem = (index) => {
    setKeranjang((prev) => {
      const newKeranjang = [...prev];
      newKeranjang.splice(index, 1);
      return newKeranjang;
    });
  };
  
  const totalHargaSampah = keranjang.reduce((sum, item) => sum + item.subtotal, 0);
  const totalTagihan = biayaLayanan - totalHargaSampah;

  const handlePesan = async () => {
    if (!alamat || !selectedDate || !waktu || keranjang.length === 0) {
      alert('Mohon lengkapi semua data.');
      return;
    }

    const { data: pesanan, error } = await supabase.from('tb_pesanan').insert([
      {
        user_id: user.id,
        alamat,
        tanggal: selectedDate,
        waktu,
        total_harga: totalTagihan,
      },
    ]).select().single();
    

    if (error) {
      console.error(error);
      return;
    }

    const detail = keranjang.map(item => ({
      pesanan_id: pesanan.id,
      jenis_sampah: item.nama,
      berat: parseFloat(item.berat),
      harga_per_kg: item.hargaPerKg,
      subtotal: item.subtotal,
    }));

    const { error: detailError } = await supabase.from('tb_detail_pesanan').insert(detail);

    if (detailError) console.error(detailError);
    else {
        navigate('/User');
    }
  };

  return (
    <section className='bg-secondary-50 md:pt-16'>
      <h2 className="text-2xl font-semibold text-center mb-4 md:pt-16">Hallo, {user?.username || '...'}!</h2>
      <div className="p-6 rounded-md max-w-3xl mx-auto mt-10">

        <div className="w-full h-64 mb-4">
          <iframe
            src="http://googleusercontent.com/maps.google.com/3"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <label className="block text-sm font-medium mb-1">Alamat</label>
        <textarea
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            className="w-full p-2 border rounded-md mb-4 bg-white"
          />

        <div className='flex gap-4 mb-4'>
          <div className="w-auto">
            <label htmlFor="tanggal-picker" className="block text-sm font-medium mb-1">Tanggal</label>
            <DatePicker
              id="tanggal-picker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yy"
              className="w-full p-2 border rounded-md bg-white"
            />
          </div>
          <div className="w-24">
            <label htmlFor="jam-input" className="block text-sm font-medium mb-1">Waktu</label>
            <input
              type="text"
              name="jam"
              id="jam-input"
              placeholder="--:--"
              className="w-full p-2 border rounded-md bg-white"
              value={waktu}
              onChange={(e) => {
                let value = e.target.value.replace(/[^0-9]/g, '');
                if (value.length > 4) value = value.slice(0, 4);
                if (value.length > 2) {
                  value = value.slice(0, 2) + ':' + value.slice(2);
                }
                setWaktu(value);
              }}
              />
          </div>
        </div>

        <h3 className="text-sm font-medium mb-2">Pilih jenis sampah <span className="text-xs">*Isi berat untuk menghitung total</span></h3>
        <div className="grid grid-cols-3 gap-4 border p-4 rounded-md mb-4 bg-white">
          {jenisSampahList.map((item, i) => (
            <div
              key={i}
              onClick={() => tambahKeKeranjang(item.nama, item.harga)}
              className="flex flex-col items-center border bg-primary-50 rounded-lg p-2 hover:shadow-md cursor-pointer"
            >
              <img src={item.img} alt={item.nama} className="w-16 h-16 object-cover rounded" />
              <p className="text-sm mt-2 text-center font-medium">{item.nama}</p>
              <p className="text-xs">{item.harga.toLocaleString('id-ID')}/kg</p>
            </div>
          ))}
        </div>

        <div className="border p-4 rounded-md bg-white">
          <table className="w-full text-sm text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Jenis Sampah</th>
                <th className="p-2 border">Berat (kg)</th>
                <th className="p-2 border">Harga/kg (Rp)</th>
                <th className="p-2 border">Total Harga (Rp)</th>
                <th className="p-2 border"></th>
              </tr>
            </thead>
            <tbody>
              {keranjang.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-2 border">{item.nama}</td>
                  <td className="p-2 border">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      value={item.berat}
                      onChange={(e) => handleBeratChange(idx, e.target.value)}
                      className="w-20 p-1 border rounded"
                    />
                    </td>
                    <td className="p-2 border">{item.hargaPerKg.toLocaleString('id-ID')}</td>
                    <td className="p-2 border">{item.subtotal.toLocaleString('id-ID')}</td>
                    <td className="p-2 border">
                      <button
                        onClick={() => hapusItem(idx)}
                        className="bg-red-500 text-white text-xs px-1 py-1 w-6 h-6 items-center rounded hover:bg-red-600"
                      >
                        <RxCross2 className='w-4'/>
                      </button>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-right mt-4 font-medium">
            <div className='flex justify-end gap-4'>
                <p>Estimasi Nilai Sampah:</p>
                <p className='w-32 text-left'>Rp {totalHargaSampah.toLocaleString('id-ID')}</p>
            </div>
            <div className='flex justify-end gap-4'>
                <p>Biaya Layanan:</p>
                <p className='w-32 text-left'>- Rp {biayaLayanan.toLocaleString('id-ID')}</p>
            </div>
            <hr className='my-1'/>
            {totalTagihan >= 0 ? (
                <div className='flex justify-end gap-4 font-bold'>
                    <p>Total Tagihan Akhir:</p>
                    <p className='w-32 text-left'>Rp {totalTagihan.toLocaleString('id-ID')}</p>
                </div>
            ) : (
                <div className='flex justify-end gap-4 font-bold text-green-600'>
                    <p>Estimasi Keuntungan Anda:</p>
                    <p className='w-32 text-left'>Rp {Math.abs(totalTagihan).toLocaleString('id-ID')}</p>
                </div>
            )}
          </div>
        </div>

        <div className='pt-6'>
          <button
            onClick={handlePesan}
            className="bg-primary-500 text-white px-4 py-1 rounded-sm hover:bg-primary-600"
          >
            Pesan
          </button>
        </div>
      </div>
    </section>
  );
}