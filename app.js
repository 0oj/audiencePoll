const express = require('express');
const socket = require('socket.io');

const port = 10000;

var app = express();

app.use(express.static('public'));


var server = app.listen(port, function() {
  console.log(`Listening at port ${port}`);
});

var io = socket(server);


var a = b = c = d = total = counter = 0;

io.on('connection', function(socket) {
  counter++;

  socket.on('disconnect', function() {
    counter--;

    io.sockets.emit('count', {
      counter: counter
    });
  });

  io.sockets.emit('count', {
    counter: counter
  });

  socket.on('addPoll', function(option) {
    if (option == 'a') {
      a++;
    } else if (option == 'b') {
      b++;
    } else if (option == 'c') {
      c++;
    } else if (option == 'd') {
      d++;
    }
    total = a + b + c + d;

    io.sockets.emit('show', {
      total: total,
      a: a,
      b: b,
      c: c,
      d: d
    });
  });
});
