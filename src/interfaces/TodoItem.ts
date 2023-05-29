interface TodoItemI {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
}

export type { TodoItemProps, TodoItemI };
