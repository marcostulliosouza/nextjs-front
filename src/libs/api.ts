// libs/api.ts
import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log(apiUrl)
// Função para login
export const login = async (col_login: string, col_senha: string) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, { col_login, col_senha });
    const token = response.data.token;
    // Salvar token no cookie
    Cookies.set('auth_token', token, { expires: 7 });
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login', error);
    throw error;
  }
};

// Função para logout
export const logout = async () => {
  try {
    await axios.post(`${apiUrl}/logout`);
    Cookies.remove('auth_token');
  } catch (error) {
    console.error('Erro ao fazer logout', error);
    throw error;
  }
};

// Função para pegar os dados do usuário
export const getUserData = async () => {
  const token = Cookies.get('auth_token');
  if (!token) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await axios.get(`${apiUrl}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter os dados do usuário', error);
    throw error;
  }
};
