import {useContext} from 'react';
import {SettingsContext} from './context/Settings.jsx';

function Footer() {

  const settings = useContext(SettingsContext);

  return (
    <footer>
      The {settings.title} app -- &copy; 2024 John
      <div>
        <button onClick={settings.toggleMode}>Mode: {settings.mode}</button>
      </div>
    </footer>
  );
}

export default Footer;
