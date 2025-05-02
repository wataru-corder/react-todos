import { TodoAreaProps, Todo } from "../types";

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
  );
};
