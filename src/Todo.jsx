import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddFormChanges = (event) => {
    setTodoTitle(event.target.value);
  };
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
  const handleDeleteFormChanges = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };

  const handleStatusChange = (id, event) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: event.target.value,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <input type="text" value={todoTitle} onChange={handleAddFormChanges} />
      <button onClick={handleAddTodo}>作成</button>
      <ul>
        {todos.map((todo) => (
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
            <button onClick={() => handleDeleteFormChanges(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};

// TODOリストをつくってみる。ReactHooksを使う。
// ▼TODOリスト内の各TODOにほしい要素
// 　・ID(連番もしくはuuidを設定)   OK!
// 　・タイトル   OK!!
// 　・ステータス(未着手、進行中、完了 など)
// 　・詳細
// ▼ほしい機能
// 　・TODOの追加
// 　・TODOの削除
// ▼余裕があれば以下のようなカスタマイズをする
// 　・TODOの編集機能
// 　・フィルター(ID、期限、ステータスで絞り込み)
// 　　or
// 　・ソート(ID、期限、ステータスで並べ替え)
// 　・要素追加（内容、作成日、更新日など）
// 　・ステータス変更でスタイル変更
// 　・TODOリストを1箇所(どのパーツでもOK)コンポーネント化してみる
