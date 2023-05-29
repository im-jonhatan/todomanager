const default_texts: string[] = [
    "Alimentar al michi",
    "Ir al gym",
    "Lavar ropa",
    "Ver anime",
    "Tomar una siesta"
  ]
function TodoSearch(): JSX.Element {
  const placeholder: string = default_texts[Math.floor(Math.random()*default_texts.length)];
  return (
    <input type="text" className="todo-search" placeholder={placeholder} />
  )
}

export { TodoSearch }
