import React from 'react';
import ReactDom from 'react-dom';

import HomePage from './pages/Homepage/Homepage';
import { ThemeProvider } from 'styled-components';
import theme from './ui/themes';

ReactDom.render(<ThemeProvider theme={theme.VINE}>
                  <HomePage/>
                </ThemeProvider>, document.getElementById('rick-and-morty-app'));
