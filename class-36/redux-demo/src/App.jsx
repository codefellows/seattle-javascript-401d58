import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment } from './store/counter.js';

function App() {

  const count = useSelector((state) => state.counter.count);
  const numberOfClicks = useSelector((state) => state.counter.numberOfClicks);
  const dispatch = useDispatch();

  // Or ...
  // const counter = useSelector((state) => state.counter);
  // and then we can use {counter.count} in the JSX below

  function handleDecrement() {
    // Preferred way: use an action creator
    dispatch(decrement(5));
  }

  function handleIncrement() {
    // this is frowned upon, we don't want to tinker with the actions directly. Let redux do that!
    let action = {
      type: 'INCREMENT',
      payload: 5
    }
    dispatch(action);
  }

  return (
    <>
      <h1>Redux Counter</h1>
      <h3>Current Count ({numberOfClicks}): {count}</h3>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default App
