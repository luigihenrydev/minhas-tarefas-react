function Tarefa({ tarefa, removerTarefa }) {
  return (
    <div className="tarefa">
      <span>{tarefa.texto}</span>
      <button onClick={() => removerTarefa(tarefa.id)}>X</button>
    </div>
  );
}

export default Tarefa;
