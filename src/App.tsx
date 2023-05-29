import './App.css'
import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter'
import { TodoItem } from './components/TodoItem'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton'
import { TodoItemI } from './interfaces/TodoItem';

// const newTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'llorar con la llorona', completed: false},
// ]
function App(): JSX.Element {
  const localStorageTodos = localStorage.getItem('TODOMANAGER')

  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOMANAGER', JSON.stringify([]))
    parsedTodos = []
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const saveTodos = (newTodos: TodoItemI[]) => {
    localStorage.setItem('TODOMANAGER', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState<TodoItemI[]>(parsedTodos)
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
    saveTodos(newTodos);
  }
  const deleteTodo = (text: string) => {
    const newTodos = todos.filter(
      (todo) => (todo.text != text)
    )
    saveTodos(newTodos);
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
