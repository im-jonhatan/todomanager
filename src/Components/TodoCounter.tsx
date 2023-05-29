interface  PropsTodoCounter {
  total: number,
  completed: number
}

function TodoCounter({total, completed}: PropsTodoCounter): JSX.Element {
  const text: string = total == 1 ? "tarea" : "tareas";
  return (
    <h1 className="todo-counter">Has completado {completed} de {total} {text}</h1>
  )
}

export { TodoCounter }
