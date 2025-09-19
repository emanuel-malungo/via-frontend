import axios from 'axios';

const BASEURL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const api = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 segundos timeout
});

// Interceptor para tratar erros de forma consistente
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro da API
      console.error('Erro da API:', error.response.status, error.response.data);
    } else if (error.request) {
      // Erro de rede
      console.error('Erro de rede:', error.request);
    } else {
      // Erro de configuração
      console.error('Erro de configuração:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
