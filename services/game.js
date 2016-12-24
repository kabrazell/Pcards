'use strict';

//IMPORTS
const _ = require('lodash')
const debug = require('debug')('game_service')

const deckService = require('./deck.js')


const gameService = {

    playWar: function(numPlayers, numCards) {
        const DEFAULTNUMPLAYERS = 2;
        console.log("numPlayers: " + numPlayers)

        var players = [];
        var hands = [];
        var deck = deckService.createNewDeck();

        for (var i = players.length - 1; i >= 0; i--) {
            var hand = deckService.evaluateHand(deckService.deal(deck, numCards))
            players[i].number = i
            players[i].hand = hand
            hands.push(hand)
        }

        var winningHand = gameService.priv.getBestHand(hands);
        var winningLocations = gameService.priv.determineWinners(players, winningHand);

        var gameSummary = {
            totalPLayers: numPlayers,
            players: numPlayers,
            cards: dealtCards,
            winningValue: winningValue,
            winningLocations: winningLocations
        }

        return (gameSummary)
    },
    evaluateHand: function(hand) {

        var handProperties = {
            hand: hand
            highCardValue = deckService.priv.getHighestCardFaceValue(hand);
            pair = deckService.priv.hasPair(hand)
        }
        return handProperties;
    },
    priv: {
        getHighestCardFaceValue: function(cards) {
            var bestCardValue = -1;
            _.forEach(cards, function(card) {
                if (card.face.value >= bestCardValue) {
                    bestCardValue = card.face.value;
                }
            })
            return bestCardValue;
        },
        determineWinners: function(players, winningHand) {
            var winningLocations = []

            for (var i = cards.length - 1; i >= 0; i--) {
                if (cards[i].face.value === winningValue) {
                    winningLocations.push(i)
                }
            }
            return winningLocations;
        },
        hasPair: function(hand) {
            var hasPair = false;
            var pairCards = [];

            hand.forEach(function(card) {
                var matchingCards = _.filter(hand, card.value)
                debug("matchingCards: %o", matchingCards);
                if (matchingCards.length > 1) {
                    hasPair = true;
                    pairCards.push(card)
                }
            })

            var pairProperties = {
                hasPair: hasPair
                highPairValue: deckService.getHighestCardFaceValue(pairCards)
            }

            return pairProperties;
        },
        getBestHand: function(hands) {

            var bestHand = {
                highCardValue: -1
                hasPair: false
                highPairValue = null
            };

            hands.forEach(function(hand) {
                if (hand.highCardValue > bestHand.highCardValue) {
                    bestHand.highCardValue = hand.highCardValue;
                }

                if (hand.pair.hasPair && hand.pair.highPairValue > bestHand.highPairValue) {
                    bestHand.highPairValue = hand.pair.highPairValue
                    bestHand.hasPair = true;
                }
            })



            return bestHand;
        }
    }
}



module.exports = gameService;