'use strict';

(() => {
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

    const game = () => {
        const balls = {
            computer: 5,
            player: 5,
            addPlayer(i) {
              this.player += i;
            },
            addComputer(i) {
              this.computer += i;
            },
            takePlayer(i) {
              this.player -= i;
            },
            takeComputer(i) {
              this.computer -= i;
            },
          };
    
    console.log('player: ', balls.player);
    console.log('computer: ', balls.computer);

    return (function start() {
    const usNum = +prompt( `введи число от 1 до ${balls.player}`);
    const botNum = getRandomIntInclusive(1, balls.computer);
    

    if (usNum === null) {
        alert('Пока');
    }
    else if(balls.player < 1 || balls.computer < 1) {
      alert('game over');
      
    }
    else if (isNaN(usNum) || usNum.length === 0) {
        start();
    }
    
    
   
    else if (usNum === botNum) {
      balls.addComputer(usNum);
      balls.takePlayer(usNum);
      alert( `BOT + ${usNum} очков "\n"
      player: ${balls.player} "\n"
      bot: ${balls.computer}`);
      start();
    } 
    else if (usNum != botNum){
      balls.addPlayer(usNum);
      balls.takeComputer(usNum);
      alert( `PLAYER + ${usNum} очков "\n"
      player: ${balls.player} "\n"
      bot: ${balls.computer}`);
      start();
    } 
   
    
    })};
    window.marbles = game;
})();