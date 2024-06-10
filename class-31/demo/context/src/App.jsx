import { useContext } from 'react'

import { SettingsContext } from './context/Settings.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Counter from './Counter.jsx';

import './app.scss';

function App() {

  const settings = useContext(SettingsContext);

  return (
    <>
      <div id="app" className={settings.mode}>
        <Header />
        <Counter />
        <Footer />
      </div>
    </>
  )
}

export default App
