// components/OcorrenciaItemPrestador.jsx
export default function OcorrenciaItemUsuario({ ocorrencia }) {
    const { bloco, sala, descricao, status } = ocorrencia;
  
    // Definindo as cores de status para as bolinhas
    const statusColors = {
      verde: 'bg-green-500',
      laranja: 'bg-orange-500',
      vermelho: 'bg-red-500',
    };
  
    // Definindo o número de bolinhas preenchidas com base no status
    const getFilledBubbles = () => {
      switch (status) {
        case 'verde':
          return 1;
        case 'laranja':
          return 2;
        case 'vermelho':
          return 3;
        default:
          return 0;
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
                    bubble <= getFilledBubbles() ? statusColors[status] : 'bg-gray-300'
                  }`}
                />
              ))}
              <span className="font-semibold">Bloco {bloco}</span>
            </div>
            <span className="font-semibold">Sala {sala}</span>
          </div>
          <button className="bg-azul-unifor p-2 ml-4 text-white px-3 py-1 rounded-lg">
            Excluir ocorrência
          </button>
        </div>
        <p className="mt-2 text-gray-600">{descricao}</p>
      </div>
    );
  }
  