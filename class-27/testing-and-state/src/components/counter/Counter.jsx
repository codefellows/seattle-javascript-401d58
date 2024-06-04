import React, {useState} from 'react';

import Button from './Button.jsx';
import CurrentCount from './CurrentCount.jsx';

function Counter(props) {

  // count is the "get()"
  // setCount is the "set()"
  // useState(xxxxx) -- sets xxxxx as the initial value for that state variable
  let [count, setCount] = useState(0);

  let increment = () => {
    // Change the state of the counter... add 1 to this.state.count
    let newCount = count + 1;
    setCount(newCount);
  }

  let decrement = () => {
    let newCount = count - 1;
    setCount(newCount);
  }

  return (
    <>
      <h3>Counter ...</h3>
      <CurrentCount count={count} />
      <Button handleClick={decrement} label="Decrement" />
      <Button handleClick={increment} label="Increment" />
    </>
  )
}

class CounterAsClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    // Change the state of the counter... add 1 to this.state.count
    let newState = { count: this.state.count + 1 }
    this.setState(newState);
  }

  decrement = () => {
    // Change the state of the counter... add 1 to this.state.count
    let newState = { count: this.state.count - 1 }
    this.setState(newState);
  }

  render() {
    return (
      <>
        <h3>Counter ...</h3>
        <h4>{this.state.count}</h4>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}

export default Counter;
