import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [editId, setEditId] = useState("");
  const [filter, setFilter] = useState("notStarted");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // TODOの追加フォームの入力内容を取得
  const handleAddFormChanges = (event) => {
    setTodoTitle(event.target.value);
  };
  // TODOの追加
  const handleAddTodo = () => {
    if (todoTitle === "") return;
    const newTodo = {
      id: uuidv4(),
      title: todoTitle,
      status: "notStarted",
    };
    setTodos([...todos, newTodo]);
    setTodoTitle("");
  };
  // TODOの削除
  const handleDeleteFormChanges = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };
  // ステータス変更
  const handleStatusChange = (id, event) => {
    const newArray = todos.map((todo) =>
      todo.id === id ? { ...todo, status: event.target.value } : todo
    );
    setTodos(newArray);
  };
  // 編集フォームを開く
  const handleOpenEditForm = (targetTodo) => {
    setIsEditable(true);
    setEditId(targetTodo.id);
    setNewTitle(targetTodo.title);
  };
  // 編集フォームの入力内容を取得
  const handleEditFormChanges = (e) => {
    setNewTitle(e.target.value);
  };
  // 編集フォームを閉じる
  const handleClosedEditForm = (targetTodo) => {
    setIsEditable(false);
    setTodoTitle("");
  };

  // TODOの編集
  const handleEditTodo = () => {
    const newArray = todos.map((todo) =>
      editId === todo.id ? { ...todo, title: newTitle } : todo
    );
    setTodos(newArray);
    setNewTitle("");
    setIsEditable(false);
  };

  // フィルターの変更
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  // フィルターの適用
  useEffect(() => {
    const filtered = () => {
      switch (filter) {
        case "notStarted":
          return todos.filter((todo) => todo.status === "notStarted");
        case "inProgress":
          return todos.filter((todo) => todo.status === "inProgress");
        case "done":
          return todos.filter((todo) => todo.status === "done");
        default:
          return todos;
      }
    };
    setFilteredTodos(filtered());
  }, [todos, filter]);
  return (
    <>
      {isEditable ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={handleEditFormChanges}
          />
          <button onClick={handleEditTodo}>編集の保存</button>
          <button onClick={handleClosedEditForm}>キャンセル</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={todoTitle}
            onChange={handleAddFormChanges}
          />
          <button onClick={handleAddTodo}>作成</button>
          <select value={filter} onChange={(e) => handleFilterChange(e)}>
            <option value="all">すべて</option>
            <option value="notStarted">未着手</option>
            <option value="inProgress">作業中</option>
            <option value="done">完了</option>
          </select>
        </div>
      )}

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <select
              value={todo.status}
              onChange={(event) => handleStatusChange(todo.id, event)}
            >
              <option value="notStarted">未着手</option>
              <option value="inProgress">作業中</option>
              <option value="done">完了</option>
            </select>
            <button onClick={() => handleOpenEditForm(todo)}>編集</button>
            <button onClick={() => handleDeleteFormChanges(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};
