import React, {useState} from 'react';

export const CounterContext = React.createContext();


function CounterProvider(props) {

  const [count, setCount] = useState(0);
  const [numChanges, setNumChanges] = useState(0);

  function increment() {
    setCount(count + 1);
    setNumChanges(numChanges + 1);
  }

  function decrement() {
    setCount(count - 1);
    setNumChanges(numChanges + 1);
  }

  return (
    <CounterContext.Provider value={{count, increment, decrement, numChanges}}>
      {props.children}
    </CounterContext.Provider>
  );

}

export default CounterProvider;
