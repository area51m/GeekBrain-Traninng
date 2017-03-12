//Для одного игрока
var answerForOne = parseInt(Math.random() * 100);

function playGuessReset() {
    answerForOne = parseInt(Math.random() * 100); 
}

function playGuess() {
    var userAnswer = document.getElementById("guess").value;

    userAnswer = parseInt(userAnswer);
    
    //будем менять цвет текста после нажатия на кнопку
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    color = "#" + color;
    document.getElementById('guessed').style.color = color;

    if (userAnswer > answerForOne && userAnswer > 0) {
        document.getElementById('guessed').innerHTML = "Загаданное число меньше.";        
    } else if (userAnswer < answerForOne && userAnswer > 0) {
        document.getElementById('guessed').innerHTML = "Загаданное число больше.";
    } else if (userAnswer == answerForOne) {
        document.getElementById('guessed').innerHTML = "Вы угадали! Компьютер загадал новое число, можете попробовать еще раз...";
        playGuessReset();
    } else if (userAnswer < 0 || isNaN(userAnswer)) {
        document.getElementById('guessed').innerHTML = "Вы что-то ввели не так...";
    }
}

//Загадки
var correctAnswersCount;
function askQuestion(textBoxId, answer) {
    var userAnswer = document.getElementById(textBoxId).value;
    userAnswer = userAnswer.toLowerCase();
    if (userAnswer == answer) {
        correctAnswersCount++;
    } else document.getElementById(textBoxId).style.backgroundColor = "#f18989";
}

function playPuzzle() {
    correctAnswersCount = 0;
    askQuestion("userAnswer1", "морковка");
    askQuestion("userAnswer2", "светофор");
    askQuestion("userAnswer3", "дверь");
    document.getElementById('correctCount').innerHTML = "Количество правильных ответов: " + correctAnswersCount;
}

//Для двух игроков
var answerForTwo = parseInt(Math.random() * 100);

function playGuessReset2() {
    answerForTwo = parseInt(Math.random() * 100); 
}

function playGuess2() {
    var userAnswer1 = document.getElementById("guess1").value;
    var userAnswer2 = document.getElementById("guess2").value;

    var userAnswer1 = parseInt(userAnswer1);
    var userAnswer2 = parseInt(userAnswer2);

    var hint1 = "guessed1";
    var hint2 = "guessed2";

    //будем менять цвет текста после нажатия на кнопку
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    color = "#" + color;
    document.getElementById('guessed1').style.color = color;
    document.getElementById('guessed2').style.color = color;

    function compare(value, hint) {
        if (value > answerForTwo && value > 0) {
        document.getElementById(hint).innerHTML = "Загаданное число меньше.";        
    } else if (value < answerForTwo && value > 0) {
        document.getElementById(hint).innerHTML = "Загаданное число больше.";
    } else if (value == answerForTwo) {
        if (hint == "hint1") document.getElementById(hint).innerHTML = "Вы угадали! Компьютер загадал новое число, можете попробовать еще раз...";
        else document.getElementById(hint).innerHTML = "Вы угадали! Компьютер загадал новое число, можете попробовать еще раз...";
        playGuessReset2();
    } else if (value < 0 || isNaN(value) || value == null) {
        document.getElementById(hint).innerHTML = "Вы что-то ввели не так...";
    }
    }

    compare(userAnswer1, hint1);
    compare(userAnswer2, hint2);
    }


