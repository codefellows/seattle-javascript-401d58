import {useState, useEffect} from 'react';

import axios from 'axios';

import Counter from './components/counter/Counter'
import Form from './components/form/Form';

function App() {

  const [json, setJSON] = useState('');
  const [request, setRequest] = useState({});

  function makeTheAPICall(url, method, body) {

    let newRequest = {
      method: method,
      url: url,
      data: body ? JSON.parse(body) : null
    };

    // This is actual async
    setRequest( newRequest );

    // So, this will not work
    console.log('request', request);
  }

  async function fetch() {

    let response = await axios(request);

    let jsonString = response.data ? JSON.stringify( response.data, null, 2 ) : null;

    // do the call to axios and setJSON with the results
    setJSON( jsonString );
  }

  // with an empty dependency array, this will only run once, the first time the component is rendered
  useEffect(() => {
    console.log("I am in the useEffect() hook")
    // this may be a good time to fetch some data so the app is not empty
  }, []);

  // Watch the request variable for changes
  useEffect(() => {
    console.log('fetching from the useEffect() hook')

    request.method && request.url && fetch();
    // if( request.method && request.url ) { fetch(); }

    // Our chance to clean things up ...
    return () => {

    }

  }, [request]);

  return (
    <>
      <h1>Hello Class</h1>
      <Form makeTheCall={makeTheAPICall} />
      <hr />
      <pre data-testid="json-display">{json}</pre>
      <hr />
      <Counter />
    </>
  )
}

export default App
