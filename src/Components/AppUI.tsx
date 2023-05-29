// import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoContext } from '../context/TodoContext'
import { useContext } from 'react'


function AppUI(): JSX.Element {
  const { totalTodos, searchedTodos, toggleTodo, deleteTodo } = useContext(TodoContext)
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
    </>
  )
}

export { AppUI }
