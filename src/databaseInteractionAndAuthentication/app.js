const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./router');
const pkg = require('../../package.json')

const app = express();

const mongoURI = `mongodb+srv://bilawal:${pkg.dbPassword}@cluster0.guvx3.mongodb.net/Crud?retryWrites=true&w=majority`;

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
  ).then(()=>{
    console.log(" Mongoose is connected")
  })
} catch (e) {
  console.log("could not connect");
}



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

