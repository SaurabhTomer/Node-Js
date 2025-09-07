const fs = require("fs");
const os = require('os');
console.log(os.cpus().length);



// console.log('1');

// const result = fs.readFileSync('./contact.txt' , 'utf-8');  //sync call... blocking request  not prefer

// console.log(result);
// console.log('2');



//non blocking
// console.log('1');

// fs.readFile('./contact.txt' , 'utf-8',(err,result) => {  // always give result through callback
//     console.log(result);
    
// });  //sync call... blocking request  not prefer

// // console.log(result);
// console.log('2');
// console.log('2');
// console.log('2');



//Default Thread Pool Size = 4
//max ? - 8 core 





// fs.writeFile('./test.txt' , 'hello saurabh Async' , (err) => {})  //async call...  

