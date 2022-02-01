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
    
    return (function start() {
    const usNum = +prompt( `введи число от 1 до ${balls.player}`);
    const botNum = getRandomIntInclusive(1, balls.computer);
    

    if (usNum == null) {
        alert('Пока');
    }
    else if(balls.player < 1 && balls.computer >= 10) {
        alert('Бот выиграл');
    } 
    else if (balls.computer < 1 && balls.player >= 10) {
      alert('Вы выиграли');
    }
    else if (isNaN(usNum) || usNum < 1) {

        start();
    }
    
    else if (usNum > balls.player) {
          alert('Вы ввели число больше');
          start();
    }
   
    else if (usNum === botNum) {
      balls.addComputer(usNum);
      balls.takePlayer(usNum);
      alert( `Бот + ${usNum} очков "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
      
      start();
    } 
    else  {
      balls.addPlayer(usNum);
      balls.takeComputer(usNum);
      alert( `Вы + ${usNum} очков "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
      start();
    } 
   
    
    }());
};
    window.marbles = game;
})();