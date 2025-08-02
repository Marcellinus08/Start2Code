import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/member/Home';
import Modul from './pages/member/ModulPembelajaran';
import Meet from './pages/member/Meet';
import ForumDiskusi from './pages/member/ForumDiskusi';
import Konsultasi from './pages/member/Konsultasi';
import Statistik from './pages/member/Statistik';
import CompilerAI from './pages/member/CompilerAI';
import Akun from './pages/member/Akun';
import Login from './pages/member/Login';
import Dashboard from "./pages/admin/UserManagement";
import SubModul from './pages/member/SubModul';
import MateriSubModul from './pages/Member/MateriSubModul';
import ModulManagement from './pages/admin/ModulManagement';
import Activity from './pages/admin/Activity';
import ModulAdd from './pages/admin/ModulAdd';
import ModulEdit from './pages/admin/ModulEdit';

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
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/submodul/:modulName" element={<SubModul />} />
        <Route path="/materisubmodul" element={<MateriSubModul />} />
        <Route path="/modul_management" element={<ModulManagement />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/modul_add" element={<ModulAdd />} />
        <Route path="/modul_edit" element={<ModulEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
