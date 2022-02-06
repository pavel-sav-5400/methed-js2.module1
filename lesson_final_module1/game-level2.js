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
      }stepPlayer();

      function stepBot() {
        {if (balls.player < 0) {
          return alert('Бот выиграл');
        }
        if (balls.computer < 0) {
          return alert('Вы выиграли');
        }}
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
      }stepBot();
    }());
  };
  window.marbles = game;
})();
