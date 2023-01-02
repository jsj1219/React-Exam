import React from "react";
import { useToDoState } from './ToDoListContext';
import ToDoListStyles from "../styles/ToDoList.module.css";
import ToDoListItem from "./ToDoListItem";


function ToDoListBody() {
  const toDos = useToDoState();

  return (
    <div className={ToDoListStyles.todoblock}>
      {toDos.map(toDo => (
        <ToDoListItem
          key={toDo.id}
          id={toDo.id}
          text={toDo.text}
          checked={toDo.checked}
        />
      ))}
    </div>
  );
}

export default ToDoListBody;