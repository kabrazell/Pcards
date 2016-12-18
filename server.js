'use strict';

//IMPORTS
const Hapi = require('hapi');
const debug = require('debug')('server')
const _ = require('lodash')

const cardsroutes = require('./routes/cards')

const server = new Hapi.Server();
const default_port = 8000

const routes = 
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

//Add Routes
server.route(cardsroutes)

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
}); 