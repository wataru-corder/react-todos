import React from "react";
import { InputTodoProps } from "../types";

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
      <select value={filter} onChange={(e) => handleFilterChange(e)}>
        <option value="all">すべて</option>
        <option value="notStarted">未着手</option>
        <option value="inProgress">作業中</option>
        <option value="done">完了</option>
      </select>
    </div>
  );
};
