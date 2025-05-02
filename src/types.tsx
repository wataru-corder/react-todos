export type EditTodoProps = {
  newTitle: string;
  handleEditFormChanges: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditTodo: () => void;
  handleClosedEditForm: () => void;
};
export type InputTodoProps = {
  todoTitle: string;
  filter: string;
  handleAddFormChanges: () => void;
  handleAddTodo: () => void;
  handleFilterChange: (e: React.ChangeEventHandler<HTMLSelectElement>) => void;
};
