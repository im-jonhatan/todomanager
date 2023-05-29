import { useContext } from "react"
import { TodoCounter } from "./TodoCounter"
import { TodoItem } from "./TodoItem"
import { TodoSearch } from "./TodoSearch"
import { TodoList } from "./TodoList"
import { CreateTodoButton } from "./CreateTodoButton"
import { Modal } from "./Modal"
import { TodoForm } from "./TodoForm"
import { AppContext } from "../interfaces/App"
import { TodoContext } from "../context/TodoContext"


function AppUI(): JSX.Element {
  const { totalTodos, searchedTodos, toggleTodo, deleteTodo, openModal } = useContext<AppContext>(TodoContext)
  return (
    <>
      <TodoCounter />
      { totalTodos > 0 && <TodoSearch /> }
      <TodoList>
        {searchedTodos.map(
          todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={()=>toggleTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
            />
          )
        )}
      </TodoList>
      <CreateTodoButton />
      { openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  )
}

export { AppUI }
