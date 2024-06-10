import {useContext} from 'react';

import { CounterContext } from './context/Counter';

function Counter() {

  const counter = useContext(CounterContext);

  return (
    <div id="counter">
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );

}

export default Counter;

