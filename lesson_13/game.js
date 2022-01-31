/* eslint-disable no-useless-concat */
'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
      incPlayer(i) {
        this.player += i;
      },
      incComputer(i) {
        this.computer += i;
      },
    };
    return function start() {
      const user = prompt('Выберите: камень, ножницы или бумага?');
      let comp = getRandomIntInclusive(0, 2);
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

      if (user === '') {
        start();
      }

      if (user === comp) {
        alert('Ничья');
        const ques = confirm('Ещё?');
        if (ques === true) {
          start();
        } else {
          alert('Ваши очки: ' + result.player +
          '\n', 'Очки компьютера: ' + result.computer);
        }
      }
      if (user === 'камень' && comp === 'бумага' || user === 'бумага' &&
        comp === 'ножницы' || user === 'ножницы' && comp === 'камень') {
        alert('Ваш выбор: ' + user +
        '\n' + 'Выбор компьютера: ' + comp + '\n' + 'Вы проиграли');
        result.incComputer(1);
        const ques = confirm('Ещё?');
        if (ques === true) {
          start();
        } else {
          alert('Ваши очки: ' + result.player +
          '\n' + 'Очки компьютера: ' + result.computer);
        }
      }
      if (user === 'камень' && comp === 'ножницы' || user === 'бумага' &&
        comp === 'камень' || user === 'ножницы' && comp === 'бумага') {
        alert('Ваш выбор: ' + user +
        '\n' + 'Выбор компьютера: ' + comp + '\n' + 'Вы выиграли');
        result.incPlayer(1);
        const ques = confirm('Ещё?');
        if (ques === true) {
          start();
        } else {
          alert('Ваши очки: ' + result.player +
           '\n' + 'Очки компьютера: ' + result.computer);
        }
      }
      if (user === null) {
        const exit = confirm('Вы точно хотите выйти?');
        if (exit === true) {
          alert('Ваши очки: ' + result.player +
           '\n' + 'Очки компьютера: ' + result.computer);
        } else {
          alert('Играем дальше =)');
          start();
        }
      }
    };
  };
  window.RPS = game;
})();
