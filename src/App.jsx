import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Member/Home';
import Modul from './pages/Member/ModulPembelajaran';
import Meet from './pages/Member/Meet';
import ForumDiskusi from './pages/Member/ForumDiskusi';
import Konsultasi from './pages/Member/Konsultasi';
import Statistik from './pages/Member/Statistik';
import CompilerAI from './pages/Member/CompilerAI';
import Akun from './pages/Member/Akun';
import Login from './pages/Member/Login';
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
        {/* <Route path="/submodul" element={<SubModul />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
