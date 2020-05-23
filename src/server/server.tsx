import express from 'express';
import React from 'react';
import Html from './html';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import HomePage from '../client/pages/Homepage/Homepage';
import theme from '../client/ui/themes';
const app = express();

const sheet = new ServerStyleSheet();
const content = renderToString(sheet.collectStyles(<ThemeProvider theme={theme.DARK}><HomePage/></ThemeProvider>));
const styleTags = sheet.getStyleTags();
sheet.seal();
const html = Html(content);

console.log('----------------------');
console.log('html ', html);
console.log('sheet ', sheet);
console.log('styleTags', styleTags);
console.log('-----------------------');


app.use(express.static('./public'));

app.get('/', (req: any,res: { send: (content: string) => void; }) => {
  res.send(html);
});

app.listen('7001', (req, res) => {
  console.log('server listening on port 7001');
});

