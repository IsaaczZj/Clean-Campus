import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header';
import { Navigate } from 'react-router-dom';

const RegistrarOcorrencia = () => {
  const [formData, setFormData] = useState({
    categoria_id: '',
    bloco: '',
    sala: '',
    descricao: '',
    severidade: '',
  });
  const [successMessage, setSuccessMessage] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Recuperar o token do localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('Token de acesso não encontrado. Por favor, faça login novamente.');
      }

      // Enviar dados como JSON
      const response = await axios.post('http://localhost:3000/ocorrencias', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Ocorrência registrada:', response.data);

      // Mostrar mensagem de sucesso e limpar formulário
      setSuccessMessage(
        `Ocorrência registrada com sucesso!
         Bloco: ${formData.bloco}, Sala: ${formData.sala}, Severidade: ${formData.severidade}`
      );
      setFormData({
        categoria_id: '',
        bloco: '',
        sala: '',
        descricao: '',
        severidade: '',
      });

      // Redirecionar após 2 segundos
      setTimeout(() => setRedirect(true), 2000);
    } catch (error) {
      console.error('Erro ao registrar ocorrência:', error);
    }
  };

  // Redirecionar para /clientes/home
  if (redirect) {
    return <Navigate to="/usuario/home" />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-azul-unifor">
      <Header />
      <div className="justify-center items-center flex flex-col mt-4 gap-2 bg-azul-unifor">
        <form className="bg-white m-2 gap-2 p-10 mt-10 rounded-lg" onSubmit={handleSubmit}>
          {/* Categoria */}
          <label className="flex flex-col">
            Categoria
            <select
              name="categoria_id"
              value={formData.categoria_id}
              onChange={handleChange}
              className="w-60 h-14 border rounded-md shadow-lg"
            >
              <option value="" disabled>
                Selecione a categoria
              </option>
              <option value="1">Limpeza</option>
              <option value="2">Manutenção de equipamentos</option>
              <option value="3">Problemas elétricos</option>
              <option value="4">Climatização</option>
            </select>
          </label>

          {/* Bloco */}
          <label className="flex flex-col mt-4">
            Bloco
            <input
              type="text"
              name="bloco"
              value={formData.bloco}
              onChange={handleChange}
              className="w-24 h-10 border rounded-md shadow-lg border-gray-800"
            />
          </label>

          {/* Sala */}
          <label className="flex flex-col mt-4">
            Sala
            <input
              type="text"
              name="sala"
              value={formData.sala}
              onChange={handleChange}
              className="w-24 h-10 border rounded-md shadow-lg border-gray-800"
            />
          </label>

          {/* Descrição */}
          <label className="flex flex-col mt-4">
            Descrição
            <input
              type="text"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="w-60 h-10 border rounded-md shadow-lg border-gray-800"
            />
          </label>

          {/* Severidade */}
          <label className="flex flex-col mt-4">
            Severidade
            <select
              name="severidade"
              value={formData.severidade}
              onChange={handleChange}
              className="w-60 h-14 border rounded-md shadow-lg"
            >
              <option value="" disabled>
                Selecione a severidade
              </option>
              <option value="Alta">Alta</option>
              <option value="Média">Média</option>
              <option value="Baixa">Baixa</option>
            </select>
          </label>

          {/* Botão de submissão */}
          <button
            type="submit"
            className="p-2 w-full bg-azul-unifor rounded-xl text-white hover:bg-blue-900 mt-4"
          >
            Registrar Ocorrência
          </button>
        </form>

        {/* Mensagem de sucesso */}
        {successMessage && (
          <div className="mt-4 p-4 bg-green-200 text-green-700 rounded-lg shadow-md">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrarOcorrencia;
