import { Dispatch, SetStateAction } from "react";
import { TodoItemBase } from "./TodoItem";

interface AppContext {
  completedTodos: number;
  totalTodos: number;
  searchedTodos: TodoItemBase[];
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  toggleTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  addTodo: (text: string) => void;
}

export type { AppContext };
