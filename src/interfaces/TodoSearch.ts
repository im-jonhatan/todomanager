import { Dispatch, SetStateAction } from "react";

interface TodoSearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export type { TodoSearchProps };
