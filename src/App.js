import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";

import Counter from "./components/Counter";
import ToDoList from "./components/ToDoList";
import NotFound from "./components/NotFound";
import Header from "./components/Header";


/**
 * react 예제1) Router
 * 1. header와 main 컴포넌트를 분리합니다.
 * 2. header에 네비게이션을 만들고 Counter.js와 ToDoList.js를 라우팅처리 합니다.
 * 3. 정상적으로 라우팅 처리가 되지 않을 경우 404 화면을 띄웁니다.
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Counter />}/>
          <Route path="/counter" element={<Counter />}/>
          <Route path="/todolist" element={<ToDoList />}/>
          {/* 404 */}
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
