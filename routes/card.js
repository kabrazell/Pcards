'use strict';

//IMPORTS
const Hapi = require('hapi');
const debug = require('debug')('cardroutes')

const cardsService = require('../services/card.js')

module.exports =
    [{
        method: 'GET',
        path: '/randomcard/{num}',
        handler: function(request, reply) {
        	var randomCard = cardsService.getRandomCards({num});
            return reply(randomCard);
        }
    }
    ]