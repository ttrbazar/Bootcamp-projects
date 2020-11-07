const team = {
    _position: {
        centers: [],
        forwards: [],
        guards: []
    },
    get centers() {
        return this._position.centers;
    },
    get forwards() {
        return this._position.forwards;
    },
    get guards() {
        return this._position.guards;
    },
    set centers(arr) {
        this._position.centers = arr;
    },
    set forwards(arr) {
        this._position.forwards = arr;
    },
    set guards(arr) {
        this._position.guards = arr;
    },
    get position() {
        return {
            centers: this.centers,
            forwards: this.forwards,
            guards: this.guards
        }
    },
    addPlayerToPosition(positionName, playerName, playerPoint) {
        this[positionName].push({playerName, playerPoint});
    },
    getRandomPlayerFromPosition(positionName) {
        return this[positionName][Math.floor(Math.random() * this[positionName].length)];
    },
    generateRandomTeam() {
        const playerCenters = this.getRandomPlayerFromPosition("centers");
        const playerForwards = this.getRandomPlayerFromPosition("forwards");
        const playerGuards = this.getRandomPlayerFromPosition("guards");
        const teamAverage = (playerCenters.playerPoint + playerForwards.playerPoint + playerGuards.playerPoint) / 3;
        return `The team consists of players ${playerCenters.playerName}, ${playerForwards.playerName}, ${playerGuards.playerName}. The team average point is ${teamAverage}`;
    }
}

team.addPlayerToPosition("centers", "dghdgh", 34);
team.addPlayerToPosition("centers", "kfghghs", 23);
team.addPlayerToPosition("centers", "rhtst", 43);
team.addPlayerToPosition("centers", "rjjjjj", 45);
team.addPlayerToPosition("centers", "reargdfgfg", 65);

team.addPlayerToPosition("forwards", "ythyhty", 76);
team.addPlayerToPosition("forwards", "dfsgesrggf", 54);
team.addPlayerToPosition("forwards", "tyjfyjfrtyjrtd", 23);
team.addPlayerToPosition("forwards", "retsertw45", 43);
team.addPlayerToPosition("forwards", "sddb6rhsdfg", 45);

team.addPlayerToPosition("guards", "sdfsdf", 65);
team.addPlayerToPosition("guards", "ffrr", 34);
team.addPlayerToPosition("guards", "gfgfgf", 44);
team.addPlayerToPosition("guards", "rjjjjj", 66);
team.addPlayerToPosition("guards", "ggggtttt", 11);

console.log(team.generateRandomTeam());

console.log(team);