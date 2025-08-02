function Tarefa({ tarefa, removerTarefa, alternarFeita }) {
  console.log('🔎 Renderizando tarefa:', tarefa);
  return (
    <div
      className={`tarefa ${tarefa.feita ? 'feita' : ''}`}
      onClick={() => alternarFeita(tarefa.id)}
    >
      <span>{tarefa.texto}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removerTarefa(tarefa.id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Tarefa;
