import React, {useState} from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  const defaults = {
    showCompleted: false,
    difficulty: 4,
    perPage: 3,
  };

  const [settings, setSettings] = useState(defaults);

  function toggleShowCompleted() {
    setSettings({...settings, showCompleted: !settings.showCompleted});
  }

  function setPerPage(value) {
    setSettings({...settings, perPage: value});
  }

  const providedValues = { settings, toggleShowCompleted, setPerPage };

  return (
    <SettingsContext.Provider value={providedValues}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;
