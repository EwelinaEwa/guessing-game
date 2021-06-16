(function() {
    function getSecretNumber(max) {
       return Math.ceil(Math.random() * max);
    };

    let students = 15;
    const secretNumber = getSecretNumber(students);

    document.getElementById("guessButton").addEventListener("click", function () {
        const guessedNumber = Number(document.getElementById("guessNumber").value);

        if (secretNumber == guessedNumber) {
            document.getElementById("result").innerHTML = `Awesome! Your number ${guessedNumber} was correct. You can be named many things, hungry not being one of them.`
        }
        else if (secretNumber == guessedNumber+1 || secretNumber == guessedNumber-1) {
            document.getElementById("result").innerHTML = `So close, but you just missed it! Are you in a class that started on the thirteenth or what?`
        }
        else {
            document.getElementById("result").innerHTML = `Bummer... You guessed ${guessedNumber} and the secret number was ${secretNumber}.`
        }
    })


})();