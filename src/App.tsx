import './App.css'
import { AppUI } from './components/AppUI'
import { TodoProvider } from './context/TodoContext'

// const newTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'llorar con la llorona', completed: false},
// ]

function App(): JSX.Element {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export { App }
