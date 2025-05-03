import React from "react";

type TodoStatus = "notStarted" | "inProgress" | "done";

export interface TodoType {
  id: string;
  title: string;
  status: TodoStatus;
}

export interface EditTodoProps {
  newTitle: string;
  handleEditFormChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditTodo: () => void;
  handleClosedEditForm: () => void;
}

export interface InputTodoProps {
  todoTitle: string;
  filter: string;
  handleAddFormChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
  handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TodoAreaProps {
  filteredTodos: TodoType[];
  handleStatusChange: (
    id: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleOpenEditForm: (todo: TodoType) => void;
  handleDeleteFormChanges: (todo: TodoType) => void;
}
export interface StatusSelectProps {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
