import React from 'react';
import ReactDom from 'react-dom';

import PageContainer from './Container/PageContainer/PageContainer';

declare global {
  interface Window {
    __initialState__: any;
  }
}

const initialState = window.__initialState__;

ReactDom.render(
  <PageContainer initialState={initialState} />,
  document.getElementById('rick-and-morty-app')
);
