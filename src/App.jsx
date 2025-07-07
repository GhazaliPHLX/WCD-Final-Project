import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Homepage from './pages/Homepage';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Panggilan from './pages/Panggilan';
import Rutin from './pages/Rutin';
import Riwayat from './pages/Riwayat';
import Footer from './Footer';


function App() {
  return (
    
    <AuthProvider>
    <BrowserRouter basename="/WCD-Final-Project">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Sampah" element={<Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/User" element={<Dashboard />} />
        <Route path="/Panggilan" element={<Panggilan />} />
        <Route path="/Rutin" element={<Rutin />} />
        <Route path="/Riwayat" element={<Riwayat />} />



      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App; 
