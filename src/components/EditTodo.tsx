import React from "react";

import { EditTodoProps } from "../types";

export const EditTodo: React.FC<EditTodoProps> = ({
  newTitle,
  handleEditFormChanges,
  handleEditTodo,
  handleClosedEditForm,
}) => {
  return (
    <div>
      <input type="text" value={newTitle} onChange={handleEditFormChanges} />
      <button onClick={handleEditTodo}>編集の保存</button>
      <button onClick={handleClosedEditForm}>キャンセル</button>
    </div>
  );
};
