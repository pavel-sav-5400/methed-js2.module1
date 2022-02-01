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
      const usNum = +prompt(`введи число от 1 до ${balls.player}`);
      const botNum = getRandomIntInclusive(1, balls.computer);


      if (usNum === null) {
        alert('Пока'); // 1 условие
      } else if (balls.player < 1 && balls.computer >= 10) {
        alert('Бот выиграл'); // 2 условие
      } else if (balls.computer < 1 && balls.player >= 10) {
        alert('Вы выиграли'); // 3 условие
      } else if (isNaN(usNum)) {
        alert('Вы ввели не число');
        start(); // 4 условие
      } else if (usNum < 1) {
        alert('Вы ввели отрицательное число');
        start(); // 5 условие
      } else if (usNum > balls.player) {
        alert('Вы ввели число больше');
        start(); // 6 условие
      } else if (usNum === botNum) {
        balls.addComputer(usNum);
        balls.takePlayer(usNum);
        alert(`Бот + ${usNum} очков "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
        start(); // 7 условие
      } else {
        balls.addPlayer(usNum);
        balls.takeComputer(usNum);
        alert(`Вы + ${usNum} очков "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
        start(); // 8 условие
      }
    })();
  };
  window.marbles = game;
})();
