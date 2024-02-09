//// variable types
/// var
// let
// const

// var x;
// var x;
// var x;

// var x = 10;
// console.log(x);
// var x=11;
// console.log(x);

// let x=10
// x=11

// const x = 10;
// console.log(x);
// x=11;
// console.log(x);   /// shows error in the console


// const a = [1,2,3,4,5]
// a.push(1)
// a.push(1)
// a.push(1)
// a.push(1)
// a.push(1)
// a.push(1)
// a.push(1)
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// console.log(a);

// function sum(c) {
//     var a= 2;
//     var b = 3;
//     console.log( a+b+c)
// }
// sum(3)

// const a = function() {
//     console.log("asdasdasd");
// }
// a();

// var k = (c,q) => {
//     console.log("value of sum: "+ (c+q));
// }
// k(3,10)

// var k = (c,q) => {
//     console.log(`Value of sum: ${c+q}`);
// }
// k(3,10)

// const fs = require('fs')
// function reading (err,data){
//     if(err) throw err;
//     console.log(data);
// }
// fs.readFile("mandloi.txt","utf-8",reading)
// fs.readFile("mandloi.txt","utf-8",(err,data) => {
//     if(err) throw err;
//     console.log(data);
// })


// const fs = require('fs');

// async function readFileAsync() {
//     console.log("Start");

//     try {
//         // Asynchronous function to read a file using callbacks
//         const data = await new Promise((resolve, reject) => {
//             fs.readFile('./mandloi.txt', 'utf-8', (err, data) => {
//                 if (err) reject(err);
//                 else resolve(data);
//             });
//         });

//         console.log("File content:", data);
//     } catch (err) {
//         console.error("Error reading file:", err);
//         return;
//     }

//     // This part is executed after the file is read
//     console.log("End");
// }

// // Call the asynchronous function
// readFileAsync();


// const a = {
//     id : 2,
//     title : "asdasdas",
//     desc : "Asdasd"
// }
// function callback(resp) {
//     resp.json().then(chutiyap);
// }
// function chutiyap(data) {
    
//     document.getElementById('output').innerText = data.stdout;

//     console.log('Output from backend:', data.stdout);
//     console.log('Error from backend:', data.stderr);
// }
// fetch('http://localhost:3000/code', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ code, input }),
// })
// .then(callback)

// .catch(error => {
//     console.error('Error:', error);
// });
// console.log(a.id);