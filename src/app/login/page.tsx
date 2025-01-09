// src/app/login/page.tsx
'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/AuthContext';

const LoginPage = () => {
  const [col_login, setColLogin] = useState('');
  const [col_senha, setColSenha] = useState('');
  const { login } = useContext(AuthContext)!;
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await login(col_login, col_senha);
      router.push('/dashboard'); // Redirecionar para a tela principal
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="col_login" className="block text-sm font-medium text-gray-700">
              Login
            </label>
            <input
              type="text"
              id="col_login"
              value={col_login}
              onChange={(e) => setColLogin(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="col_senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="col_senha"
              value={col_senha}
              onChange={(e) => setColSenha(e.target.value)}
              required
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600 flex justify-center items-center">
          Desenvolvido por{' '}
          <span className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
            Marcos Tullio
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
