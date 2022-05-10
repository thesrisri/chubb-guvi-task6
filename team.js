"use strict";
exports.__esModule = true;
var player_1 = require("./player");
var Team = /** @class */ (function () {
    // players: [Player];
    function Team(totalRuns) {
        this.totalRuns = totalRuns;
    }
    // addPlayer(player: Player) {
    //     this.players.push(player)
    // }
    // showPlayers() {
    //     this.players.forEach((e) => {
    //         console.log(`{e.name} - {e.jNumber}`)
    //     })
    // }
    Team.prototype.addRuns = function (player) {
        this.totalRuns += player.runs;
    };
    Team.prototype.showTotalRuns = function () {
        console.log(this.totalRuns);
    };
    return Team;
}());
var team1 = new Team(0);
var player1 = new player_1.Player('p1', 1);
// team1.addPlayer(player1)
player1.hit();
player1.hit();
team1.addRuns(player1);
var player2 = new player_1.Player('p2', 2);
// team1.addPlayer(player2)
player2.hit();
player2.hit();
team1.addRuns(player2);
var player3 = new player_1.Player('p3', 3);
// team1.addPlayer(player3)
player3.hit();
player3.hit();
team1.addRuns(player3);
var player4 = new player_1.Player('p4', 4);
// team1.addPlayer(player4)
player4.hit();
player4.hit();
team1.addRuns(player4);
var player5 = new player_1.Player('p5', 5);
// team1.addPlayer(player5)
player5.hit();
player5.hit();
team1.addRuns(player5);
var player6 = new player_1.Player('p6', 6);
// team1.addPlayer(player6)
player6.hit();
player6.hit();
team1.addRuns(player6);
var player7 = new player_1.Player('p7', 7);
// team1.addPlayer(player7)
player7.hit();
player7.hit();
team1.addRuns(player7);
var player8 = new player_1.Player('p8', 8);
// team1.addPlayer(player8)
player8.hit();
player8.hit();
team1.addRuns(player8);
var player9 = new player_1.Player('p9', 9);
// team1.addPlayer(player9)
player9.hit();
player9.hit();
team1.addRuns(player9);
var player10 = new player_1.Player('p10', 10);
// team1.addPlayer(player10)
player10.hit();
player10.hit();
team1.addRuns(player10);
var player11 = new player_1.Player('p11', 11);
// team1.addPlayer(player11)
player11.hit();
player11.hit();
team1.addRuns(player11);
var player12 = new player_1.Player('p12', 12);
// team1.addPlayer(player12)
player12.hit();
player12.hit();
team1.addRuns(player12);
team1.showTotalRuns();
