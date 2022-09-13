let score = [19, 19];
let endScore = 21;

window.onload = insertHtml(); console.log(checkEven(score[0]), checkEven(score[1]))

function increase(team) {
    score[team]++
    insertHtml();
    console.log(score)
    if(checkDeuce(endScore -1)) {
        console.log('deuce!')
        document.getElementById('now').innerHTML = 'deuce!'
        endScore++;
    }else if(checkMatchPoint()){
        console.log('match point!')
        document.getElementById('now').innerHTML = 'match point!'
    }

    if(score[0] == endScore) {
        document.getElementById('now').innerHTML = 'team0 win!'
    } else if(score[1] == endScore) {
        document.getElementById('now').innerHTML = 'team1 win!'
    }
    console.log(checkEven(score[team]))
    return score[team]
}

function decrease(team) {
    if(checkDeuce(endScore - 2)) {
        endScore--;
    }
    score[team]--;
    insertHtml()
    console.log(score)
    return score[team]
}

function checkEven(n) {
    if(n % 2 == 0) {
        return 'right'
    } else if(n % 2 != 0) {
        return 'left'
    }
    return undefined
}

function checkDeuce(deuceScore) {
    return score[0] == score[1] && score[1] >= deuceScore;
}

function checkMatchPoint() {
    let matchPointScore = endScore - 1;
    return score[0] == matchPointScore || score[1] == matchPointScore
}

function insertHtml() {
    document.getElementById('0').innerHTML = score[0]
    document.getElementById('1').innerHTML = score[1]
}