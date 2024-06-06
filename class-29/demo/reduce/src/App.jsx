import { useState, useReducer } from 'react'

import ourReducer from './state';

const initialState = {
  count: 0,
  name: '',
  people: []
}

// API Example for your lab
const apiInitialState = {
  request: {
    method: '',
    url: '',
    body: null
  },
  response: {},
  history: []
};

function App() {

  const [state, dispatch] = useReducer(ourReducer, initialState);
  function increment() {
    let action = { type: 'INCREMENT'};
    dispatch(action);
  }

  function decrement() {
    let action = { type: 'DECREMENT'};
    dispatch(action);
  }

  // Change the name in the state
  function handleChange(e) {
    let whatWeHaveTyped = e.target.value;
    let action = { type: 'UPDATE_NAME', payload: whatWeHaveTyped };
    dispatch(action);
  }

  // Add a person to the list
  function addPerson(e) {
    e.preventDefault();
    let action = { type: 'ADD_PERSON', payload: state.name };
    dispatch(action);
  }


  // Old way = useState()
  // const [count, setCount] = useState(0)
  // function increment() { setCount(count + 1) }
  // function decrement() { setCount(count - 1) }

  return (
    <>
      <div className="card">
        <h1>{state.count}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>

      <hr />

      <form onSubmit={addPerson}>
        <input type="text" placeholder="Name" onChange={handleChange} />
      </form>

      <hr />

      <ul>
        {
          state.people.map((person, index) => {
            return <li key={index}>{person}</li>
          })
        }
      </ul>
    </>
  )
}

export default App
