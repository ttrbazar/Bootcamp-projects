function basketballGame(name1, name2, scores1, scores2) {
    average1 = (scores1[0] + scores1[1] + scores1[2]) / 3;
    average2 = (scores2[0] + scores1[1] + scores1[2]) / 3;
    if (average1 > average2) {
        return ('John\'s team wins with ' + average1 + ' points');
    } else if (average2 > average1) {
        return ('Mike\'s team wins with ' + average2 + ' points');
    } else {
        return ('There is a draw');
    }
}

const scoresJohn = [189, 120, 103];
const scoresMike = [129, 94, 103];

console.log(basketballGame("John", "Mike", scoresJohn, scoresMike));