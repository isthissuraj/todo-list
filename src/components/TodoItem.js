import React from "react";

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.task}
      <button class ="itemB" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItem;
