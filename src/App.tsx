import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InstrumentCardList from './components/EquipmentsCardList';
import InstrumentTableList from './components/EquipmentsTableList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <button>
            <Link to="/">Listagem (cards)</Link>
          </button>
          <button>
            <Link to="/tabela">Listagem (tabela)</Link>
          </button>
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