import { useState } from 'react';
import './index.css';
import Tarefa from './Tarefa';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;

    const nova = {
      id: Date.now(),
      texto: novaTarefa,
      categoria: 'geral',
      feita: false
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa('');
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  const alternarFeita = (id) => {
  console.log("Alternando tarefa ID:", id);
  setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, feita: !tarefa.feita } : tarefa
    )
  );
};

  return (
    <div className="container">
      <h1>Minhas Tarefas</h1>

      <div className="formulario">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={novaTarefa}
          onChange={e => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

        <div className="lista-tarefas">
        {tarefas.map(tarefa => (
            <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            removerTarefa={removerTarefa}
            alternarFeita={alternarFeita}
            />
        ))}
        </div>
    </div>
  );
}

export default App;
