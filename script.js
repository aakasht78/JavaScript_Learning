// var a =12;
// let b = 13;
// sconst discount =100
// console.log(a)

// const { availableMemory } = require("node:process");

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


// --- Recursion In JS

// function abcd(){
//     console.log("hey")
//     abcd()
// }
// abcd()


// Continue in JS

// for(let i=1;i<10;i++){
//     if(i===5)continue;
//     console.log(i)
// }

// function in JS

// function khanakhaao(){
//     console.log("step 1")
//     console.log("step 2")
//     console.log("step 3")
//     console.log("step 4")
// }
// khanakhaao()

// parameter in JS

// function doSomething(name, age, email){
//     // console.log(name,age,email)
//     console.log(arguments)
// }
// doSomething("Aakash",25,"aakash@gmial.com")

// variable hoisting
// a() // ayise use nahi kar sakte variable me 
// var a = function(){

// }
// a()// ayise use kar sakte ha 
// function a(){}


// function name(){
//     console.log("aakash")
// }
// name()

//  parameters and arguments in funtion 

// function abcd(age, name ){
//     console.log(age,name)
// }
// abcd(12, "vicky") // arguments

// rest parameter 

// function abcd(a,b,...c){
//     console.log(a,b,c)
// }
// abcd(1,2,3,4,5,6,7,8,9)

// hoisting :- kisi cheeZ ke bane ke phale uska istmal kar pana 

 // function me hum is difine hone se phale bhi use kar sakte hai 
// function a(){
//     console.log(
//         "aakash"
//     )
// }

// var a=function(){
//     console.log(
//         "aakash"
//     )
// }
// Error :- Uncaught TypeError: a is not a function

// function a(){} → poora function hoist ✅
// var a = function(){} → sirf a hoist, value initially undefined ❌

// - Paramertes in JS - [`required`, `destructured`, `rest`, `default`]

// required parameter

    // function abcd(a,b,c,d){
    //     console.log(a,b,c,d)
    //     // agar aapne parameter banaaye and aapne unme arguments nahi bheje tho fir wo value parameter ki undifined ho jaayegi
    // }
    // abcd()


// default parameter

// function ab(a=0,b=0,c=0){ // ye ha par hum default values de salte hai other wise undifined aaye ga 
//     console.log(a,b,c)
// }
// ab(1,2)

// `destructured`, `rest`, ===> is ke like OOPS and object lage ga


// - Arguments in JS -[`positional`,`default`, `spread`]

// function ab(a=0,b=0,c=0,d=0){// default hai
//     console.log(a,b,c,d)
// }
// ab(1,2,3,4) // ye [psitional hai]

// function ab(a=0,b=0,c=0,d=0){// default hai
//     console.log(a,b,c,d)
// }
// let arr=[1,2,3,4] // ye hai spread 
// ab(...arr) // ye [psitional hai]
