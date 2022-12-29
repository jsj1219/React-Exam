import React, { useReducer, createContext, useContext, useRef } from 'react';

//기본값
const initialToDos = [
  {
    id: 1,
    text: '할일1',
    checked: false
  },
  {
    id: 2,
    text: '할일2',
    checked: true
  }
];

function toDoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.toDo);
    case 'TOGGLE':
      return state.map(toDo =>
        toDo.id === action.id ? { ...toDo, checked: !toDo.checked } : toDo
      );
    case 'REMOVE':
      return state.filter(toDo => toDo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ToDoStateContext = createContext();
const ToDoDispatchContext = createContext();
const ToDoNextIdContext = createContext();

//useReducer를 사용하여 상태를 관리하는 컴포넌트
export function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(toDoReducer, initialToDos);
  const nextId = useRef(3);

  return (
    //context를 분리하여 불필요한 렌더링을 방지
    <ToDoStateContext.Provider value={state}>
      <ToDoDispatchContext.Provider value={dispatch}>
        <ToDoNextIdContext.Provider value={nextId}>
          {children}
        </ToDoNextIdContext.Provider>
      </ToDoDispatchContext.Provider>
    </ToDoStateContext.Provider>
  );
}

export function useToDoState() {
  return useContext(ToDoStateContext);
}

export function useToDoDispatch() {
  return useContext(ToDoDispatchContext);
}

export function useToDoNextId() {
  return useContext(ToDoNextIdContext);
}