'use strict';

const Hapi = require('hapi');
const debug = require('debug')('server')
const _ = require('lodash')

const server = new Hapi.Server();
const default_port = 8000

debug('debug is on for server')

server.connection({ 
    host: 'localhost', 
    port: default_port 
});

server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
        console.log('Server running at:', server.info.uri);
        return reply('hello world');
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
}); 