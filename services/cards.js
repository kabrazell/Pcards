'use strict';

//IMPORTS
const _ = require('lodash')
const debug = require('debug')('card_service')

const suits = require('../models/suits.js')
const faces = require('../models/faces.js')

const cardService = {
    getRandomCard: function() {
        var cardFace = cardService.priv.getRandomFace()
        var cardSuit = cardService.priv.getRandomSuit()

        var card = {
            face: cardFace.name,
            suit: cardSuit.name,
            name: cardService.priv.genProperCardName(cardFace, cardSuit),
            abrv: cardService.priv.genAbrvCardName(cardFace, cardSuit)
        }
        
        return (card)
    },
    priv: {
        getRandomSuit: function() {
            return (suits[_.random(0, suits.length - 1)])
        },
        getRandomFace: function() {
            return (faces[_.random(0, faces.length - 1)])
        },
        genProperCardName: function(face, suit) {
            return (face.name + " of " + suit.name)
        },
        genAbrvCardName: function(face, suit) {
            return (face.digichar + suit.letter)
        },
    }
}



module.exports = cardService;