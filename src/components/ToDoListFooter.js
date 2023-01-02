import React, { useState } from "react";
import ToDoListStyles from "../styles/ToDoList.module.css";
import { MdAdd } from 'react-icons/md';
import { useToDoDispatch, useToDoNextId } from './ToDoListContext';

function ToDoListFooter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useToDoDispatch();
  const nextId = useToDoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); //새로고침X
    dispatch({
      type: 'CREATE',
      toDo: {
        id: nextId.current,
        text: value,
        checked: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <div>
      {open && (
        <div className={ToDoListStyles.insert_positioner}>
          <form className={ToDoListStyles.insert_form} onSubmit={onSubmit}>
            <input
              autoFocus
              className={ToDoListStyles.insert_input}
              placeholder="할 일을 입력하고 Enter를 누르세요."
              value={value}
              onChange={onChange}
            />
          </form>
        </div>
      )}
      <button
        type="button"
        className={`${ToDoListStyles.add_btn} ${
          open ? ToDoListStyles.open : ""
        }`}
        onClick={onToggle}
      >
        <MdAdd />
      </button>
    </div>
  );
}

export default ToDoListFooter;