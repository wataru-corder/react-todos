import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { EditTodo } from "./components/EditTodo";
import { InputTodo } from "./components/InputTodo";
import { TodoArea } from "./components/TodoArea";
import { TodoType } from "./types";

export const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>("");
  const [editId, setEditId] = useState<string>("");
  const [filter, setFilter] = useState<string>("notStarted");
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);

  // TODOの追加フォームの入力内容を取得
  const handleAddFormChanges = (event) => {
    setTodoTitle(event.target.value);
  };
  // TODOの追加
  const handleAddTodo = () => {
    if (todoTitle === "") return;
    const newTodo: TodoType = {
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
  const handleStatusChange = (id, event) => {
    const newArray = todos.map((todo) =>
      todo.id === id ? { ...todo, status: event.target.value } : todo
    );
    setTodos(newArray);
  };
  // ステータス変更

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
  const handleClosedEditForm = () => {
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
        <EditTodo
          newTitle={newTitle}
          handleEditFormChanges={handleEditFormChanges}
          handleEditTodo={handleEditTodo}
          handleClosedEditForm={handleClosedEditForm}
        />
      ) : (
        <InputTodo
          todoTitle={todoTitle}
          filter={filter}
          handleAddFormChanges={handleAddFormChanges}
          handleAddTodo={handleAddTodo}
          handleFilterChange={handleFilterChange}
        />
      )}

      <TodoArea
        filteredTodos={filteredTodos}
        handleStatusChange={handleStatusChange}
        handleOpenEditForm={handleOpenEditForm}
        handleDeleteFormChanges={handleDeleteFormChanges}
      />
    </>
  );
};
