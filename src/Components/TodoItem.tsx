import {TodoItemProps} from '../interfaces/TodoItem'

function TodoItem({text, completed, onComplete, onDelete}: TodoItemProps): JSX.Element {
  return (
    <>
      <li className="todo-item">
        <span
          className={`todo-item__icon ${completed && "todo-item__icon--completed"}`}
          onClick={onComplete}
        ></span>
        <p className={`todo-item__text ${completed && "todo-item__text--completed"}`}>{text}</p>
        <span
          className="todo-item__close"
          onClick={onDelete}
        ></span>
      </li>
    </>
  )
}

export { TodoItem }
