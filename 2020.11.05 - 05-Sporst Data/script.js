const team = {
    _players: [],
    _games: [],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        this._players.push({firstName, lastName, age});
    },
    addGame(opponent, teamPoints, opponentPoints) {
        this._games.push({opponent, teamPoints, opponentPoints});
    }
}

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame('Titans', 100, 98);
team.addGame('efefffff', 100, 98);
team.addGame('tttdgdfgdfgdf', 100, 98);

console.log(team.players);
console.log(team.games);