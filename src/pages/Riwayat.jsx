import { useAuth } from '../AuthContext';
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';
import { LuCalendarClock, LuCalendarSync } from 'react-icons/lu';

export default function Riwayat() {
  const { user } = useAuth();
  const [pesanan, setPesanan] = useState([]);
  const [langganan, setLangganan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      const { data: pesananData } = await supabase
        .from('tb_pesanan')
        .select('*')
        .eq('user_id', user.id)
        .order('id', { ascending: false });

      const { data: langgananData } = await supabase
        .from('tb_langganan')
        .select('*')
        .eq('user_id', user.id)
        .order('id', { ascending: false });

      setPesanan(pesananData || []);
      setLangganan(langgananData || []);
    };

    fetchData();
  }, [user]);

  return (
    <section className="bg-white min-h-screen py-16 px-4 md:px-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Riwayat Layanan</h1>

      {/* PESANAN */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-xl font-semibold mb-4">Riwayat Panggilan</h2>
        {pesanan.length === 0 ? (
          <p className="text-sm text-gray-500">Belum ada riwayat panggilan.</p>
        ) : (
          <ul className="space-y-3">
            {pesanan.map((item) => (
              <li key={item.id} className="bg-secondary-50 border rounded-md p-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-warning-500 rounded-xl flex items-center justify-center shadow-md">
                  <LuCalendarClock className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-sm">
                  <p><strong>Tanggal:</strong> {new Date(item.tanggal).toLocaleDateString('id-ID')}</p>
                  <p><strong>Alamat:</strong> {item.alamat}</p>
                  <p><strong>Waktu:</strong> {item.waktu}</p>
                  <p><strong>Total:</strong> Rp{item.total_harga?.toLocaleString('id-ID')}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* LANGGANAN */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Riwayat Langganan</h2>
        {langganan.length === 0 ? (
          <p className="text-sm text-gray-500">Belum ada riwayat langganan.</p>
        ) : (
          <ul className="space-y-3">
            {langganan.map((item) => (
              <li key={item.id} className="bg-secondary-50 border rounded-md p-4 flex gap-4 items-center">
                <div className="w-16 h-16 bg-warning-500 rounded-xl flex items-center justify-center shadow-md">
                  <LuCalendarSync className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1 text-sm">
                  <p><strong>Hari:</strong> {item.hari}</p>
                  <p><strong>Alamat:</strong> {item.alamat}</p>
                  <p><strong>Waktu:</strong> {item.waktu}</p>
                  <p><strong>Durasi:</strong> {item.durasi || '-'}</p>
                  <p><strong>Harga:</strong> Rp{item.total_harga?.toLocaleString('id-ID')}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
