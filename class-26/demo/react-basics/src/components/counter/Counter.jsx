import React from 'react';

import "./counter.scss";

class Counter extends React.Component {

  // super the class we extended from. In this case, React.Component

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <>
        <div className="counter">
          <button onClick={() => this.setState( { count: this.state.count + 1} )}>
            the count is {this.state.count}
          </button>
          <p class="note">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </>
    );
  }
}

export default Counter
