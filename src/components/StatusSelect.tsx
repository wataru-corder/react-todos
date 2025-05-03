import React from "react";
import { StatusSelectProps } from "../types";

export const StatusSelect: React.FC<StatusSelectProps> = ({
  value,
  handleChange,
}) => {
  return (
    <select value={value} onChange={handleChange}>
      <option value="notStarted">未着手</option>
      <option value="inProgress">作業中</option>
      <option value="done">完了</option>
    </select>
  );
};
