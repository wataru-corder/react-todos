import React from "react";

export const InputTodo = () => {
  return (
    <div>
      <input type="text" value={newTitle} onChange={handleEditFormChanges} />
      <button onClick={handleEditTodo}>編集の保存</button>
      <button onClick={handleClosedEditForm}>キャンセル</button>
    </div>
  );
};
