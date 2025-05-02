import React from "react";
import { TodoAreaProps } from "../types";
import { StatusSelect } from "./StatusSelect";

export const TodoArea: React.FC<TodoAreaProps> = ({
  filteredTodos,
  handleStatusChange,
  handleOpenEditForm,
  handleDeleteFormChanges,
}) => {
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <StatusSelect
            value={todo.status}
            handleChange={(event) => handleStatusChange(todo.id, event)}
          />
          <button onClick={() => handleOpenEditForm(todo)}>編集</button>
          <button onClick={() => handleDeleteFormChanges(todo)}>削除</button>
        </li>
      ))}
    </ul>
  );
};
