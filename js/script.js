(function() {
    function getSecretNumber(max) {
       return Math.ceil(Math.random() * max);
    };

    let students = 15;
    const secretNumber = getSecretNumber(students);
    console.log(secretNumber)

    document.getElementById("guessButton").addEventListener("click", function () {
        const guessedNumber = Number(document.getElementById("guessNumber").value);
        console.log(guessedNumber)

        if (secretNumber == guessedNumber) {
            document.getElementById("result").innerHTML = `Awesome! Your number ${guessedNumber} was correct. You can be named many things, hungry not being one of them.`
        }
        else {
            document.getElementById("result").innerHTML = `Bummer... You guessed ${guessedNumber} and the secret number was ${secretNumber}.`
        }
    })


})();