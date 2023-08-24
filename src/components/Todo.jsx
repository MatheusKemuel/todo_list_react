import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" >
      <div className="content" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
        <h3>{todo.text}</h3>
        <span style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>{todo.category}</span>
      </div>
      <div className="actions">
        <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
