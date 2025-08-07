import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InstrumentCardList from './components/EquipmentsCardList';
import InstrumentTableList from './components/EquipmentsTableList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Equipamentos Musicais</h1>
        <nav>
          <Link to="/">Ver em Cards</Link> | <Link to="/tabela">Ver em Tabela</Link>
        </nav>
        <Routes>
          <Route path="/" element={<InstrumentCardList />} />
          <Route path="/tabela" element={<InstrumentTableList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;