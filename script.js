// var a =12;
// let b = 13;
// sconst discount =100
// console.log(a)

// const { log } = require("node:console")

// types of console

// console.log("hi")
// console.info("hi")
// console.warn("hi")
// console.error("hi")

// console.table({name: "Aakash"})

// let nm = prompt("name ?")
// console.log(nm)

// DATA TYPES
// var a;
// console.log(a)

// var a = [1,2,3,4]
// var b=a;
// b.pop()
// console.log(b)

// let a = prompt("name ?")
// alert(`HEY ${a}`)

// let a = prompt()  // Prompt se jo bhi lo ge wo 1 String ban jaye ga This is the problem in JS
// console.log(typeof a)

// let count = 5;
// console.log(count);
// count = count-- + 5;
// console.log(count);

// var hello;
// hello()

// var hello =function(){
//     console.log("hi")
// }

// console.log(a)
// let a =12

// if(0){
//     console.log("Hello")
// }
// else{
//     console.log("bye")
// }

// var a = 112>13?console.log("ha bhai bada hai "):console.log("nahi bhai")

// switch(8){
//     case 1 : console.log("hey");break;
//     case 2 : console.log("hey hey ");break;
//     case 3 : console.log("hey hey hey ");break;
//     case 4 : console.log("hey hey hey hey ") ;break;
//     case 5 : console.log("hey hey hey hey hey ");break;
//     default: console.log("1-5 daal")
// }

// FOR Loops

// for(start;end;change)
// for(let i=2;i<33;i++){
//     console.log(i)
// }

// for(let i=121; i>12;i--){
//     console.log(i)
// }

// for(let i=12;i>0;i--){
//     if(i===5 || i===7){}//bypass
//     else console.log(i)
// }

// 1. Print Even number

// for(let i=1;i<=20;i++){
//     if(i%2===0){
//         console.log("EVEN :-  " + i)
//     }
// }
// for(let i=2;i<=20;i+=2){ // simple way
//     console.log("EVEN :-  " + i)
// }

// 2. Print Reverse Number

// for(let i=10;i>0;i--){
//     console.log(i)
// }

// 3. Print word 5 times

// for(let i=1;i<=5;i++){
//     console.log("yes")
// }

// 4. Print EVEN ODD if me EVEN else me ODD

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//         console.log(`${i} - Even`)

//     }
//     else{
//         console.log(`${i} - Odd`)
//     }
// }

// 5. Ask user a numeber and say if is it +ve or -ve using prompt

//   let num= +prompt("number do")
//   if(num>=0){
//     console.log(`${num} - Positive number`)
//   }
//   else{
//     console.log(`${num} - Negative number`)
//   }

// 6. check whether user is eligible for vote or not

// let age=+prompt("Age Batao")
// if(age>=18){
//     console.log(`You are ${age}, you can vote`)
// }
// else{
//     console.log(`You are ${age}, you can't vote`)
// }

// let age = prompt("age batao");
// if (age === null) {
//   console.error("abe cancel dabya ");
// } else {
//   if (age.trim() === "") {
//     console.error(`bhai sahi se likh le `);
//   } else {
//     age = Number(age.trim());
//     if (isNaN(age)) {
//       console.warn("bhai please number dede....");
//     } else {
//       if (age < 0) console.error("Negative value dala");
//       else if (age >= 18 && age<=125) console.log(` your age is ${age} you can vote`);
//       else console.warn(`your age is ${age} you can't vote`);
//     }
//   }
// }

// // 7 . Print 5 ka table

//   for(let i=1;i<=10;i++){
//     console.log(`38 X ${i} = `+ i*38)
//   }

// 9 . Count how many number between 1 and 15 are greater than 8 Loop and count conditionally

// let count = 0;
// for(let i =1; i<=15;i++){
//   if(i>8){
//     count++;
//     console.log(i)
//   }
// }
// console.log(`total count is ${count}`)

// 10. Ask user for password and print access status

// let password = "Admin@123";

// let pass = prompt("password de de bhai");
// if (pass === null) {
//   console.log("you cancelled it");
// } else {
//   if (pass === password) {
//     console.log("matched");
//   } else {
//     console.log("not matched");
//   }
// }


// LEVEl 2 :- 11. Allow only 3 attemt to enter correct password if user gets it right early, stop. if not Account Locked

 let password = "Admin"
  let pass = prompt("Pass de")
   if (pass === null) {
  console.log("you cancelled it");
   }
 for(let i=1;i<=3;i++){
  if(password===pass){
    console.log("khul gya")
  }
  else{
    console.log("locked")
  }
 }