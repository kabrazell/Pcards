'use strict';

//IMPORTS
const debug = require('debug')('gameroutes')

const gameService = require('../services/game.js')

module.exports =
    [{
        method: 'GET',
        path: '/games/war',
        handler: function(request, reply) {
            return reply(gameService.playWar());
        }
    }]