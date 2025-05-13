import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
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
import AdminNavbar from './Components/Navbar/AdminNavbar';
import AccountConfirmationPage from './Pages/AccountConfirmationPage';
import UserManagementPage from './Pages/UserManagementPage';

function Layout({ children }) {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) return null;

  const adminRoutes = ['/dashboard', '/account-confirmation', '/user-management'];

  return (
    <>
      {/* Show AdminNavbar only for admin routes */}
      {adminRoutes.includes(location.pathname) ? (
        <AdminNavbar />
      ) : isLoggedIn ? (
        <UserNavbar setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Navbar />
      )}

      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<RentNow />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/admin' element={<AdminForm />} />
          <Route path='/rental-section' element={<RentalPage />} />
          <Route path='/dashboard' element={<AdminPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/earnings' element={<EarningsPage />} />
          <Route path='/account-confirmation' element={<AccountConfirmationPage />} />
          <Route path='/user-management' element={<UserManagementPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
