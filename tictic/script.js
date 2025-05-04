const cells = document.querySelectorAll('.cell');
const playerTurn = document.getElementById('playerTurn');
const result = document.getElementById('result');
const crossRadio = document.getElementById('cross');
const zeroRadio = document.getElementById('zero');
const restartBtn = document.getElementById('restartBtn');

let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '';
let gameActive = false;

// Handle radio button selection
function handleRadioChange(e) {
    if (e.target.checked) {
        currentPlayer = e.target.value;
        gameActive = true;
        playerTurn.textContent = currentPlayer;
        crossRadio.disabled = true;
        zeroRadio.disabled = true;
    }
}

crossRadio.addEventListener('change', handleRadioChange);
zeroRadio.addEventListener('change', handleRadioChange);

// Handle cell clicks
cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-index');
        
        if (!gameActive || gameState[index] !== '') return;
        
        gameState[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        
        if (checkWin()) {
            result.textContent = `Player ${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
        
        if (gameState.every(cell => cell !== '')) {
            result.textContent = "It's a draw!";
            gameActive = false;
            return;
        }
        
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerTurn.textContent = currentPlayer;
    });
});

// Check for winning combinations
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern => 
        pattern.every(index => gameState[index] === currentPlayer)
    );
}

// Restart game
function restartGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = '';
    gameActive = false;
    playerTurn.textContent = '';
    result.textContent = '';
    cells.forEach(cell => cell.textContent = '');
    crossRadio.checked = false;
    zeroRadio.checked = false;
    crossRadio.disabled = false;
    zeroRadio.disabled = false;
}

restartBtn.addEventListener('click', restartGame);