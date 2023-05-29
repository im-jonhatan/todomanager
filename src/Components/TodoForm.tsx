import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { ReactComponent as CloseSVG } from "../assets/x.svg";
import { TodoContext } from "../context/TodoContext";
import { AppContext } from "../interfaces/App"


function TodoForm(): JSX.Element {
  const [newTodoValue, setNewTodoValue] = useState<string>("");
  const { setOpenModal, addTodo } = useContext<AppContext>(TodoContext)

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoValue(event.target.value);
  };

  const closeModal = (): void => setOpenModal(false)

  return (
    <>
      <form onSubmit={onSubmit}>
        <label className="todo-form__title">Crea una nueva tarea.</label>
        <input
          className="todo-form__input"
          type="text"
          placeholder="Tarea"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="todo-form__button-container">
          <button
            type="button"
            className="todo-form__button todo-form__button--cancel"
            onClick={closeModal}
          >Cancelar</button>
          <button
            type="submit"
            className="todo-form__button todo-form__button--add"
          >Añadir</button>
        </div>
      </form>
      <span
        className="modal__close-button"
        onClick={closeModal}
      >
        <CloseSVG fill="red" stroke="red" />
      </span>
    </>
  )
}

export { TodoForm }
