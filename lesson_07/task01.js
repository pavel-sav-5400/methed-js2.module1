'use strict'
const allStudents = [
    'Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'
    ];    
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
const filter = (a, b) => {
    let stud = [];
    stud = a.filter(item => !b.includes(item))
    return stud;
};
    console.log('Студенты, сдавшие экзамен: ', filter(allStudents, failedStudents));