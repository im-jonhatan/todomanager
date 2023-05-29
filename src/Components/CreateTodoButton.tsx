import { ReactComponent as PlusSVG } from "../assets/plus.svg";

function CreateTodoButton(): JSX.Element {
  return (
    <button className="create-todo-button"
      onClick={
        (event) => {
          window.console.log('event:', event)
          window.console.log('target:', event.target)
        }
      }
    >
      <PlusSVG fill="none" stroke="var(--soft-blue)"/>
    </button>
  );

}
export { CreateTodoButton };
