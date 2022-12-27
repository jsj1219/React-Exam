import { useState, useRef } from "react";
import { MdDone, MdDelete, MdAdd } from "react-icons/md";
import ToDoListStyles from "../styles/ToDoList.module.css";

/**
 * react 예제3) ToDoList
 * 1. 하단의 .add_btn을 클릭하여 나오는 input 창에 텍스트를 입력하고 엔터를 누르면 할 일 목록에 할 일이 등록됩니다.
 * 2. 등록된 할 일 갯수에 대해 .left_task에 몇개 남았는지 갯수가 나옵니다.
 * 3. 할 일을 체크하면 .left_task 갯수는 줄어듭니다.
 * 4. 할 일 .remove_btn을 클릭하면 할일이 삭제되어 할 일 목록에서 사라집니다.
 */

function ToDoList() {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });

  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([
    {
      id: 1,
      text: '할일1',
      checked: false,
    },
    {
      id: 2,
      text: '할일2',
      checked: true,
    },
  ]);
  const nextId = useRef(2);
  
  const undoneTasks = toDos.filter(todo => !todo.checked);
  const onChange = (event) => {setToDo(event.target.value);}

  const onSubmit = (event) => {
    event.preventDefault(); //새로고침X
    if (toDo === "") {
      return;
    }
    else{
      setToDos((currentArray) => [
        ...currentArray,
        {
          id: nextId.current,
          text: toDo,
          checked: false,
        }
      ]);
    }
    nextId.current++;
    setToDo("");
    setOpen(false);
  };

  const onClick = (id) => {
    //아이콘을 클릭하면 toDo.checked가 변경되도록
    setToDos(toDos.map(toDo =>
      toDo.id === id ? {...toDo, checked: !toDo.checked} : toDo
    ))
  };

  const onDelete = (id) => {
    setToDos((toDos) => toDos.filter((toDo) => toDo.id !== id));
  }
  
  console.log(toDos);
  return (
    <div className={ToDoListStyles.todolist_wrapper}>
      {/* // ToDoList Header */}
      <div className={ToDoListStyles.todolist_inner}>
        <h1 className={ToDoListStyles.today}>{dateString}</h1>
        <div className={ToDoListStyles.day}>{dayName}</div>
        <div className={ToDoListStyles.left_task}>할 일 {undoneTasks.length}개 남음</div>
      </div>
      {/* ToDoList Header // */}

      <div className={ToDoListStyles.todoblock}>
        {/* // ToDoList Item */}
        {toDos.map((toDo) => (
          <div
            className={ToDoListStyles.todoitem_block}
            {...toDo}
            key={toDo.id}
          >
            <button
              type="button"
              className={`${ToDoListStyles.check_icon} ${
                toDo.checked ? ToDoListStyles.active : ""
              }`}
              onClick={() => onClick(toDo.id)}
            >
              {toDo.checked && <MdDone />}
            </button>
            <p className={ToDoListStyles.todoitem}>{toDo.text}</p>
            <button
              type="button"
              className={ToDoListStyles.remove_btn}
              onClick={() => onDelete(toDo.id)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
        {/* ToDoList Item // */}

        {/* // ToDoList Create */}
        <div>
          {/* // ToDoList Create Form */}
          {open && (
            <div className={ToDoListStyles.insert_positioner}>
              <form className={ToDoListStyles.insert_form} onSubmit={onSubmit}>
                <input
                  autoFocus
                  className={ToDoListStyles.insert_input}
                  placeholder="할 일을 입력하고 Enter를 누르세요."
                  value={toDo}
                  onChange={onChange}
                />
              </form>
            </div>
          )}

          {/* ToDoList Create Form // */}

          {/* // ToDoList Create Button */}
          <button
            type="button"
            className={`${ToDoListStyles.add_btn} ${
              open ? ToDoListStyles.open : ""
            }`}
            onClick={onToggle}
          >
            <MdAdd />
          </button>
          {/* ToDoList Create Button // */}
        </div>
        {/* ToDoList Create // */}
      </div>
    </div>
  );
}

export default ToDoList;