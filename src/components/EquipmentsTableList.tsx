import { useEffect, useState } from 'react';
import axios from 'axios';
import './EquipmentsTableList.css'; // Para estilização

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

const InstrumentTableList = () => {
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
    <table className="instrument-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Marca</th>
          <th>Ano</th>
          <th>Preço</th>
          <th>Ativo</th>
          <th>Voltagem</th>
          <th>Peso</th>
        </tr>
      </thead>
      <tbody>
        {instruments.map((instrument) => (
          <tr key={instrument.id}>
            <td>{instrument.id}</td>
            <td>{instrument.nome}</td>
            <td>{instrument.tipo}</td>
            <td>{instrument.marca}</td>
            <td>{instrument.ano}</td>
            <td>R${instrument.preco.toFixed(2)}</td>
            <td>{instrument.ativo ? 'Sim' : 'Não'}</td>
            <td>{instrument.voltagem}</td>
            <td>{instrument.peso_kg}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InstrumentTableList;