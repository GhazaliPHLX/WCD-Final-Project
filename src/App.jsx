import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './pages/Homepage';
import Order from './pages/Order';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './AuthContext';
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


      </Routes>
      <Footer/>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App; 
