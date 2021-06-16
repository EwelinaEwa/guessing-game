(function() {
    function getSecretNumber(max) {
       return Math.ceil(Math.random() * max);
    };

    let students = 15;
    const secretNumber = getSecretNumber(students);
    console.log(secretNumber)


})();