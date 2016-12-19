'use strict';

//IMPORTS
const _ = require('lodash')
const debug = require('debug')('game_service')

const deckService = require('./deck.js')


const gameService = {

    playWar: function(numPlayers) {
        const defaultNumPlayers = 2
        console.log("numPlayers: " + numPlayers)

        var dealtCards = deckService.createThenDeal(defaultNumPlayers); // TODO: hardcoded to default

        var winningValue = gameService.priv.getBestCardValue(dealtCards);
        var winningLocations = gameService.priv.getwinningLocations(dealtCards, winningValue);

        var gameSummary = {
            players: numPlayers,
            cards: dealtCards,
            winningValue: winningValue,
            winningLocations: winningLocations
        }

        return (gameSummary)
    },
    priv: {
        getBestCardValue: function(cards) { //TODO: more efficient method?
            var bestCardValue = -1;
            _.forEach(cards, function(card) {
                if (card.face.value >= bestCardValue) {
                    bestCardValue = card.face.value;
                }
            })
            return bestCardValue;
        },
        getwinningLocations: function(cards, winningValue) { //TODO: more efficient method?
            var winningLocations = []

            for (var i = cards.length - 1; i >= 0; i--) {
                if (cards[i].face.value === winningValue) {
                    winningLocations.push(i)
                }
            }
            return winningLocations;
        }
    }
}



module.exports = gameService;