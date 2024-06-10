import {useContext} from 'react';
import {SettingsContext} from './context/Settings.jsx';

import CounterIcon from "./CountIcon.jsx";

function Header() {

  const settings = useContext(SettingsContext);

  return (
    <header>
      <h1>{settings.title}</h1>
      <CounterIcon />
    </header>
  );
}

export default Header;
