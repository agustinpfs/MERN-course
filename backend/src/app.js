const express = require('express');
const cors = require('cors');
const app = express();

// settings

app.set('port', process.env.PORT || 3000);   // send data to frontend - from app set the port('port' is a variable - 4000 is the value)
                                        // If process.env.PORT exist, catch it(.env). If not use 4000.




// middlewares
app.use(cors());
app.use(express.json()); //send json files

// routes

app.get('/users', (req, res) => res.send('users routes'))
app.get('/notes', (req, res) => res.send('notes routes'))

module.exports = app;

