'use strict';

//IMPORTS
const Hapi = require('hapi');
const debug = require('debug')('cardroutes')

const cardsService = require('../services/cards.js')

module.exports =
    [{
        method: 'GET',
        path: '/randomcard',
        handler: function(request, reply) {
        	var randomCard = cardsService.getRandomCard();
            return reply(randomCard);
        }
    }]