const startGame = () => {
    const cells = document.querySelectorAll('[data-cell]');
    const scoreContainer = document.querySelectorAll('[data-score]');
    const nameOneInput = document.querySelector('#nameOne');
    const nameTwoInput = document.querySelector('#nameTwo');
    const startBtn = document.querySelector('[data-start]');
    const restartBtn = document.querySelector('[data-restart]');

    startBtn.addEventListener('click', () =>{
        const playerOne = document.querySelector('[data-player-one]');
        const playerTwo = document.querySelector('[data-player-two]');
        playerOne.textContent = (nameOneInput.value).toUpperCase();
        playerTwo.textContent = (nameTwoInput.value).toUpperCase();

        if(nameOneInput.value === ''){
            playerOne.textContent = 'PLAYER ONE';
        }
        if(nameTwoInput.value === ''){
            playerTwo.textContent = 'PLAYER TWO';
        }
        document.querySelector('[data-names]').style.display = 'none';
        restartBtn.style.display = 'flex';
        displayPlayerChoice();
    });

    restartBtn.addEventListener('click', () => {
        location.reload();
    });

    let gameboard = [
        [],
        [],
    ];
    let score = 0;
    const victory = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const checkVictory = (arr1, arr2) => {
        return arr1.every(item => arr2.includes(item));
    };

    const checkForWinner = () => {
        if(
            checkVictory(victory[0], gameboard[0])
            || checkVictory(victory[1], gameboard[0])
            || checkVictory(victory[2], gameboard[0])
            || checkVictory(victory[3], gameboard[0])
            || checkVictory(victory[4], gameboard[0])
            || checkVictory(victory[5], gameboard[0])
            || checkVictory(victory[6], gameboard[0])
            || checkVictory(victory[7], gameboard[0])){
            score++;
            getPlayerOneScore(score);
            stopGame();
        } 
        if(
            checkVictory(victory[0], gameboard[1])
            || checkVictory(victory[1], gameboard[1])
            || checkVictory(victory[2], gameboard[1])
            || checkVictory(victory[3], gameboard[1])
            || checkVictory(victory[4], gameboard[1])
            || checkVictory(victory[5], gameboard[1])
            || checkVictory(victory[6], gameboard[1])
            || checkVictory(victory[7], gameboard[1])){
            score++;
            getPlayerTwoScore(score);
            stopGame();
        } 
        // CHECK FOR A DRAW
        if(gameboard[0].length === 5 
            && gameboard[1].length === 4 
            && !checkVictory(victory[0], gameboard[0])
            && !checkVictory(victory[1], gameboard[0])
            && !checkVictory(victory[2], gameboard[0])
            && !checkVictory(victory[3], gameboard[0])
            && !checkVictory(victory[4], gameboard[0])
            && !checkVictory(victory[5], gameboard[0])
            && !checkVictory(victory[6], gameboard[0])
            && !checkVictory(victory[7], gameboard[0])
            && !checkVictory(victory[0], gameboard[1])
            && !checkVictory(victory[1], gameboard[1])
            && !checkVictory(victory[2], gameboard[1])
            && !checkVictory(victory[3], gameboard[1])
            && !checkVictory(victory[4], gameboard[1])
            && !checkVictory(victory[5], gameboard[1])
            && !checkVictory(victory[6], gameboard[1])
            && !checkVictory(victory[7], gameboard[1])
        ){
            score++;
            getTieScore(score);
            stopGame();
        }
    };
  
    const players = [
        {
            id: 0,
        },
        {
            id: 1,
        }
    ];
    
    let activePlayer = players[0];
    
    function switchPlayerTurn(){
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const displayPlayerChoice = function(){
        cells.forEach((cell) => {
            cell.addEventListener('click', () => {
                if(activePlayer === players[0]){
                    if(!cell.classList.contains('x') && !cell.classList.contains('o')){
                        cell.classList.add('x');
                        gameboard[0].push(parseInt(cell.dataset.cell));
                    };
                } else {
                    if(!cell.classList.contains('x') && !cell.classList.contains('o')){
                        cell.classList.add('o');
                        gameboard[1].push(parseInt(cell.dataset.cell));
                    };
                };

                switchPlayerTurn();
                checkForWinner();
            });               
        });
    };

    const getPlayerOneScore = function(number){
        for(let i = 0; i < scoreContainer.length; i++){
            score = number;
            scoreContainer[0].textContent = score;
        };
    };

    const getTieScore = function(number){
        for(let i = 0; i < scoreContainer.length; i++){
            score = number;
            scoreContainer[1].textContent = score;                
        };
    };

    const getPlayerTwoScore = function(number){
        for(let i = 0; i < scoreContainer.length; i++){
            score = number;
            scoreContainer[2].textContent = score;                
        };
    };

    const stopGame = () => {
        cells.forEach(cell => 
            cell.addEventListener('click', (e)=> {
                e.stopPropagation(); e.preventDefault();
            }, true)
        );
    };
};

const game = startGame();

