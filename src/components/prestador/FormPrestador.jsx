import { useState } from "react";
import axios from "axios";
import imagem from "../../assets/Clean Campus (3) 1.jpg";
import { useNavigate } from 'react-router-dom';

export const FormPrestador = () => {
  const [successMessage, setSuccessMessage] = useState(""); // Estado para controlar a mensagem de sucesso
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      ra: event.target.ra.value,
      senha: event.target.senha.value,
      tipo_servico: event.target.tipo_servico.value,
    };

    try {
      const response = await axios.post("http://localhost:3000/prestadores/cadastro", formData);
      setSuccessMessage("Cadastro realizado com sucesso!");
      setTimeout(() => {
        navigate('/prestador/login'); // Redireciona após 2 segundos
      }, 500);
      console.log(response.data);

     
    } catch (error) {
      alert(`Erro no cadastro: ${error.response?.data?.message || "Tente novamente mais tarde"}`);
    }
  };

  return (
    <div className="w-screen min-h-screen overflow-auto bg-azul-unifor">
      <div className="flex flex-col items-center justify-center gap-5 p-8">
        <h1 className="text-white font-medium text-2xl text-center md:text-3xl">
          Bem-vindo ao Clean Campus
        </h1>
        <div>
          <img
            className="h-60 rounded-2xl w-full object-cover"
            src={imagem}
            alt="Imagem de boas-vindas"
          />
        </div>
        <div className="bg-white px-4 py-6 gap-6 rounded-xl mt-5 flex flex-col items-center justify-center w-full max-w-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="ra">
                R.A
              </label>
              <input
                id="ra"
                name="ra"
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="number"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="senha">
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="password"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="tipo-servico">
                Tipo de Serviço
              </label>
              <select
                id="tipo-servico"
                name="tipo_servico"
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                required
              >
                <option value="1">Limpeza</option>
                <option value="2">Manutenção de Equipamentos</option>
                <option value="3">Problemas Elétricos</option>
                <option value="4">Climatização</option>
              </select>
            </div>
            <button className="p-2 w-full bg-azul-unifor rounded-xl text-white hover:bg-sky-800">
              Cadastrar
            </button>
          </form>
          {successMessage && ( // Exibe a mensagem de sucesso se estiver definida
            <div className="bg-green-100 text-green-700 p-3 rounded-lg w-full text-center">
              {successMessage}
            </div>
          )}
          <p className="text-center">
            Já tem uma conta? <a className="text-azul-unifor" href="">Faça login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
