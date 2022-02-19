let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessSubmit = document.querySelector('.form__btn');
let guessField = document.querySelector('.form__number');

let resultParagraphs = document.querySelector('.result');
let guesses = document.querySelector('.result__guesses');
let counter = document.querySelector('.result__counter');
let lowOrHi = document.querySelector('.result__low-or-high');
let resetButton = document.querySelector('.reset');

let guessesCount = 10;

guessField.focus();

guessSubmit.addEventListener('click', showResult);
guessField.addEventListener('keydown', key => {
    if (key.keyCode == '13') { //Добавили отслеживание нажатия enter 
        showResult();
    }
});

resetButton.addEventListener('click', resetGame);

function showResult() {
    checkGuess();
    addPrevGuess();
    guessesCount--;
    showBalanceOfGuesses
    
    lowOrHi.scrollIntoView({block: "end", behavior: "smooth"});

    if (guessesCount == 0) {
        lowOrHi.textContent = 'Game over!';
        lowOrHi.style.background = '#cf131c';
        addResetButton();
        disableInput();
    }

    if (+(guessField.value) == randomNumber) {
        lowOrHi.textContent = 'Правильно!';
        lowOrHi.style.background = '#02780b';
        addResetButton();
        disableInput();
    }

    guessField.value = '';
    guessField.focus();

}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;

    guessSubmit.disabled = false;
    guessField.disabled = false;

    let guessesSpans = document.querySelectorAll('.result__guesses span');
    for (let i = 0; i < guessesSpans.length; i++) {
        guesses.removeChild(guessesSpans[i]);
    }
    guessesCount = 10;
    showBalanceOfGuesses();
    
    lowOrHi.textContent = '';
    lowOrHi.style.background = 'transparent';

    removeResetButton();

    guessField.focus();

}

function checkGuess() {
    if (+(guessField.value) > randomNumber) {
        lowOrHi.textContent = 'Меньше!';
        lowOrHi.style.background = '#227094';
    } else if (+(guessField.value) < randomNumber) {
        lowOrHi.textContent = 'Больше!';
        lowOrHi.style.background = '#cf131c';
    }
}
function addPrevGuess() {
    let prevGuess = document.createElement('span');

    prevGuess.append(`${+(guessField.value)} `);
    guesses.append(prevGuess);
}

function showBalanceOfGuesses() {
    let balance = document.querySelector('.result__counter > span');
    balance.textContent = guessesCount ;
    

}

function addResetButton() {
    resetButton.classList.add('reset--able');
}

function removeResetButton() {
    resetButton.classList.remove('reset--able');

}

function disableInput() {
    guessSubmit.disabled = true;
    guessField.disabled = true;
}
