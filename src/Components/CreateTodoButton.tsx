import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import PlusSVG from "../assets/plus.svg?react";
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
      <PlusSVG/>
    </button>
  );

}
export { CreateTodoButton };
