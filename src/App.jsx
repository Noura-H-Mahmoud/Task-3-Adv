import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import DetailPage from './pages/DetailPage/DetailPage';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/Task-2/' element={<LandingPage />} />
        <Route path='/Task-2/detail' element={<DetailPage />} />
        <Route path='/Task-2/properties' element={<PropertiesPage />} />
        <Route path='/Task-2/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;

