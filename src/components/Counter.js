import CounterStyles from "styles/Counter.module.css";
import React, {useState} from "react";

/**
 * react 예제2) 카운터
 * increase_btn을 클릭하면 count가 올라간다.
 * decrease_btn을 클릭하면 count가 내려간다.
 * decrease_btn을 계속 클릭해도 count의 최소 숫자는 0이 되게 한다.
 */

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count+1);
  }

  const onDecrease = () => {
    return count > 0 ? setCount(count-1): false;
  }

  return (
    <div className={CounterStyles.wrapper}>
      <div className={CounterStyles.counter_inner}>
        <h1 className={CounterStyles.header}>카운터</h1>
        <h3 className={CounterStyles.count}>{count}</h3>
        <button
          type="button"
          className={`${CounterStyles.increase_btn} ${CounterStyles.btn}`}
          onClick={onIncrease}
        >
          +1
        </button>
        <button
          type="button"
          className={`${CounterStyles.decrease_btn} ${CounterStyles.btn}`}
          onClick={onDecrease}
        >
          -1
        </button>
      </div>
    </div>

  );
}

export default Counter;
