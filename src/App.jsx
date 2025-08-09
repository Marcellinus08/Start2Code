import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/member/Home';
import Modul from './pages/member/ModulPembelajaran';
import Meet from './pages/member/Meet';
import ForumDiskusi from './pages/member/ForumDiskusi';
import Konsultasi from './pages/member/Konsultasi';
import Statistik from './pages/member/Statistik';
import CompilerAI from './pages/member/CompilerAI';
import Akun from './pages/member/Akun';
import Login from './pages/member/Login';
import SubModul from './pages/member/SubModul';
import MateriSubModul from './pages/member/MateriSubModul';
import JoinRoom from './components/member/fragments/meet/JoinForm';
import Room from './pages/member/Room'; 
import Dashboard from './pages/admin/UserManagement';
import ModulManagement from './pages/admin/ModulManagement';
import Activity from './pages/admin/Activity';
import ModulAdd from './pages/admin/ModulAdd';
import ModulEdit from './pages/admin/ModulEdit';
import JadwalKelas from './pages/mentor/JadwalKelas';
import ForumMentor from './pages/mentor/ForumMentor';
import KonsultasiMentor from './pages/mentor/KonsultasiMentor';
import RekamanMentor from './pages/mentor/RekamanMentor';
import ProgressMentor from './pages/mentor/ProgressMentor';


function App() {
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
        <Route path="/submodul/:modulName" element={<SubModul />} />
        <Route path="/materi/:submodulId" element={<MateriSubModul />} />
        <Route path="/joinroom" element={<JoinRoom />} />
        <Route path="/room/:roomCode" element={<Room />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/modul_management" element={<ModulManagement />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/modul_add" element={<ModulAdd />} />
        <Route path="/modul_edit" element={<ModulEdit />} />
        <Route path="/mentor" element={<JadwalKelas />} />
        <Route path="/forum_mentor" element={<ForumMentor />} />
        <Route path="/konsultasi_mentor" element={<KonsultasiMentor />} />
        <Route path="/rekaman_mentor" element={<RekamanMentor />} />
        <Route path="/progres_mentor" element={<ProgressMentor />} />
      </Routes>
    </Router>
  );
}

export default App;

