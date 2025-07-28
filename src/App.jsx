import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Modul from './pages/ModulPembelajaran';
import Meet from './pages/Meet';
import ForumDiskusi from './pages/ForumDiskusi';
import Konsultasi from './pages/Konsultasi';
import Statistik from './pages/Statistik';
import CompilerAI from './pages/CompilerAI';
import Akun from './pages/Akun';
import Login from './pages/Login';
// import SubModul from './pages/SubModul';

function App () { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modul" element={<Modul />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/forum" element={<ForumDiskusi />} />
        <Route path="/konsultasi" element={<Konsultasi />} />
        <Route path="/statistik" element={<Statistik />} />
        <Route path="/compilerai" element={<CompilerAI />} />
        <Route path="/akun" element={<Akun />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/submodul" element={<SubModul />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
