import React from "react";
import ToDoListStyles from "@styles/ToDoList.module.css";
import ToDoListItem from "@components/ToDoListItem";
import { useToDoState } from "@context/ToDoListContext";


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