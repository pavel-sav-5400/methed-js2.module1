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
             return comp = 'камень';
            };
            if (comp === 1) {
             return comp = 'ножницы';
            };
            if (comp === 2) {
             return comp = 'бумага';
            }; 
             
          };compVal();
        
        
        if (user === comp) {
            alert('Ничья');
            start();
        };
        if (user === 'камень' && comp === 'бумага' || user === 'бумага' 
        && comp === 'ножницы' || user === 'ножницы' && comp === 'камень') {
            alert('Вы проиграли');
            result.incComputer(1);
            start();
        };
        if (user === 'камень' && comp === 'ножницы' || user === 'бумага' 
        && comp === 'камень' || user === 'ножницы' && comp === 'бумага') {
            alert('Вы выиграли');
            result.incPlayer(1);
            start();
        }
        if (user === null) {
            const ques = confirm('Вы точно хотите выйти?');
            if (ques === true) {
                alert('Не очень то и хотелось =(' + "\n" + 'Ваши очки: ' + result.player + "\n" + 'Очки компьютера: ' + result.computer);
            }
            else {
                alert('Играем дальше =)');
                start();
            }
        }

         console.log('comp: ', comp);
         
     }()
 }; game()
})();