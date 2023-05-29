import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
// import { ReactComponent as SearchSVG } from "../assets/search.svg";
import { AppContext } from "../interfaces/App"

const default_texts: string[] = [
    "Alimentar al michi",
    "Ir al gym",
    "Lavar ropa",
    "Ver anime",
    "Tomar una siesta"
  ]

function TodoSearch(): JSX.Element {
  const { searchValue, setSearchValue } = useContext<AppContext>(TodoContext)
  const placeholder: string = default_texts[Math.floor(Math.random()*default_texts.length)];
  return (
    <>
      <input
        type="text"
        className="todo-search"
        placeholder={placeholder}
        value={searchValue}
        onChange={(event) => {setSearchValue(event.target.value)}}
      />
    </>
  )
}

export { TodoSearch }
