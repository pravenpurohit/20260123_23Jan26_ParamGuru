import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Lineage from './pages/Lineage';
import SatyaPrakashJi from './pages/SatyaPrakashJi';
import ShardaCharanJi from './pages/ShardaCharanJi';
import Teachings from './pages/Teachings';
import Programs from './pages/Programs';
import Media from './pages/Media';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-amber-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineage" element={<Lineage />} />
            <Route path="/satya-prakash-ji" element={<SatyaPrakashJi />} />
            <Route path="/sharda-charan-ji" element={<ShardaCharanJi />} />
            <Route path="/teachings" element={<Teachings />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/media" element={<Media />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
