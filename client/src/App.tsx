import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/todoComponent/TodoList";
import AddTodoForm from "./components/todoComponent/AddTodoForm";
import { AddTodo, DeleteTodo, Todo } from "./components/todoComponent/type";
import { fetchApiData } from "./utils/fetchApiData";

function App() {
  const [todos, setTodos] = useState<any>([]);
  
  useEffect(() => {
    fetchApiData("http://localhost:8000",(data: Todo) =>{
      setTodos(data)
    },'get',null);
  }, []);

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { data: newTodo, id: Math.random() }]);
  };

  const deleteTodo: DeleteTodo = (deleteTodo) => {
    const newTodos = todos.filter((d: Todo) => {
      return d.id !== deleteTodo;
    });
    setTodos(newTodos);
  };

  const submitTodos = () =>{
    fetchApiData("http://localhost:8000/saveTodos",(data: Todo) =>{
      setTodos(data)
    },'post', todos);
  }
  
  return (
    <div className="todoContainer">
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodoForm addTodo={addTodo} />
      <button onClick={submitTodos}>sunmit todos</button>
    </div>
  );
}

export default App;
