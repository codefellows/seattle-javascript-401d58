import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { getStuff } from './store/stuff-reducer';
import {add, subtract} from './store/counter-reducer';

function App() {

  const dispatch = useDispatch();
  const stuff = useSelector(state => state.stuff);
  const counter = useSelector(state => state.counter);

  function increase() {
    dispatch(add());
  }

  function decrease() {
    dispatch(subtract());
  }

  useEffect(() => {
    dispatch(getStuff());
  }, []);

  return (
    <>
      <h1>Async Redux Demo!</h1>

      <h3>Count: {counter.count}</h3>
      {
        counter.count > 0 &&
        <button onClick={decrease}>Decrease</button>
      }
      <button onClick={increase}>Increase</button>

      <ul>
        {
          stuff.food.map((item, idx) =>
            <li key={idx}>{item.name}</li>
          )
        }
      </ul>
    </>
  )
}

export default App
