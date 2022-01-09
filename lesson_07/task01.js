        'use strict'

       const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];    
       const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
      
       const filter = (a, b) => {
               let stud = [];
               for(let i = 0; i < a.length; i++)
               stud = a.filter(item => !b.includes(item))
               return stud;
       };
              console.log('Студенты, сдавшие экзамен: ', filter(allStudents, failedStudents));

       

       
       
       
       

       
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        /*const filter = (allStudents, failedStudents) => {

        const student = [];

       for (let i = 0; i < allStudents.length; i++) {
         
            
    
      };
      
      const res = filter(allStudents, failedStudents);
      console.log('res: ', res);*/

      
      
       

        
        
