import React from 'react';
import axios from 'axios';

export default function OcorrenciaItemUsuario({ ocorrencia, onExcluir }) {
  const { id, bloco, sala, descricao, severidade } = ocorrencia;

  // Mapeamento de severidade para cores
  const severidadeColors = {
    alta: 'bg-red-500',    // Alta gravidade => Vermelho
    media: 'bg-orange-500', // Média gravidade => Laranja
    baixa: 'bg-green-500',  // Baixa gravidade => Verde
  };

  // Função para determinar quantas bolinhas preencher com base na severidade
  const getFilledBubbles = () => {
    switch (severidade) {
      case 'alta':
        return 3; // 3 bolinhas preenchidas para alta gravidade
      case 'media':
        return 2; // 2 bolinhas preenchidas para média gravidade
      case 'baixa':
        return 1; // 1 bolinha preenchida para baixa gravidade
      default:
        return 0; // Nenhuma bolinha para casos indefinidos
    }
  };

  // Função para excluir a ocorrência
  const excluirOcorrencia = async () => {
    try {
      // Recuperando o token do localStorage ou onde estiver armazenado
      const token = localStorage.getItem('token'); // Altere conforme sua implementação

      // Se não houver token, mostre um erro ou redirecione para login
      if (!token) {
        console.error("Token não encontrado. O usuário não está autenticado.");
        return;
      }

      // Realizando a requisição de exclusão
      await axios.delete(`http://localhost:3000/ocorrencias/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Enviando o token no cabeçalho
        },
      });

      // Chama a função de callback para atualizar a lista no componente pai
      onExcluir(id); 
    } catch (error) {
      console.error("Erro ao excluir a ocorrência:", error);
    }
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-md bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {/* Indicador de gravidade com três bolinhas */}
            {[1, 2, 3].map((bubble) => (
              <div
                key={bubble}
                className={`h-4 w-4 rounded-full ${
                  bubble <= getFilledBubbles()
                    ? severidadeColors[severidade]
                    : 'bg-gray-300'
                }`}
              />
            ))}
            <span className="font-semibold">Bloco {bloco}</span>
          </div>
          <span className="font-semibold">Sala {sala}</span>
        </div>
        <button
          onClick={excluirOcorrencia}
          className="bg-azul-unifor p-2 ml-4 text-white px-3 py-1 rounded-lg"
        >
          Excluir ocorrência
        </button>
      </div>
      <p className="mt-2 text-gray-600">{descricao}</p>
    </div>
  );
}
