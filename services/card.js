'use strict';

//IMPORTS
const _ = require('lodash')
const debug = require('debug')('card_service')

const suits = require('../models/suit.js')
const faces = require('../models/face.js')

const cardService = {
    createCard: function(suitNum, faceNum) {

        //debug("faceNum: " + faceNum + ", suitNum: " + suitNum);

        var face = faces[faceNum];
        var suit = suits[suitNum];

        var card = {
            name: cardService.priv.genProperCardName(face, suit),
            abrv: cardService.priv.genAbrvCardName(face, suit),
            face: face,
            suit: suit
        }

        return (card)
    },
    getRandomCard: function() { //TODO: delete? should be handled by creating a deck and dealing x
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
            return (_.upperFirst(face.name) + " of " + _.upperFirst(suit.name))
        },
        genAbrvCardName: function(face, suit) {
            return (face.digichar + suit.letter)
        },
    }
}



module.exports = cardService;