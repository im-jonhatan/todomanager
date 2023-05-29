import {TodoCounterProps} from '../interfaces/TodoCounter'


function TodoCounter({total, completed}: TodoCounterProps): JSX.Element {
  const text: string = total == 1 ? "tarea" : "tareas";
  const message: string = total === 0? "Crea tu primera tarea con el boton de abajo a la derecha."
    : total === completed ? `Felicidades has realizado todas tus tareas, es hora de tomarte un descanzo.`
    : `Has completado ${completed} de ${total} ${text}`;
  return (
    <h1 className="todo-counter">{message}</h1>
  )
}

export { TodoCounter }
