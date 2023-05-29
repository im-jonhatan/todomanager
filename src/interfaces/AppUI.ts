import { Dispatch, SetStateAction } from "react";
import { TodoItemBase } from "./TodoItem";

interface AppUIProps {
  completedTodos: number;
  totalTodos: number;
  searchedTodos: TodoItemBase[];
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  toggleTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
}

export type { AppUIProps };
