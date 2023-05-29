import {TodoItemProps} from '../interfaces/TodoItem'
import { TodoIcon } from './TodoIcon'

function TodoItem({text, completed, onComplete, onDelete}: TodoItemProps): JSX.Element {
  return (
    <>
      <li className="todo-item">
        <TodoIcon
         type={completed ? "checked" : "square"}
         onClick={onComplete}

        />
        <p className={`todo-item__text ${completed && "todo-item__text--completed"}`}>{text}</p>
        <TodoIcon
         type={"close"}
         onClick={onDelete}

        />
      </li>
    </>
  )
}

export { TodoItem }
