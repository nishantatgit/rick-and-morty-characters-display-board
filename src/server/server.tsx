import express from 'express';
import React from 'react';
import Html from './html';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import Pagecontainer from '../client/Container/PageContainer/PageContainer';
import fetch from '../client/utils/fetch';
import constants from '../constants';

const app = express();

app.use(express.static('./public'));

app.get('/', async (req: any, res: { send: (content: string) => void }) => {
  const data = await fetch(constants.URLS.characters);
  const {
    data: { results },
  } = data;

  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(<Pagecontainer initialState={results} />)
  );
  const styleTags = sheet.getStyleTags();
  sheet.seal();
  const html = Html(content, results);

  console.log('----------------------');

  console.log('html ', html);

  console.log('-----------------------');
  res.send(html);
});

app.listen('7001', (req: any, res: any) => {
  console.log('server listening on port 7001');
});
