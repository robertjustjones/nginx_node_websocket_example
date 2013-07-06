var express = require('express')
var application = express()

var http = require('http')
  
var server = http.createServer(application)
server.listen(8080)

var io = require('socket.io').listen(server)

io.of('/websocket').on('connection', function (socket) 
{
	socket.emit('connected', { test: 'It works' })
})

io.of('/it_must_work_but_either_socket_io_or_nginx_are_broken').on('connection', function (socket) 
{
	socket.emit('connected', { test: 'It must work but either socket.io or nginx are broken' })
})

application.get
(
	'/test', 
	function (input, output)
	{
		output.send({ test: 'Http works' })
	}
)