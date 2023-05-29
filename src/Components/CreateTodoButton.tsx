function CreateTodoButton(): JSX.Element {
  return (
    <button className="create-todo-button"
      onClick={
        (event) => {
          window.console.log('event:', event)
          window.console.log('target:', event.target)
        }
      }
    />
  );

}
export { CreateTodoButton };
