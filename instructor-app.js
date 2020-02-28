'use strict';

const io = require('socket.io-client');
const school =io.connect('http://localhost:3000/school');

school.emit('instructors' , 'New Instructor connected !!');

school.on('grading' , data => 
{
  let grade = Math.random() * 19;
  school.emit('graded' , {
    grade : grade.toFixed() ,assignment : data,
  });
});