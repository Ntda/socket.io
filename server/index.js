const express = require('express');
const io = require('socket.io')();
const app = express();

io.path('/socket.io');
app.get('/', (_, res) => {
    res
        .send({ message: 'Connect to server success' })
        .status(200);
});

module.exports = app;
