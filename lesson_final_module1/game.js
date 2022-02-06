/* eslint-disable eqeqeq */
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
      if (balls.player < 1) {
        return alert('Бот выиграл');
      } if (balls.computer < 1) {
        return alert('Вы выиграли');
      }
      const usNum = prompt(`введи число от 1 до ${balls.player}`);
      const botNum = getRandomIntInclusive(1, 2);


      if (usNum === null) {
        return alert('Пока');
      }
      if (isNaN(usNum)) {
        alert('Вы ввели не число');
        start();
      }
      if (usNum < 1) {
        alert('Вы ввели отрицательное число');
        start();
      }
      if (usNum > balls.player) {
        alert('Вы ввели число больше');
        start();
      }
      if ((usNum % 2 == 0) && (botNum % 2 == 0)) {
        balls.addComputer(+usNum);
        balls.takePlayer(+usNum);
        alert(`Бот: число четное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
        start();
      }
      if ((usNum % 2 !== 0) && (botNum % 2 !== 0)) {
        balls.addComputer(+usNum);
        balls.takePlayer(+usNum);
        alert(`Бот: число нечетное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
        start();
      }
      if ((usNum % 2 == 0) && (botNum % 2 !== 0)) {
        balls.addPlayer(+usNum);
        balls.takeComputer(+usNum);
        alert(`Бот: число нечетное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
        start();
      }
      if ((usNum % 2 !== 0) && (botNum % 2 == 0)) {
        balls.addPlayer(+usNum);
        balls.takeComputer(+usNum);
        alert(`Бот: число нечетное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
        start();
      }
    }());
  };
  window.marbles = game;
})();
