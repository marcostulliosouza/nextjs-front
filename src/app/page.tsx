// src/app/page.tsx
'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '../context/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext)!;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard'); // Redirecionar para o dashboard se já estiver autenticado
    } else {
      router.push('/login'); // Redirecionar para a página de login se não estiver autenticado
    }
  }, [user, router]);

  return (
    <div>
      <h1>Carregando...</h1>
    </div>
  );
};

export default HomePage;
