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
      return function firstStep() {
        const user = prompt('Выберите: камень, ножницы или бумага?');
        let comp = getRandomIntInclusive(0, 2);
        const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
        const compVal = () => {
          if (comp === 0) {
            comp = FIGURES_RUS[0];
          }
          if (comp === 1) {
            comp = FIGURES_RUS[1];
          }
          if (comp === 2) {
            comp = FIGURES_RUS[2];
          }
        }; compVal();

        if (user === comp) {
          alert('Ничья');
          return firstStep();
        }

        if (
          (user === 'камень' || user === 'к' ||
           user === 'кам') && comp === 'бумага' ||
            (user === 'бумага' || user === 'бум' || user === 'б') &&
            comp === 'ножницы' ||
            (user === 'ножницы' || user === 'нож' || user === 'н') &&
            comp === 'камень') {
          return stepBot();
        }

        if (
          (user === 'камень' || user === 'к' ||
           user === 'кам') && comp === 'ножницы' ||
            (user === 'бумага' || user === 'бум' || user === 'б') &&
              comp === 'камень' ||
            (user === 'ножницы' || user === 'нож' || user === 'н') &&
            comp === 'бумага') {
          return stepPlayer();
        }
        if (user === null) {
          return alert('Пока');
        } else {
          return firstStep();
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
            alert(`Бот: число четное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
            stepBot();
          }
          if ((usNum % 2 !== 0) && (botNum % 2 !== 0)) {
            balls.addComputer(+usNum);
            balls.takePlayer(+usNum);
            alert(`Бот: число нечетное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
            stepBot();
          }
          if ((usNum % 2 == 0) && (botNum % 2 !== 0)) {
            balls.addPlayer(+usNum);
            balls.takeComputer(+usNum);
            alert(`Бот: число нечетное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
            stepBot();
          }
          if ((usNum % 2 !== 0) && (botNum % 2 == 0)) {
            balls.addPlayer(+usNum);
            balls.takeComputer(+usNum);
            alert(`Бот: число четное "\n"
      У Вас: ${balls.player} "\n"
      У Бота: ${balls.computer}`);
            stepBot();
          }
        }
        function stepBot() {
          if (balls.player < 1) {
            return alert('Бот выиграл');
          }
          if (balls.computer < 1) {
            return alert('Вы выиграли');
          }
          const usNum = prompt(`Число четное? "\n" введите "да" или "нет"`);
          const botNum = getRandomIntInclusive(1, balls.computer);

          if (usNum === null) {
            return alert('Пока');
          }

          if
          ((usNum === 'да') && (botNum % 2 == 0)) {
            balls.addPlayer(+botNum);
            balls.takeComputer(+botNum);
            alert(`Число Бота: ${botNum} "\n"
             Вы + ${botNum} очков "\n"
           У Вас: ${balls.player} "\n"
           У Бота: ${balls.computer}`);
            return stepPlayer();
          }
          if ((usNum === 'нет') && (botNum % 2 !== 0)) {
            balls.addPlayer(+botNum);
            balls.takeComputer(+botNum);
            alert(`Число Бота: ${botNum} "\n"
             Вы + ${botNum} очков "\n"
           У Вас: ${balls.player} "\n"
           У Бота: ${balls.computer}`);
            return stepPlayer();
          }
          if
          ((usNum === 'да') && (botNum % 2 !== 0)) {
            balls.addComputer(+botNum);
            balls.takePlayer(+botNum);
            alert(`Число Бота: ${botNum} "\n"
             Бот: + ${botNum} очков "\n"
           У Вас: ${balls.player} "\n"
           У Бота: ${balls.computer}`);
            return stepPlayer();
          }
          if
          ((usNum === 'нет') && (botNum % 2 == 0)) {
            balls.addComputer(+botNum);
            balls.takePlayer(+botNum);
            alert(`Число Бота: ${botNum} "\n"
             Бот: + ${botNum} очков "\n"
           У Вас: ${balls.player} "\n"
           У Бота: ${balls.computer}`);
            return stepPlayer();
          } else {
            return stepBot();
          }
        }
      }();
    })();
  };
  window.marbles = game;
})();
