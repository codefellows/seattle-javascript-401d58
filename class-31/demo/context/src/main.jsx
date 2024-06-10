import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import SettingsProvider from './context/Settings.jsx';
import CounterProvider from './context/Counter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </SettingsProvider>
  </React.StrictMode>,
)
