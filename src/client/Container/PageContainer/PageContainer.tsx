import { ThemeProvider } from 'styled-components';
import React, { useState } from 'react';

import Homepage from '../../pages/Homepage/Homepage';
import Dropdown from '../../components/Dropdown/Dropdown';
import theme from '../../ui/themes';
import styles from './PageContainer.style';
import withStyles from '../../utils/withStyles';

const Pagecontainer = (props: { className: string; initialState: object }) => {
  const themesArray: string[] = Object.keys(theme).filter(
    (key) => key !== 'COMMON'
  );

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

  const { initialState, className } = props;

  console.log('initial state at page container', initialState);
  return (
    <div className={className}>
      <Dropdown options={dropdownOptions} onChange={dropdownOnChangeHandler} />
      <ThemeProvider theme={theme[state.theme]}>
        <Homepage initialState={initialState} />
      </ThemeProvider>
    </div>
  );
};

export default withStyles(styles, Pagecontainer);
