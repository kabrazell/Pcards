'use strict';

//IMPORTS
const _ = require('lodash')
const debug = require('debug')('deck_service')

const cardService = require('./card.js')

//CONSTANTS
const SUITS = 4
const FACES = 13

const deckService = {

    createNewDeck: function(numSuits, numFaces) { //TODO: to handle future combinations?
        var deck = deckService.priv.genOrderedDeck(SUITS, FACES)
        deckService.priv.shuffle(deck)
        return (deck);
    },

    deal: function(deck, numCards) {// TODO: Handle case where deck is empty?
        var hand = [];

        for (numCards; numCards > 0; numCards--) {
            hand.push(deck.pop())
        }
        return(hand)
    },
    
    createThenDeal: function(numCards) {
        var deck = deckService.createNewDeck()
        var hand = deckService.deal(deck, numCards)
        return(hand)
    },


    priv: {
        genOrderedDeck: function(numSuits, numFaces) {
            var deck = [];
            for (var suitVal = 0; suitVal <= numSuits - 1; suitVal++) {
                for (var faceVal = 0; faceVal <= numFaces - 1; faceVal++) {
                    deck.push(cardService.createCard(suitVal, faceVal))
                }
            }
            return deck;
        },
        shuffle: function(a) {
            var j, x, i;
            for (i = a.length; i; i--) {
                j = Math.floor(Math.random() * i);
                x = a[i - 1];
                a[i - 1] = a[j];
                a[j] = x;
            }
        }
    }
}



module.exports = deckService;