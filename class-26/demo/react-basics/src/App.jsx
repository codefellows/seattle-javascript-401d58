import React from 'react';
import Counter from './components/counter/Counter.jsx';
import Header from './components/header/';
import StarWars from './components/star-wars/StarWars.jsx';

class App extends React.Component {

  /*
    Logic to fetch car dealer options ...
  */

  render() {

    let options = {
      primaryColor: "red",
      secondaryColor: "black",
      tertiaryColor: "white",
      dealerName: "Brotherton Cadillac Buick GMC",
    }

    return (
      <>
        <Header options={options} />
        <Counter />
        <StarWars />
      </>
    );
  }
}

export default App
