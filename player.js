"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(name, jNumber) {
        this.name = name;
        this.jNumber = jNumber;
        this.runs = 0;
    }
    Player.prototype.hit = function () {
        var run = Math.round(Math.random() * 6);
        this.runs += Number(run);
    };
    Player.prototype.playerScore = function () {
        console.log(this.runs);
    };
    return Player;
}());
exports.Player = Player;
var player1 = new Player("jane", 1);
player1.hit();
player1.hit();
player1.playerScore();
