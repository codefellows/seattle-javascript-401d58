import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const [title, setTitle] = useState('Context API');
  const [mode, setMode] = useState('light');

  function toggleMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <SettingsContext.Provider value={{title, mode, toggleMode}}>
      {props.children}
    </SettingsContext.Provider>
  );

}

export default SettingsProvider;
