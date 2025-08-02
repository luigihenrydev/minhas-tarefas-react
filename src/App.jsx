import { useState, useEffect } from 'react';
import Tarefa from './Tarefa';
import './index.css';

function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (!carregado) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }
  }, [tarefas, carregado]);

  const adicionarTarefa = () => {
    if (!texto.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      texto,
      feita: false,
    };
    setTarefas([...tarefas, novaTarefa]);
    setTexto('');
  };

  const alternarFeita = (id) => {
    const novas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, feita: !tarefa.feita } : tarefa
    );
    setTarefas(novas);
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div className="container">
      <h1>Minhas Tarefas</h1>
      <div className="formulario">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
      <button className="botao-adicionar" onClick={adicionarTarefa}>
         Adicionar
      </button>
      </div>
      {tarefas.map((tarefa, index) => (
        <Tarefa
          key={`${tarefa.id}-${index}`}
          tarefa={tarefa}
          removerTarefa={removerTarefa}
          alternarFeita={alternarFeita}
        />
      ))}
    </div>
  );
}

export default App;
