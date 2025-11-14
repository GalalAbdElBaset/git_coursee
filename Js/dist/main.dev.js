"use strict";

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET" , "https://api.github.com/users/elzerowebschool/repos")
// const { createElement } = require("react");
// // console.log(myRequest)
// myRequest.send();
// myRequest.onreadystatechange =function () {
//     // if(myRequest.readyState === 4 ){
//     //     if(myRequest.status === 200 ){
//     //         console.log(myRequest.responseText);
//     //     }
//     // }
//     // console.log(myRequest.readyState);
//     // console.log(myRequest.status);
//     if(this.readyState === 4 && this.status === 200) {
//         // console.log(this.responseText);
//         let jsData  = JSON.parse(this.responseText);
//         for(var i=0 ; i< jsData.length ; i++){
//             let div = document.createElement("div");
//             let repoName =  document.createTextNode(jsData[i].full_name);
//             div.appendChild(repoName)
//             document.body.appendChild(div)
//         }
//     }
// }
// // const json = '{"name":"Galal"}';
// // const data = JSON.parse(json);
// // console.log(data); // Galal
// // const obj = { name: "Galal", age: 22 };
// // const jsoon = JSON.stringify(obj);
// // console.log(jsoon);
// // // {"name":"Galal","age":22}
// function sayHello() {
//     console.log("Hello!");
// }
// function doSomething(callback) {
//     console.log("Doing something...");
//     callback(); 
// }
// function doSomething1(callback1) {
//     console.log("Doing something1...");
//     callback1(); 
// }
// function doSomething2(callback1) {
//     console.log("Doing something2...");
//     callback1(); 
// }
// function doSomething3(callback1) {
//     console.log("Doing something3...");
//     callback1(); 
// }
// doSomething3(function(){
//     doSomething2(function(){
//         doSomething1(function(){
//             doSomething(function(){
//                 sayHello()
//             })
//         })
//     })
// })
// let myRequest = new XMLHttpRequest();
// myRequest.open("GET" , "https://api.github.com/users/elzerowebschool/repos")
// myRequest.send()
// myRequest.onreadystatechange = function(){
//     if(this.readyState === 4 && this.status === 200){
//         let jsData = JSON.parse(this.responseText)  
//         for(var i = 0; i< jsData.length; i++){
//             let div = document.createElement("div")
//             let repoName = document.createTextNode(`${jsData[i].full_name}`)
//             div.appendChild(repoName);
//             document.body.append(div)
//         }
//     }
// }
// function callback(e){
//     e.target.style.color="red";    
// }
// let p= document.querySelector(".test");
// p.addEventListener("click" ,callback )
// function loopp(e) {
//     setInterval(() => {
//         e.target.style.color = "blue";
//     }, 4000);
//     setInterval(() => {
//         e.target.style.color = "red";
//     }, 2000);
// }
// p.addEventListener("click" ,loopp )
// const myPromise = new Promise((resulveFunction , rejectFunction)=>{
//     let connect = true;
//     if(connect){
//         resulveFunction("connection established");
//     }else{
//         rejectFunction(Error("not connect"));
//     }
// })
// console.log(myPromise)
// myPromise.then(
//     (valueResulve)=> console.log('conntection')
//     ,
//     (valueReject)=> console.log("not connection")
// )
// const myPromise = new Promise((resolveFunction,rejectFunction)=>{
//     let employees = [];
//     if(employees.length == 4){
//         resolveFunction(employees)
//     }else{
//         rejectFunction(Error("Number of Employees Is Not 4"))
//     }
// })
// myPromise.then (
//     (resolveValue)=> {
//         resolveValue.length =2;
//         return resolveValue
//     }
// ).then (
//     (resolveValue)=> {
//         resolveValue.length =1;
//         return resolveValue
// }).then (
//     ((resolveValue)=>  console.log(resolveValue))
// ).catch((rejectedResone)=> console.log(rejectedResone)).finally(
//     console.log("The Operation Is Done")
// )
// const getData =(apliLink)=>{
//     return new Promise((resolve , reject)=>{
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function (){
//             if(this.readyState === 4 && this.status === 200 ){
//                 resolve(JSON.parse(this.responseText))
//             }else{
//                 reject("NO DATA FOUND")
//             }
//         }
//         myRequest.open("GET",apliLink)
//         myRequest.send()
//     })
// }
// const list = document.getElementById("repos");
// getData("https://api.github.com/users/elzerowebschool/repos").then(
//      (result)=>{
//         result = result.slice(0 ,10)
//         return result
//     }    
// ).then(
//     (result)=>{
//         if(result[0].name === "Ajax"){
//             console.log("THis name is exist");
//             return 0;
//         }else{
//             console.log("Name is Not Found");
//         }
//     }
// )
// .then(
//     (result)=>{
//         result.forEach(i => {
//             let li = document.createElement('li');
//             li.textContent = i.name;
//             list.appendChild(li)
//         });
//     }
// )
// fetch("https://api.github.com/users/elzerowebschool/repos").then((Data)=>{
//     const myData =Data.json();
//         return myData
// }).then((checkData)=>{
//     checkData.length = 10;
//     return checkData
// }).then((result)=>{
//     console.log(result);
// })
// let myData = function(apilink){
//     return new Promise((reolve , reject)=>{
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload =function(){
//             if(this.readyState === 4 && this.status === 200){
//                 reolve(JSON.parse(this.responseText))
//             }else{
//                 reject(Error("Data Not Found"))
//             }
//         }
//         myRequest.open("GET",apilink)
//         myRequest.send()
//     })
// }
// myData("https://api.github.com/users/elzerowebschool/repos").then(
//     (result)=>{
//         console.log(result)
//     }
// )
// fetch("https://api.github.com/users/elzerowebschool/repos").then(
//     (myData)=>{
//     return myData.json()
//     }
// ).then(
//     (res)=> console.log(res)
// )
// function myData(apilink){
//     return new Promise((resolve , reject)=>{
//         let myRequest = new XMLHttpRequest();
//         myRequest.onload = function() {
//             if(this.readyState === 4 && this.status === 200){
//                 resolve(JSON.parse(this.responseText))
//             }else{
//                 reject(Error("DATA NOT FOUND"))
//             }
//         }
//         myRequest.open("GET",apilink);
//         myRequest.send()
//     })
// }
// myData("https://api.github.com/users/elzerowebschool/repos").then(
//     (dataOfArray)=>{
//         console.log(dataOfArray[0].name)
//     }
// )
// const myFirstPromise = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("I am th first promise")
//     }, 2000);
// })
// const mySecondPromise = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("I am th Second promise")
//     }, 1000);
// })
// const myThirdPromise = new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         resolve("I am th  Third promise")
//     }, 4000);
// })
// Promise.all([myFirstPromise,mySecondPromise,myThirdPromise]).then(
//     (resolvesValues)=>console.log(resolvesValues)
// )
// const myFirstPromise = new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("I am the first promise")
//     },2000)
// })
// const mySecondPromise = new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         reject("I am NOt  Second promise")
//     },2000)
// })
// const myThirdPromise = new Promise ((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("I am the third promise")
//     },2000)
// })
// Promise.race([myFirstPromise,mySecondPromise,myThirdPromise]).then(
//     (result)=>{
//         console.log(result)
//     }
// )
// async function getData(){
//     let user = ["Galal"]
//     if(user.length > 0){
//             return  ("Users Found")
//         }else{
//             throw new Error("Users Not Found")
//         }
// }
// getData().then((res)=>
//     {
//         console.log(res)
//     },
//     (rejectValue)=> console.log(rejectValue)
// )
// async function myData(apilink){
//     return new Promise((resolve,reject)=>{
//         fetch(apilink)
//         .then((data) => data.json())
//         .then((dataJs) => resolve(dataJs))
//         .catch(() => reject(Error("Data Not Found")));
//     })
// }
// async function xml(){
//     console.log("A")
//     await new Promise (resolve => setTimeout(resolve,3000))
//     const result = await myData("https://api.github.com/users/elzerowebschool/repos")
//     // .then(
//     //     (resValue)=> console.log(resValue)
//     //     ,(rejValue)=> console.log(rejValue)
//     // )
//     console.log(result[0].name);
//         console.log("B")
// }
// xml()
// const myPromise = new Promise((resolve , reject)=> {
//     setTimeout(() => {
//         reject("The Bad is Promise")
//     }, 3000);
// })
// async function wait(){
//     console.log("Before Await");
//     try{
//         console.log( await myPromise);
//     }catch(reasone){
//         console.log(`Reasone that ${reasone}`);
//     }
//     console.log("After Await");
// }
// wait()
function wait() {
  var myData;
  return regeneratorRuntime.async(function wait$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("A");
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("https://api.github.com/users/elzerowebschool/repos"));

        case 4:
          myData = _context.sent;
          _context.t0 = console;
          _context.next = 8;
          return regeneratorRuntime.awrap(myData.json());

        case 8:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t2 = _context["catch"](1);
          console.log("Reason ".concat(_context.t2));

        case 15:
          _context.prev = 15;
          console.log("The finaly Prmise");
          return _context.finish(15);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12, 15, 18]]);
}

;
wait();
//# sourceMappingURL=main.dev.js.map
