const startGame = () => {
    const cells = document.querySelectorAll('[data-cell]');
    const scoreContainer = document.querySelectorAll('[data-score]');

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
    ]

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
            console.log('player one win');
            score++;
            getPlayerOneScore(score);
            cells.forEach(cell => 
                cell.addEventListener('click', (e)=> {
                    e.stopPropagation(); e.preventDefault();
                }, true)
            );
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
            console.log('player two win');
            score++;
            getPlayerTwoScore(score);
            cells.forEach(cell => 
                cell.addEventListener('click', (e)=> {
                    e.stopPropagation(); e.preventDefault();
                }, true)
            );
        } 
        // CHECK FOR A DRAW
        // if(!checkVictory(victory, gameboard[1]) || !checkVictory(victory, gameboard[1])){
        //     console.log("it's a draw")
        //     score++;
        //     getTieScore(score);
        // }
    };

    console.log(gameboard);
  
    const players = [
        {
            id: 0
        },
        {
            id: 1
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
            scoreContainer[0].textContent = score
        };
    };

    const getTieScore = function(number){
        for(let i = 0; i < scoreContainer.length; i++){
            score = number;
            scoreContainer[1].textContent = score;                
        };
    }

    const getPlayerTwoScore = function(number){
        for(let i = 0; i < scoreContainer.length; i++){
            score = number;
            scoreContainer[2].textContent = score;                
        };
    }

    return {displayPlayerChoice};

};

const game = startGame();
game.displayPlayerChoice();


