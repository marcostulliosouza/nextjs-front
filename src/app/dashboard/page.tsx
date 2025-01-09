// src/app/dashboard/page.tsx
'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/AuthContext';

const DashboardPage = () => {
  const { user, logout } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirecionar para o login se não estiver autenticado
    }
  }, [user, router]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {user ? (
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl text-gray-800 mb-6">Bem-vindo, {user.col_nome}</h1>
          <button
            onClick={logout}
            className="bg-red-500 text-white py-2 px-6 rounded-md text-lg hover:bg-red-400 transition"
          >
            Sair
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Redirecionando para login...</p>
      )}
    </div>
  );
};

export default DashboardPage;
