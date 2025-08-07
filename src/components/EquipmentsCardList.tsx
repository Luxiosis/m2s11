import { useEffect, useState } from 'react';
import axios from 'axios';
import './EquipmentsCardList.css'; // Para estilização

interface Instrument {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  ano: number;
  preco: number;
  ativo: boolean;
  voltagem: string;
  peso_kg: number;
  // Adicione outros campos conforme a estrutura da sua API
}

const InstrumentCardList = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/equipamentos');
        setInstruments(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar os instrumentos');
        setLoading(false);
      }
    };
    fetchInstruments();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card-container">
      {instruments.map((instrument) => (
        <div key={instrument.id} className="card">
          <h3>{instrument.nome}</h3>
          <p>Tipo: {instrument.tipo}</p>
          <p>Marca: {instrument.marca}</p>
          <p>Ano: {instrument.ano}</p>
          <p>Preço: R${instrument.preco.toFixed(2)}</p>
          <p>Ativo: {instrument.ativo ? 'Sim' : 'Não'}</p>
          <p>Voltagem: {instrument.voltagem}</p>
          <p>Peso: {instrument.peso_kg}</p>
        </div>
      ))}
    </div>
  );
};

export default InstrumentCardList;