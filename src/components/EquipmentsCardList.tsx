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
      <h2>Lista de Instrumentos</h2>
      <div className="cards-wrapper">
        {instruments.map((instrument) => (
          <div key={instrument.nome + instrument.ano} className="card">
            <h3>{instrument.nome}</h3>
            <p><strong>Tipo:</strong> {instrument.tipo}</p>
            <p><strong>Marca:</strong> {instrument.marca}</p>
            <p><strong>Voltagem:</strong> {instrument.voltagem || 'N/A'}</p>
            <p><strong>Ano:</strong> {instrument.ano}</p>
            <p><strong>Preço:</strong> R$ {instrument.preco.toFixed(2)}</p>
            <p><strong>Peso:</strong> {instrument.peso_kg} kg</p>
            <p><strong>Status:</strong> <span className={instrument.ativo ? 'status-active' : 'status-inactive'}>{instrument.ativo ? 'Ativo' : 'Inativo'}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstrumentCardList;