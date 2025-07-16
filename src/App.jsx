import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modul from './pages/ModulPembelajaran';
import Meet from './pages/Meet';
import ForumDiskusi from './pages/ForumDiskusi';
import Konsultasi from './pages/Konsultasi';
import Statistik from './pages/Statistik';
import CompilerAI from './pages/CompilerAI';
import Akun from './pages/Akun';
// import SubModul from './pages/SubModul';
// import NotFound from './pages/NotFound';

function App () { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modul" element={<Modul />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/forum" element={<ForumDiskusi />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/compilerai" element={<CompilerAI />} />
        <Route path="/akun" element={<Akun />} />
        {/* <Route path="/submodul" element={<SubModul />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
