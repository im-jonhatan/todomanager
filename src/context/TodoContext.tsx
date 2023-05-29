import { useState, createContext, ReactNode } from "react"
import { useLocalStorage } from "../hooks/use-localstorage.hook"
import { TodoItemBase } from "../interfaces/TodoItem"
import { AppContext } from "../interfaces/App"

const TodoContext = createContext<AppContext>({} as AppContext);

function TodoProvider({children}: {children: ReactNode}): JSX.Element {
  const [todos, saveTodos] = useLocalStorage<TodoItemBase[]>("TODOMANAGER", [])
  const [searchValue, setSearchValue] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false)

  const completedTodos: number = todos.filter(item => item.completed === true).length;
  const totalTodos: number = todos.length;
  const searchedTodos = todos.filter(
    (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  )

  const toggleTodo = (text: string): void => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos);
  }
  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(
      (todo) => (todo.text !== text)
    )
    saveTodos(newTodos);
  }
  const addTodo = (text: string): void => {
    const newTodos = [...todos]
    newTodos.push({text: text, completed: false})
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{completedTodos, totalTodos, searchedTodos, searchValue, setSearchValue, toggleTodo, deleteTodo, openModal, setOpenModal, addTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
