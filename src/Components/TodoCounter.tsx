import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { AppContext } from "../interfaces/App"


function TodoCounter(): JSX.Element {
  const { completedTodos, totalTodos} = useContext<AppContext>(TodoContext)
  const text: string = totalTodos === 1 ? "tarea" : "tareas";
  const message: string = totalTodos === 0? "Crea tu primera tarea con el boton de abajo a la derecha."
    : totalTodos === completedTodos ? `Felicidades has realizado todas tus tareas, es hora de tomarte un descanzo.`
    : `Has completado ${completedTodos} de ${totalTodos} ${text}`;
  return (
    <h1 className="todo-counter">{message}</h1>
  )
}

export { TodoCounter }
