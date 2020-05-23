export default (content) => `<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
  </head>
  <body>
    <div id="rick-and-morty-app">${content}</div>
    <script src="dependencies.js"></script>
    <script src="client.js"></script>
  </body>
</html>`;