const express = require('express');
const app = express();
const port = 2345;

app.get('/', (req, res) => {
  res.sendFile('./config.js', { root: __dirname });
});
app.listen(port, () => console.log(`listening on port ${port}!`));
