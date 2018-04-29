//Installs express 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const routes = require('./routes.js')

// Uses the ng built files from the /dist folder
app.use(express.static(__dirname + '/dist'));

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.use('/api', routes);


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);