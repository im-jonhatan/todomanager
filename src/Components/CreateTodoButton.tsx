import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { ReactComponent as PlusSVG } from "../assets/plus.svg";
import { AppContext } from "../interfaces/App"

function CreateTodoButton(): JSX.Element {
  const { openModal, setOpenModal } = useContext<AppContext>(TodoContext)
  const toggleModal= (): void => {
    setOpenModal(!openModal)
  }

  return (
    <button className="create-todo-button"
      onClick={toggleModal}
    >
      <PlusSVG fill="none" stroke="var(--soft-blue)"/>
    </button>
  );

}
export { CreateTodoButton };
