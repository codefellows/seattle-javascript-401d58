import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { getStuff } from './store/actions';

function App() {

  const dispatch = useDispatch();
  const stuff = useSelector(state => state.stuff);

  useEffect(() => {
    dispatch(getStuff());
  }, []);

  return (
    <>
      <h1>Async Redux Demo!</h1>

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
