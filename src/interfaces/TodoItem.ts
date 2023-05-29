interface TodoItemBase {
  text: string;
  completed: boolean;
}

interface TodoItemProps extends TodoItemBase {
  onComplete: () => void;
  onDelete: () => void;
}

export type { TodoItemProps, TodoItemBase };
