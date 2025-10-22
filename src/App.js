import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Profile from './Pages/Profile';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { getFaviconSvg } from './FaviconIcon'; // make sure you have this file

function App() {
  useEffect(() => {
    const favicon = document.getElementById('favicon');
    if (favicon) {
      favicon.href = getFaviconSvg(); // dynamically set the favicon
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
