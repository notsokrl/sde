import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RentNow from './Pages/RentNow';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import LoginForm from './Pages/LoginForm';
import RegisterForm from './Pages/RegisterForm';
import AdminForm from './Pages/AdminForm';
import RentalPage from './Pages/RentalPage';
import UserNavbar from './Components/Navbar/UserNavbar';
import ProfilePage from './Pages/ProfilePage';
import EarningsPage from './Pages/EarningsPage';
import AdminPage from './Pages/AdminPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = not yet determined

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) return null; // Or a loading spinner if preferred

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <UserNavbar setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Navbar />
      )}


      <Routes>
        <Route path='/' element={<RentNow />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />

        <Route path='/register' element={<RegisterForm />} />
        <Route path='/admin' element={<AdminForm />} />
        <Route path='/rental-section' element={<RentalPage />} />
        <Route path='/dashboard' element={<AdminPage />} />

        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/earnings' element={<EarningsPage />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
