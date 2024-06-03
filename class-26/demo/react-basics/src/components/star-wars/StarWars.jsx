import {useState} from 'react';

import axios from 'axios';

function StarWars() {

  const [people, setPeople] = useState([]);
  const [rawData, setRawData] = useState('');

  async function fetchData() {

    // Use the 'axios' library to fetch data from the Star Wars API
    let response = await axios.get('https://swapi.dev/api/people')
    // Load the people from the response into an array
    setPeople(response.data.results);

    // Use the browsers' built in 'fetch' API to fetch data from the Star Wars API
    let rawResponse = await fetch('https://swapi.dev/api/people');
    let fetchedData = await rawResponse.json();
    // Load the raw JSON into a string in state
    setRawData(JSON.stringify(fetchedData,undefined,2));
  }

  return (
    <div>
      <h1>Star Wars</h1>
      <button onClick={fetchData}>Fetch Data</button>

      <ul>
        {
          people.map((person, index) =>
            <li key={person.url}>{person.name}</li>
          )
        }
      </ul>

      <pre>
        {rawData}
      </pre>
    </div>
  )

}

export default StarWars;
