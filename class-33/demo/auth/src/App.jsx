import { useState } from 'react'

import Auth from './Auth/Auth.jsx';
import Login from './Auth/Login.jsx';

function App() {

  return (
    <>
      <header>
        <h1>Auth Demo</h1>
        <Login />
      </header>

      <hr />

      <main>

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
