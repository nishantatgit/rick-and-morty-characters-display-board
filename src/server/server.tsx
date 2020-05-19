import express from 'express';
import React from 'react';
import Html from './html';
import { renderToString } from 'react-dom/server';
import HomePage from '../client/pages/Homepage/Homepage';

const app = express();
const content = renderToString(<HomePage/>);
const html = Html(content);
console.log('html ', html);
app.use(express.static('./public'));

app.get('/', (req,res) => {
  res.send(html);
});

app.listen('7001', (req, res) => {
  console.log('server listening on port 7001');
});

