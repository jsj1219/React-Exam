import React from 'react';
import ToDoListStyles from "/Users/sungjucho/git/React-Example/src/styles/ToDoList.module.css";
import { MdDone, MdDelete } from 'react-icons/md';
import { useToDoDispatch } from '/Users/sungjucho/git/React-Example/src/context/ToDoListContext';


function ToDoListItem({ id, checked, text }) {
  const dispatch = useToDoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  
  return (
    <div className={ToDoListStyles.todoitem_block}>
      <button
        type="button"
        className={`${ToDoListStyles.check_icon} ${
          checked ? ToDoListStyles.active : ""
        }`}
        onClick={onToggle}
      >
        {checked && <MdDone />}
      </button>
      <p className={ToDoListStyles.todoitem}>{text}</p>
      <button
        type="button"
        className={ToDoListStyles.remove_btn}
        onClick={onRemove}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default ToDoListItem;