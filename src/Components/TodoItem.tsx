interface PropsTodoItem {
  text: string,
  completed: boolean
}

function TodoItem({text, completed}: PropsTodoItem): JSX.Element {
  return (
    <>
      <li className="todo-item">
        <span className={`todo-item__icon ${completed && "todo-item__icon--completed"}`}></span>
        <p className={`todo-item__text ${completed && "todo-item__text--completed"}`}>{text}</p>
        <span className="todo-item__close"></span>
      </li>
    </>
  )
}

export { TodoItem }
