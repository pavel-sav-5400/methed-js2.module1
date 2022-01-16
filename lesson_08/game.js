'use strict';

const gameBot = () => {
  const rundomNum = Math.round(Math.random() * 100);
  let userNum = +prompt('Введите число от 1 до 100');
 
  if(userNum > rundomNum) {
      alert('Загаданное число меньше');
      return gameBot();
  }
  if(userNum < rundomNum) {
      alert('Загаданное число больше');
      return gameBot();
  }  
  
  if(Number.isNaN(userNum)) {
      alert('Введи число!');
      return gameBot();

  }
  if(userNum === rundomNum) {
      alert('Вы угадали!');
       
  }
  if (userNum === null) {
      alert('Игра окончена');
  } 
};
gameBot();
