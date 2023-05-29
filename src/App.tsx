import "./App.css"
import { AppUI } from "./components/AppUI"
import { TodoProvider } from "./context/TodoContext"


function App(): JSX.Element {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

export { App }
