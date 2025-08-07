import { useEffect, useState } from "react";
import axios from "axios";
import "./EquipmentsTableList.css"; // Para estilização
import useGetInstruments from '../hooks/useGetInstruments';

const InstrumentTableList = () => {
  const { instruments, loading, error } = useGetInstruments();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-container">
      <h2>Lista de Instrumentos</h2>
      <table className="instrument-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Voltagem</th>
            <th>Ano</th>
            <th>Preço (R$)</th>
            <th>Peso (kg)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <tr key={instrument.nome + instrument.ano}>
              <td>{instrument.nome}</td>
              <td>{instrument.tipo}</td>
              <td>{instrument.marca}</td>
              <td>{instrument.voltagem}</td>
              <td>{instrument.ano}</td>
              <td>R${instrument.preco.toFixed(2)}</td>
              <td>{instrument.peso_kg}</td>
              <td>{instrument.ativo ? 'true' : 'false'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstrumentTableList;

