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
import SubModul from './pages/Member/SubModul';
import MateriSubModul from './pages/Member/MateriSubModul';
import JoinRoom from './components/Member/fragments/meet/JoinForm';
import Room from './pages/Member/Room'; 
import Dashboard from './pages/admin/UserManagement';
import ModulManagement from './pages/admin/ModulManagement';
import Activity from './pages/admin/Activity';
import ModulAdd from './pages/admin/ModulAdd';
import ModulEdit from './pages/admin/ModulEdit';


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
      </Routes>
    </Router>
  );
}

export default App;

