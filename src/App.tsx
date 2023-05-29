import.meta.hot
import './App.css'
import { TodoCounter } from './components/TodoCounter'
import { TodoItem } from './components/TodoItem'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  {text: 'cortar cebolla', completed: true},
  {text: 'llorar con la llorona', completed: false},
]
function App(): JSX.Element {
  return (
    <>
    <TodoCounter completed={3} total={5}/>
    <TodoSearch />
    <TodoList>
      {defaultTodos.map(
        todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        )
      )}
    </TodoList>
    <CreateTodoButton />
    </>
  )
}

export { App }
