import React from "react";

export default function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={()=>props.completed(props.id)}/>
      <p className="ml-1">{props.item}</p>
    </div>
  );
}
