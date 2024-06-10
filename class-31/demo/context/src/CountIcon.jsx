import {useContext} from 'react';

import { CounterContext } from './context/Counter';

function CounterIcon() {
  const counter = useContext(CounterContext);

  return (
    <span id="icon">{counter.numChanges}</span>
  )
}

export default CounterIcon;
