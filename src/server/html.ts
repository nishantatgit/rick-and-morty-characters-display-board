import styles from '../globalStyles';
export default (content: string, initialState: any) => `<!doctype html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"> 
    <style>${styles}</style>
  </head>
  <body>
    <script>
       window.__initialState__ = ${JSON.stringify(initialState)}
    </script>
    <div id="rick-and-morty-app">${content}</div>
    <script src="dependencies.js"></script>
    <script src="client.js"></script>
  </body>
</html>`;
