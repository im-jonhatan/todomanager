import { ReactNode } from 'react'

interface  PropsTodoList {
  children: ReactNode
}

function TodoList(props: PropsTodoList): JSX.Element {
  return (
    <ul className='todo-list'>
      {props.children}
    </ul>
  )
}

export { TodoList }
