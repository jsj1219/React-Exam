import React from "react";
import ToDoListStyles from "styles/ToDoList.module.css";

import ToDoListHead from "components/ToDoListHead";
import ToDoListBody from "components/ToDoListBody";
import ToDoListFooter from "components/ToDoListFooter";
import { ToDoProvider } from "context/ToDoListContext";

/**
 * react 예제3) ToDoList
 * 1. 하단의 .add_btn을 클릭하여 나오는 input 창에 텍스트를 입력하고 엔터를 누르면 할 일 목록에 할 일이 등록됩니다.
 * 2. 등록된 할 일 갯수에 대해 .left_task에 몇개 남았는지 갯수가 나옵니다.
 * 3. 할 일을 체크하면 .left_task 갯수는 줄어듭니다.
 * 4. 할 일 .remove_btn을 클릭하면 할일이 삭제되어 할 일 목록에서 사라집니다.
 */

function ToDoList() {
  return (
    <div className={ToDoListStyles.todolist_wrapper}>
      <ToDoProvider>
        <ToDoListHead />
        <ToDoListBody />
        <ToDoListFooter />
      </ToDoProvider>
    </div>
  );
}

export default ToDoList;