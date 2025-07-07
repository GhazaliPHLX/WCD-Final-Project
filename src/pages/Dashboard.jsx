import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';
import { IoCheckbox } from "react-icons/io5";
import { AiFillCloseSquare } from "react-icons/ai";
import { LuCalendarClock, LuCalendarSync } from "react-icons/lu";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pesanan, setPesanan] = useState([]);
  const [langganan, setLangganan] = useState([]);

  // Ambil pesanan panggilan
  useEffect(() => {
    const fetchPesanan = async () => {
      const { data, error } = await supabase
        .from('tb_pesanan')
        .select('*')
        .eq('user_id', user.id)
        .order('id', { ascending: false });

      if (!error) setPesanan(data);
    };

    const fetchLangganan = async () => {
      const { data, error } = await supabase
        .from('tb_langganan')
        .select('*')
        .eq('user_id', user.id)
        .order('id', { ascending: false });

      if (!error) setLangganan(data);
    };

    if (user) {
      fetchPesanan();
      fetchLangganan();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center space-y-10 md:pt-16">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center pt-10">
        Hai, {user?.username || '...'}!
      </h1>

      {/* Ketentuan Layanan */}
      <div className="bg-primary-50 rounded-lg shadow-md w-full max-w-5xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-center">Ketentuan Layanan</h2>
        <div className="text-sm text-gray-700 space-y-3">
          <p className="font-medium">1. Kondisi Sampah Saat Dijemput</p>
          <p>Kualitas sampah yang Anda siapkan sangat memengaruhi nilai dan kelancaran proses.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="flex items-start">
              <IoCheckbox className="text-green-600 mr-2 mt-0.5 w-8" />
              <span><strong>Terpilah Sesuai Jenis:</strong> Misal: botol plastik, kardus, dll.</span>
            </li>
            <li className="flex items-start">
              <IoCheckbox className="text-green-600 mr-2 mt-0.5 w-8" />
              <span><strong>Kering dan Relatif Bersih:</strong> Sudah dibilas dan tidak basah.</span>
            </li>
          </ul>

          <p className="font-medium">2. Jenis Sampah yang TIDAK Kami Layani</p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="flex items-start"><AiFillCloseSquare className="text-red-600 mr-2 mt-0.5 w-8" /><span><strong>Sampah Organik</strong></span></li>
            <li className="flex items-start"><AiFillCloseSquare className="text-red-600 mr-2 mt-0.5 w-8" /><span><strong>B3 & Limbah Medis</strong></span></li>
            <li className="flex items-start"><AiFillCloseSquare className="text-red-600 mr-2 mt-0.5 w-8" /><span><strong>Residu (popok, masker, dsb)</strong></span></li>
            <li className="flex items-start"><AiFillCloseSquare className="text-red-600 mr-2 mt-0.5 w-8" /><span><strong>Puing dan furnitur besar</strong></span></li>
          </ul>
        </div>
      </div>

      {/* Menu Layanan */}
      <div className="flex flex-row flex-wrap justify-center gap-6 bg-primary-50 rounded-lg shadow-md w-full max-w-5xl py-4">
        <button onClick={() => navigate('/panggilan')} className="flex flex-col items-center bg-transparent cursor-pointer">
            <div className="w-20 h-20 bg-warning-500 rounded-xl flex items-center justify-center shadow-md">
            <LuCalendarClock className="w-10 h-10" />
            </div>
            <p className="mt-2 font-medium text-gray-700">Layanan Panggilan</p>
        </button>
        <button onClick={() => navigate('/rutin')} className="flex flex-col items-center bg-transparent cursor-pointer">
            <div className="w-20 h-20 bg-warning-500 rounded-xl flex items-center justify-center shadow-md">
            <LuCalendarSync className="w-10 h-10" />
            </div>
            <p className="mt-2 font-medium text-gray-700">Layanan Rutin</p>
        </button>
        </div>


      {/* Pesanan Panggilan */}
      <div className="w-full max-w-5xl bg-white mt-8 border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Pesanan Panggilan</h3>
        {pesanan.length === 0 ? (
          <p className="text-sm text-gray-500">Belum ada pesanan panggilan.</p>
        ) : (
          <ul className="space-y-3">
            {pesanan.map((p) => (
              <li key={p.id} className="border rounded-md p-3 shadow-sm bg-secondary-50">
                <div className='flex items-center gap-4'>    
                  <div className="w-20 h-20 bg-warning-500 rounded-xl flex items-center justify-center shadow-md">
                    <LuCalendarClock className="w-16 h-16" />
                  </div>
                  <div>
                    <p className="font-medium">Tanggal: {new Date(p.tanggal).toLocaleDateString('id-ID')}</p>
                    <p className="text-sm text-gray-600">Alamat: {p.alamat}</p>
                    <p className="text-sm text-gray-600">Waktu: {p.waktu}</p>
                    <p className="text-sm font-semibold">Total: Rp{p.total_harga.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Langganan Rutin */}
      <div className="w-full max-w-5xl bg-white mt-4 border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Langganan Rutin</h3>
        {langganan.length === 0 ? (
          <p className="text-sm text-gray-500">Belum ada langganan aktif.</p>
        ) : (
          <ul className="space-y-3">
            {langganan.map((l) => (
              <li key={l.id} className="border rounded-md p-3 shadow-sm bg-primary-50">
                <div className='flex items-center gap-4'>
                  <div className="w-20 h-20 bg-warning-500 rounded-xl flex items-center justify-center shadow-md">
                    <LuCalendarSync className="w-14 h-14" />
                  </div>
                  <div>
                    <p className="font-medium">Hari: {l.hari}</p>
                    <p className="text-sm text-gray-600">Alamat: {l.alamat}</p>
                    <p className="text-sm text-gray-600">Waktu: {l.waktu}</p>
                    <p className="text-sm text-gray-600">Durasi: {l.durasi_bulan} bulan</p>
                    <p className="text-sm font-semibold">Total: Rp{l.total_harga.toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
