/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
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
      addPlayer(usBal) {
        this.player += usBal;
      },
      addComputer(compBal) {
        this.computer += compBal;
      },
      takePlayer(usBal) {
        this.player -= usBal;
      },
      takeComputer(compBal) {
        this.computer -= compBal;
      },
    };

    return (function start() {
      const user = prompt('Выберите: камень, ножницы или бумага?');
      const comp = getRandomIntInclusive(0, 2);

      if (
        (user === 'камень') && (comp === 0) ||
      (user === 'бумага') && (comp === 2) ||
      (user === 'ножницы') && (comp === 1)) {
        alert('Ничья');
        return start();
      }

      if (
        (user === 'камень') && (comp === 2) ||
        (user === 'бумага') && (comp === 1) ||
        (user === 'ножницы') && (comp === 0)) {
        return stepBot();
      }

      if (
        (user === 'камень') && (comp === 1) ||
        (user === 'бумага') && (comp === 0) ||
        (user === 'ножницы') && (comp === 3)) {
        return stepPlayer();
      }
      if (user === null) {
        return alert('Пока');
      } else {
        return start();
      }

      function stepPlayer() {
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
          stepPlayer();
        }
        if (usNum < 1) {
          alert('Вы ввели отрицательное число');
          stepPlayer();
        }
        if (usNum > balls.player) {
          alert('Вы ввели число больше');
          stepPlayer();
        }
        if ((usNum % 2 == 0) && (botNum % 2 == 0)) {
          balls.addComputer(+usNum);
          balls.takePlayer(+usNum);
          alert(`Бот: число четное \n
      У Вас: ${balls.player} \n
      У Бота: ${balls.computer}`);
          stepBot();
        }
        if ((usNum % 2 !== 0) && (botNum % 2 !== 0)) {
          balls.addComputer(+usNum);
          balls.takePlayer(+usNum);
          alert(`Бот: число нечетное \n
      У Вас: ${balls.player} \n
      У Бота: ${balls.computer}`);
          stepBot();
        }
        if ((usNum % 2 == 0) && (botNum % 2 !== 0)) {
          balls.addPlayer(+usNum);
          balls.takeComputer(+usNum);
          alert(`Бот: число нечетное \n
      У Вас: ${balls.player} \n
      У Бота: ${balls.computer}`);
          stepBot();
        }
        if ((usNum % 2 !== 0) && (botNum % 2 == 0)) {
          balls.addPlayer(+usNum);
          balls.takeComputer(+usNum);
          alert(`Бот: число четное \n
      У Вас: ${balls.player} \n
      У Бота: ${balls.computer}`);
          stepBot();
        }
      }
      function stepBot() {
        {if (balls.player < 1) {
          return alert('Бот выиграл');
        }
        if (balls.computer < 1) {
          return alert('Вы выиграли');
        }}
        const usNum = confirm(`Число четное?`);
        const botNum = getRandomIntInclusive(1, balls.computer);

        if
        ((usNum === true) && (botNum % 2 == 0) ||
        (usNum === false) && (botNum % 2 !== 0)) {
          balls.addPlayer(botNum);
          balls.takeComputer(botNum);
          alert(`Число Бота: ${botNum} "\n"
          Вы + ${botNum} очков "\n"
          У Вас: ${balls.player} "\n"
          У Бота: ${balls.computer}`);
          return stepPlayer();
        } else {
          balls.addComputer(botNum);
          balls.takePlayer(botNum);
          alert(`Число Бота: ${botNum} "\n"
          Бот: + ${botNum} очков "\n"
          У Вас: ${balls.player} "\n"
          У Бота: ${balls.computer}`);
          return stepPlayer();
        }
      }
    })();
  };
  window.marbles = game;
})();
