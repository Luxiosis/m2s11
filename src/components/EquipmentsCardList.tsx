import  useGetInstruments  from '../hooks/useGetInstruments';
import axios from 'axios';
import './EquipmentsCardList.css'; // Para estilização

const InstrumentCardList = () => {
  const { instruments, loading, error } = useGetInstruments();

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