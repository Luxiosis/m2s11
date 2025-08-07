import { useState, useEffect } from 'react';
import axios from 'axios';

interface Instrument {
  id: number;
  nome: string;
  tipo: string;
  marca: string;
  voltagem: string;
  ano: number;
  preco: number;
  peso_kg: number;
  ativo: boolean;
}

const useGetInstruments = () => {
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
        setError('Erro ao carregar os instrumentos. Verifique a API ou a conexão.');
        setLoading(false);
      }
    };
    fetchInstruments();
  }, []);

  return { instruments, loading, error };
};

export default useGetInstruments;