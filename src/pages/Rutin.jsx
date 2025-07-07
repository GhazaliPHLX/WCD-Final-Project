import { useState } from 'react';
import { useAuth } from '../AuthContext';
import supabase from '../config/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Rutin() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [durasi, setDurasi] = useState(null);
  const [waktu, setWaktu] = useState('');
  const [alamat, setAlamat] = useState('');
  const [editMode, setEditMode] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', "Jum’at", 'Sabtu', 'Minggu'];
  const durasiList = [
    { label: '1 Bulan', value: 1, harga: 15000 },
    { label: '3 Bulan', value: 3, harga: 40000 },
    { label: '6 Bulan', value: 6, harga: 70000 },
    { label: '12 Bulan', value: 12, harga: 120000 },
  ];

  const handleSelect = (day) => {
    setSelectedDay(day === selectedDay ? null : day);
  };

  const handlePesan = async () => {
    if (!alamat || !selectedDay || !waktu || !durasi) {
      alert('Mohon lengkapi semua data.');
      return;
    }

    const hargaDurasi = durasiList.find((d) => d.value === durasi)?.harga || 0;

    const { error } = await supabase.from('tb_langganan').insert([
      {
        user_id: user.id,
        alamat,
        hari: selectedDay,
        waktu,
        durasi_bulan: durasi,
        total_harga: hargaDurasi,
      },
    ]);

    if (error) {
      console.error(error);
    } else {
      navigate('/User');
    }
  };

  return (
    <section className='bg-secondary-50 md:pt-16'>
      <h2 className="text-2xl font-semibold text-center mb-4 md:pt-10">Hallo, {user?.username || '...'}!</h2>
      <div className="p-6 rounded-md max-w-3xl mx-auto mt-10">
        <div className="w-full h-64 mb-4">
          <iframe
            src="https://maps.google.com/maps?q=Bekasi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <label className="block text-sm font-medium mb-1">Alamat</label>
        <textarea
          disabled={!editMode}
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          className="w-full p-2 border rounded-md mb-2 bg-white"
        />
        <div className="flex gap-2 mb-4">
          <button onClick={() => setEditMode(true)} className="bg-primary-500 text-white px-4 py-1 rounded-lg hover:bg-primary-600">Edit</button>
          <button onClick={() => setEditMode(false)} className="bg-primary-500 text-white px-4 py-1 rounded-lg hover:bg-primary-600">Simpan</button>
        </div>

        <label className="block text-sm font-medium mb-1">Pilih Jadwal</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 bg-white border rounded-xl px-4 py-3">
          {days.map((day) => (
            <label
              key={day}
              className="flex items-center space-x-2 text-sm text-gray-700 rounded-md px-2 hover:bg-gray-50 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedDay === day}
                onChange={() => handleSelect(day)}
                className="accent-blue-500"
              />
              <span>{day}</span>
            </label>
          ))}
        </div>

        <div className='mt-4 mb-4 max-w-16'>
          <label htmlFor="jam-input" className="block text-sm font-medium mb-1">Waktu</label>
          <input
            type="text"
            name="jam"
            id="jam-input"
            placeholder="--:--"
            className="w-full p-2 border text-center rounded-md bg-white"
            value={waktu}
            onChange={(e) => setWaktu(e.target.value)}
          />
        </div>

        {/* Radio Box Durasi */}
        <label className="block text-sm font-medium mb-1">Durasi Langganan</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {durasiList.map((item) => {
                const isActive = durasi === item.value;
                return (
                <label
                    key={item.value}
                    className={`block border rounded-xl p-4 cursor-pointer text-sm shadow-sm transition duration-200 
                    ${isActive ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-300' : 'hover:shadow-md bg-white'}`}
                >
                    <input
                    type="radio"
                    name="durasi"
                    value={item.value}
                    checked={isActive}
                    onChange={() => setDurasi(item.value)}
                    className="hidden"
                    />
                    <div className="flex flex-col items-center space-y-1">
                    <span className="font-semibold text-gray-800">{item.label}</span>
                    <span className="text-sm text-gray-600">Rp{item.harga.toLocaleString('id-ID')}</span>
                    </div>
                </label>
                );
            })}
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
