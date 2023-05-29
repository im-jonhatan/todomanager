import { TodoListProps } from "../interfaces/TodoList"


function TodoList(props: TodoListProps): JSX.Element {
  return (
    <ul className="todo-list">
      {props.children}
    </ul>
  )
}

export { TodoList }
