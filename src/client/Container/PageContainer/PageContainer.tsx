import { ThemeProvider } from 'styled-components';
import React, {useState} from 'react';

import Homepage from '../../pages/Homepage/Homepage';
import Dropdown from '../../components/Dropdown/Dropdown';
import theme from '../../ui/themes';

const Pagecontainer = () => {
  
  const themesArray: string[] = Object.keys(theme);
  
  const [ state, setState ] = useState({
    theme: themesArray[0],
    index: 0,
  });
  
  const onClickHandler = (e: any) => {
    console.log('e ', e);
    console.log('state ', state);
    setState({
      theme: themesArray[(state.index + 1)%4],
      index: (state.index + 1)%4
    });
  }
  
  const dropdownOptions = themesArray.map(key => ({
    key,
    value: key
  }));

  return (
  <div>
    <Dropdown options={dropdownOptions}/>
    <button onClick={onClickHandler}>Change Theme</button>
    <ThemeProvider theme={theme[state.theme]}>
      <Homepage/>
    </ThemeProvider>
  </div>
  )
}

export default Pagecontainer;