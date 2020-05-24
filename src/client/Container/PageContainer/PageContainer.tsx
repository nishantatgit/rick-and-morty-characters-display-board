import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

import Homepage from '../../pages/Homepage/Homepage';
import Dropdown from '../../components/Dropdown/Dropdown';
import theme from '../../ui/themes';

const Pagecontainer = () => {
  const themesArray: string[] = Object.keys(theme);

  const [state, setState] = useState({
    theme: themesArray[0],
  });

  const onClickHandler = (e: any) => {
    console.log('e ', e);
    console.log('state ', state);
  };

  const dropdownOptions = themesArray.map((key) => ({
    key,
    value: key,
  }));

  const dropdownOnChangeHandler = (e: any) => {
    const {
      target: {
        dataset: { key },
      },
    } = e;
    setState({
      theme: key,
    });
  };

  return (
    <div>
      <Dropdown options={dropdownOptions} onChange={dropdownOnChangeHandler} />
      <ThemeProvider theme={theme[state.theme]}>
        <Homepage />
      </ThemeProvider>
    </div>
  );
};

export default Pagecontainer;
