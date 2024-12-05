// components/ListaOcorrenciasPrestador.jsx
import { useState, useEffect } from 'react';
import OcorrenciaItemPrestador from './OcorrenciaItemPrestador';
import axios from 'axios';

export default function ListaOcorrenciasPrestador() {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOcorrencias = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token de acesso não encontrado. Por favor, faça login novamente.');
      }

      const response = await axios.get('http://localhost:3000/ocorrencias/prestadores', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOcorrencias(response.data);
    } catch (error) {
      setError('Erro ao carregar as ocorrências');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleResolverOcorrencia = (id) => {
    setOcorrencias((prev) => prev.filter((ocorrencia) => ocorrencia.id !== id));
  };

  useEffect(() => {
    fetchOcorrencias();
  }, []);

  if (loading) return <div>Carregando ocorrências...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className="p-4">
      <h2 className="text-center text-azul-unifor text-2xl font-semibold">
        Ocorrências disponíveis
      </h2>
      {ocorrencias.length > 0 ? (
        ocorrencias.map((ocorrencia) => (
          <OcorrenciaItemPrestador
            key={ocorrencia.id}
            ocorrencia={ocorrencia}
            onResolver={handleResolverOcorrencia}
          />
        ))
      ) : (
        <p>Não há ocorrências registradas.</p>
      )}
    </div>
  );
}