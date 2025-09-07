// const fs = require("fs");


// fs.writeFileSync('./test.txt' , 'Hey  Saurabhhh Sync');  //sync call...



// fs.writeFile('./test.txt' , 'hello saurabh Async' , (err) => {})  //async call...



// synchoronus task mai result return krta h or agr err h toh usko try catch se handle kr skte h ye return krta h

// const result = fs.readFile('./contact.txt' , "utf-8")
// console.log(result);



// async expect krta h k hm usko call back dege jiske andr vo hmko err aur esult dede ga ye kuch return nhi krta

// fs.readFile('./contact.txt' , 'utf-8' , (err,result) => {
//     if(err){
//         console.log("error" , err);
        
//     }
//     else{
//         console.log(result);
        
//     }
// })



// ye hmesha string leta h toh isliye date ko string mai badla h tolocalstring use krke
// check test.txt 
// fs.appendFileSync('./test.txt' , new Date().getDate().toLocaleString())  


// copy text file to coyp txt
// fs.cpSync('./test.txt' , './copy.txt');   


//this is used to dlt a file
// fs.unlinkSync('./copy.txt');


//used to check stats of file
// console.log((fs.statSync('./test.txt')));

// can create folder like this
// fs.mkdirSync('my-docs');


//this create a folder with file a and b in it that is recursive
// fs.mkdirSync('my-docs/a/b' ,{ recursive:true});