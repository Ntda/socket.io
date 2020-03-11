const io = require('socket.io')();
const fetchData = require('./fetdata');
const app = require('./index');
const { uuid } = require('uuidv4');
let interval;
let index = 0;

io
    .of('/')
    .on('connection', (socket) => {
        console.log('new client connected');
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => {
            const id = uuid();
            console.log('Send:', id);
            socket.emit('FromAPI', id);
        }, 1000);
    });

io.attach(app.listen(1337, () => {
    console.log('HTTP Server and Socket.IO running on port 1337');
}))
