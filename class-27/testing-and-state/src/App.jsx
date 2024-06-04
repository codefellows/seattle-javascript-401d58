import {useState} from 'react';

import Counter from './components/counter/Counter'
import Form from './components/form/Form';

function App() {

  const [json, setJSON] = useState({});

  function makeTheAPICall(url, method, body) {
    console.log('Making the API call ...', url, method, body);
    // do the call to axios and setJSON with the results
  }

  return (
    <>
      <h1>Hello Class</h1>
      <Form makeTheCall={makeTheAPICall} />
    </>
  )
}

export default App
