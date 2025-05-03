import React from "react";
import { InputTodoProps } from "../types";
import { StatusSelect } from "./StatusSelect";

export const InputTodo: React.FC<InputTodoProps> = ({
  todoTitle,
  handleAddFormChanges,
  handleAddTodo,
  handleFilterChange,
  filter,
}) => {
  return (
    <div>
      <input type="text" value={todoTitle} onChange={handleAddFormChanges} />
      <button onClick={handleAddTodo}>作成</button>

      <StatusSelect value={filter} handleChange={handleFilterChange} />
    </div>
  );
};
