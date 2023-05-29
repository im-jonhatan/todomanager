// import React from 'react'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { AppUIProps } from '../interfaces/AppUI'


function AppUI({
  completedTodos,
  totalTodos,
  searchedTodos,
  searchValue,
  setSearchValue,
  toggleTodo,
  deleteTodo
}: AppUIProps): JSX.Element {
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

export { AppUI }
