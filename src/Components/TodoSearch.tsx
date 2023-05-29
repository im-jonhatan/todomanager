import { TodoSearchProps } from "../interfaces/TodoSearch";
import { ReactComponent as SearchSVG } from "../assets/search.svg";

const default_texts: string[] = [
    "Alimentar al michi",
    "Ir al gym",
    "Lavar ropa",
    "Ver anime",
    "Tomar una siesta"
  ]

function TodoSearch({searchValue, setSearchValue}: TodoSearchProps): JSX.Element {

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
      <SearchSVG className="todo-search__icon" fill="none" stroke="var(--main-blue)" />
    </>
  )
}

export { TodoSearch }
