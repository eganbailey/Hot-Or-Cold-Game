var count = 0;
var number;

function guessCounter() {
    count++;
    $('#count').text(count);
};

function checkGuess(guess) {
    var difference;
    var guessInt = parseInt(guess);

    if (guess == number) {
        $("#feedback").text("Correct!");
    } else if (guessInt > number) {
        difference = guessInt - number;
    } else if (guessInt < number) {
        difference = number - guessInt;

    }

    if (difference >= 1 && difference <= 10) {
        $("#feedback").text("Very Hot");
    } else if (difference < 10 && difference <= 20) {
        $("#feedback").text("Hot");
    } else if (difference < 20 && difference <= 30) {
        $("#feedback").text("Warm");
    } else if (difference < 30 && difference <= 50) {
        $("#feedback").text("Cold");
    } else if (difference > 50) {
        $("#feedback").text("Ice Cold");
    }


};

function generateNumber() {
    number = Math.floor((Math.random() * 100) + 1);
};


$(document).ready(function() {

    generateNumber();
    console.log(number);

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $("#guessButton").click(function(e) {
        e.preventDefault();
        var guess = $("#userGuess").val();
        var guessEl = '<li>' + guess + '</li>';
        $('#guessList').append(guessEl);
        $('#userGuess').val('');
        guessCounter();
        checkGuess(guess);
    });

    $(".new").on('click', function() {
        window.location.reload(true);
    });


});