import React from "react";
import ToDoListStyles from "/Users/sungjucho/git/React-Example/src/styles/ToDoList.module.css";
import ToDoListItem from "/Users/sungjucho/git/React-Example/src/components/ToDoListItem";
import { useToDoState } from '/Users/sungjucho/git/React-Example/src/context/ToDoListContext';


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