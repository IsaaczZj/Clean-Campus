import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import imagem from '../../assets/Clean Campus (3) 1.jpg';

export const FormUsuario = () => {
  const [formData, setFormData] = useState({
    email: '',
    ra: '',
    senha: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Estado para verificar sucesso
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/clientes/cadastro', formData);
      setMessage('Cadastro realizado com sucesso!');
      setIsSuccess(true); // Sinaliza sucesso no cadastro
      setTimeout(() => {
        navigate('/usuario/login'); // Redireciona após 2 segundos
      }, 2000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Erro ao realizar cadastro');
      setIsSuccess(false); // Reseta sinal de sucesso
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-azul-unifor">
      <div className="flex flex-col items-center justify-center gap-5 p-8">
        <h1 className="text-white font-medium text-2xl">
          Bem vindo ao Clean Campus
        </h1>
        <div>
          <img className="h-60 rounded-2xl" src={imagem} alt="Banner" />
        </div>
        <div className="bg-white px-4 py-2 gap-6 rounded-xl mt-5 flex flex-col items-center justify-center w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="ra">
                Matrícula
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="number"
                name="ra"
                value={formData.ra}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="senha">
                Senha
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="p-2 w-full bg-azul-unifor rounded-xl text-white hover:bg-sky-800"
            >
              Cadastrar
            </button>
          </form>
          {message && (
            <div
              className={`mt-4 p-2 rounded-lg text-center w-full ${
                isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {message}
            </div>
          )}
          <p>
            Já tem uma conta?{' '}
            <a className="text-azul-unifor" href="/login">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
