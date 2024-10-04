const container = document.querySelector('[data-container]');
const cells = document.querySelectorAll('[data-cell]');
// const playerResultContainer = document.querySelector('[data-player-result]');
// const tieResultContainer = document.querySelector('[data-tie-result]');
// const computerResultContainer = document.querySelector('[data-computer-result]');
const scoreContainer = document.querySelectorAll('[data-score]');

function startGame(){

    let gameboard = [];

    let score = 0;

    const getPlayerChoice = function(){
        cells.forEach((cell) => {
            cell.addEventListener('click', function(){
                if(!cell.classList.contains('x') || !cell.classList.contains('o')){
                    const newClass = cell.classList.add('x');
                    const getClass = (function(){
                            const id = cell.dataset.cell;
                            return id;
                        })();
                    gameboard.push(getClass);
                    console.log(gameboard);
                };
            });
        });
    };

    const getComputerChoice = function(){

    };

    const getPlayerScore = function(number){
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

    const getComputerScore = function(number){
        for(let i = 0; i < scoreContainer.length; i++){
            score = number;
            scoreContainer[2].textContent = score;                
        };
    }

    return {getPlayerChoice, getPlayerScore, getTieScore, getComputerScore};

};

const game = startGame();
game.getPlayerChoice();
game.getPlayerScore(0);
game.getTieScore(19);
game.getComputerScore(8);