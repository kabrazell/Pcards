'use strict';

//IMPORTS
const debug = require('debug')('deckroutes')

const deckService = require('../services/deck.js')

module.exports =
    [{
        method: 'GET',
        path: '/decks/new',
        handler: function(request, reply) {
            return reply(deckService.createNewDeck());
        }
    },
    {
        method: 'GET',
        path: '/decks/deal/{numcards}',
        handler: function(request, reply) {
        	var numcards = encodeURIComponent(request.params.numcards)
            return reply(deckService.createThenDeal(numcards));
        }
    }
    ]