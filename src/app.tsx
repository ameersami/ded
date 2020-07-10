import * as React from 'react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

LogRocket.init('lmgdge/ded');
setupLogRocketReact(LogRocket);

import DaysRemainingDisplay from './components/DaysRemainingDisplay/DaysRemainingDisplay';
import { appStateReducer, appInitialState } from './utils/AppStateUtil';
import './app.css';
import Logo from './components/Logo/Logo';
import ConfigurationCard from './components/ConfigurationCard/ConfigurationCard';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle';

const App: React.FunctionComponent<{}> = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [state, dispatch] = React.useReducer(appStateReducer, appInitialState);
  const {dob, deathAge}: any = state;

  React.useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleClientDarkModeChange);
    
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleClientDarkModeChange);
    }
  }, []);

  const handleClientDarkModeChange = (e: any) => {
    if (e.matches) {
      setIsDarkMode(true);
      return;
    }
    setIsDarkMode(false);
  }

  return(
    <div className={`appContainer ${isDarkMode ? 'darkMode' : 'day'}`}>
      <div className="header">
        <Logo/>
        <DarkModeToggle onClick={() => setIsDarkMode(!isDarkMode)} />
      </div>
      <DaysRemainingDisplay dob={dob} deathAge={deathAge} />
      <ConfigurationCard dob={dob} deathAge={deathAge} dispatch={dispatch}/>
    </div>
  )
}

export default App;
