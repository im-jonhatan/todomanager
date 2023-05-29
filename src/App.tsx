import './App.css'
import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter'
import { TodoItem } from './components/TodoItem'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoItemI } from './interfaces/TodoItem';

const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'llorar con la llorona', completed: false},
]
function App(): JSX.Element {
  const [todos, setTodos] = useState<TodoItemI[]>(defaultTodos)
  const [searchValue, setSearchValue] = useState<string>("");

  const completedTodos: number = todos.filter(item => item.completed === true).length;
  const totalTodos: number = todos.length;
  const searchedTodos: TodoItemI[] = todos.filter(
    (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  )

  const toggleTodo = (text: string): void => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }
  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(
      (todo) => (todo.text != text)
    )
    setTodos(newTodos)
  }
  return (
    <>
    <TodoCounter completed={completedTodos} total={totalTodos}/>
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
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
    </>
  )
}

export { App }
