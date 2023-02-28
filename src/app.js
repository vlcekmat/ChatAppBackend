require('dotenv').config();

const express = require('express');
const app = express();
const routes = require('./routes/message');
const mongoose = require('mongoose');
const cors = require('cors');

// parse incoming JSON payloads
app.use(express.json());
app.use('/', cors(), routes);
app.use(cors());

app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/index.html');
    });

// listens for incoming requests
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('App is listening on port ' + listener.address().port)
})

app.get('/', (req, res) => {
    res.send(JSON.stringify(message));
})

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    (err) => {
            if (err) return console.log("Error: ", err);
            console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
    }
);