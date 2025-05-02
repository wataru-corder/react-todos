import React from "react";

export interface TodoType {
  id: string;
  title: string;
  status: "notStarted" | "inProgress" | "done";
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
    e: React.ChangeEventHandler<HTMLSelectElement>
  ) => void;
  handleOpenEditForm: (
    todo: React.MouseEventHandler<HTMLButtonElement>
  ) => void;
  handleDeleteFormChanges: (
    todo: React.MouseEventHandler<HTMLButtonElement>
  ) => void;
}
export interface StatusSelectProps {
  value: string;
  handleChange: (event: React.ChangeEventHandler<HTMLSelectElement>) => void;
}
