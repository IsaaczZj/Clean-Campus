import React, { useState, useEffect } from "react";
import axios from "axios";
import OcorrenciaItemUsuario from "./OcorrenciaItemUsuario";

export default function ListaOcorrenciasUsuario() {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOcorrencias = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error(
          "Token de acesso não encontrado. Por favor, faça login novamente."
        );
      }

      const response = await axios.get("http://localhost:3000/ocorrencias", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOcorrencias(response.data);
    } catch (error) {
      setError("Erro ao carregar as ocorrências");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleExcluirOcorrencia = (id) => {
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
        Minhas ocorrências
      </h2>
      {ocorrencias.length > 0 ? (
        ocorrencias.map((ocorrencia) => (
          <OcorrenciaItemUsuario
            key={ocorrencia.id}
            ocorrencia={ocorrencia}
            onExcluir={handleExcluirOcorrencia}
          />
        ))  
      ) : (
        <p>Não há ocorrências registradas.</p>
      )}
    </div>
  );
}
