import { StatusSelectProps } from "../types";

export const StatusSelect: React.FC<StatusSelectProps> = ({
  todo,
  handleStatusChange,
}) => {
  return (
    <select value={todo.status} onChange={(event) => handleStatusChange(event)}>
      <option value="notStarted">未着手</option>
      <option value="inProgress">作業中</option>
      <option value="done">完了</option>
    </select>
  );
};
