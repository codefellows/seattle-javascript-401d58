import { useState, useEffect } from 'react'

import Auth from './Auth/Auth.jsx';
import Login from './Auth/Login.jsx';

import axios from 'axios';

const API = import.meta.env.VITE_API;

function App() {

  const [food, setFood] = useState([]);

  async function getFood() {
    const response = await axios.get(`${API}/api/v1/food`);
    setFood(response.data);
  }

  // add a new item or update an existing item to be complerte ... also call the API with put or post!

  useEffect( () => {
    getFood();
  }, [])

  return (
    <>
      <header>
        <h1>Auth Demo</h1>
        <Login />
      </header>

      <hr />

      <main>

        <ul>
          {
            food.map((item, idx) =>
             <li key={idx}>{item.name}</li>
            )
          }
        </ul>

        <div>Anyone Can See Me!</div>

        <Auth>
          <div>Anyone that is logged in ... Can See Me!</div>
        </Auth>

        <Auth capability="update">
          <div>Anyone that is logged in AND has update permissions ... Can See Me!</div>
        </Auth>

        <Auth capability="delete">
          <div>Anyone that is logged in AND has delete permissions ... Can See Me!</div>
        </Auth>

      </main>

    </>
  )
}

export default App
