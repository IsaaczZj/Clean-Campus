import React from 'react';
import axios from 'axios';

export default function OcorrenciaItemPrestador({ ocorrencia, onResolver }) {
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

  // Função para resolver a ocorrência
  const resolverOcorrencia = async () => {
    try {
      // Recuperando o token do localStorage
      const token = localStorage.getItem('token');

      if (!token) {
        console.error("Token não encontrado. O usuário não está autenticado.");
        return;
      }

      // Realizando a requisição para resolver a ocorrência
      await axios.post(`http://localhost:3000/ocorrencias/resolver/${id}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Chama a função de callback para atualizar a lista no componente pai
      onResolver(id); 
    } catch (error) {
      console.error("Erro ao resolver a ocorrência:", error);
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
          onClick={resolverOcorrencia}
          className="bg-azul-unifor p-2 ml-4 text-white px-3 py-1 rounded-lg"
        >
          Resolver ocorrência
        </button>
      </div>
      <p className="mt-2 text-gray-600">{descricao}</p>
    </div>
  );
}
