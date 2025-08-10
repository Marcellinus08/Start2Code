import React, { useState } from 'react';
import LayoutLogin from '@/components/member/layouts/Login/LayoutLogin';
import RoleButton from '@/components/member/elements/Login/RoleButton';
import LoginForm from '@/components/member/fragments/Login/LoginForm';

const Login = () => {
  const [activeRole, setActiveRole] = useState('member');

  return (
    <LayoutLogin>
      <div className="p-8 sm:p-16 flex flex-col justify-center">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Selamat Datang!</h2>
          <p className="text-gray-500 text-lg">Silakan masuk untuk melanjutkan.</p>
        </div>
        <div className="mb-8 p-1.5 rounded-full bg-[#4285F4] flex space-x-1.5">
          <RoleButton icon="school" label="Member" active={activeRole === 'member'} onClick={() => setActiveRole('member')} />
          <RoleButton icon="menu_book" label="Mentor" active={activeRole === 'mentor'} onClick={() => setActiveRole('mentor')} />
          <RoleButton icon="admin_panel_settings" label="Admin" active={activeRole === 'admin'} onClick={() => setActiveRole('admin')} />
        </div>
        <LoginForm selectedRole={activeRole} />
      </div>
    </LayoutLogin>
  );
};

export default Login;
