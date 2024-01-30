// app.js or index.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router');

const app = express();

app.use(bodyParser.json());
app.use('/', routes);


app.use((req, res, next) => {
  res.status(404).json({
    message: 'Ohh you are lost, read the API documentation to find your way back home :)'
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
