import { useState, useEffect } from 'react';
import axios from 'axios';
import OcorrenciaItemPrestador from './OcorrenciaItemPrestador';

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

  useEffect(() => {
    fetchOcorrencias();
  }, []);

  const handleResolverOcorrencia = (id) => {
    setOcorrencias((prev) => prev.filter((ocorrencia) => ocorrencia.id !== id));
  };

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          {ocorrencias.map((ocorrencia) => (
            <OcorrenciaItemPrestador
              key={ocorrencia.id}
              ocorrencia={ocorrencia}
              onResolver={handleResolverOcorrencia}
            />
          ))}
        </div>
      )}
    </div>
  );
}