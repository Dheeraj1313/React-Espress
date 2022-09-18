import React from "react";
import { Todo } from "./type";
import "./style/todoList.css";

const TodoList: React.FC<any> = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos?.map((todo: Todo) => (
        <div key={todo.id} className="listContainer">
          <div className="listContent">{todo.data}</div>
          <button className="listContent" onClick={() => deleteTodo(todo.id)}>
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
