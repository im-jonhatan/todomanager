import './App.css'
import { useState } from 'react'
import { useLocalStorage } from './hooks/use-localstorage.hook'
import { TodoItemBase } from './interfaces/TodoItem'
import { AppUI } from './components/AppUI'

// const newTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'llorar con la llorona', completed: false},
// ]

function App(): JSX.Element {

  const [todos, saveTodos] = useLocalStorage<TodoItemBase[]>('TODOMANAGER', [])
  const [searchValue, setSearchValue] = useState<string>("");

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
  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchedTodos={searchedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export { App }
