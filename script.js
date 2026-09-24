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

// Nested Function
// function ab(){
//     function cd(){
//         console.log("ander ka chala cd")
//     }
//     cd()
// }
// ab()

// Scope chain
// let a=12 //global scope
// function abcd(){
//      let b = 13;
//      function df(){
//         console.log(b)
//      }

// }
// abcd()

// - Understanding Immediately Invoked Function Expression (IIFE)

// (function () {})()(
//   // - function without name ,  this use to make private variable

//   // example

//   function () {
//     let balance = 5000;
//   },
// )();


//  Fat Arrow Function 

// let fnc = ()=>{
//     console.log("Aaaaa")
// }
// fnc()

// Anonymous Function :- ek ayisa function jiska koi naam naa ho 
    // function() {
    //     console.log("Hello");
    // }


// Higher Order Function 
    // 1. ek aisa fnc jo ki return karde ek aur funtion 
    // wo fnc accept karle ek aur fnc parameter main 

    // // 1.
    // function abcd(){
    //     return function(){
    //     }
    // }

    //2.
    // function ab(){
    // }
    // ab(function cd(){}) // ye he callback function bhi hai 

// pure Function = ek aisa function jo ye 2 chiZe Follow karta hai
                 //   same input hone par same output hota hai 
                   // koi side effect nahi hoga
    // let a = 12
    // function ab(val){
    //     console.log(val+2)
    // }
    // ab(12) // is me ye bina a ko modifiy kiye output dega 

// Impure Function :- 
//          An **impure function** changes external variables or depends on them.

    // let a=12;
    // function ab(val){
    // a= Math.random()+val
    // console.log(a)
    // }
    // ab(12)
    // ab(12)
    // ab(12)
    // ab(12)

    // Closure -> highr order function bhi hota hai 

    // function ab(){
    //     let a= 12;
    //     return function(){
    //         console.log(a)
    //     }
    // }
    // let fun= ab()
    // fun()

/* 🔥 Closure kya hai?

Jab ek inner function, apne outer function ke variables ko remember karta hai, even after outer function ka execution khatam ho gaya ho, usko Closure kehte hain.

Tere example mein:

ab()
 │
 ├── a = 12
 │
 └── inner function
       │
       └── remembers → a
       
*/


// =================+++++++++++++++++++++ Arrays +++++++++++++++++++++======================

// Ararys ->
//  ek se jaada members rakhne ki jagah hote hai
                // 0   1   2    3    4    5    6 
    // let arr = [671,902,3534,4534,5675,8996,4567]
    // console.log(arr[5])

    // How to create Arrays in JS
    // let arr = []
    // let arr2 = new Array()
/*[]              → array banao
[5]             → 5 ko value samjho

new Array()     → empty array
new Array(5)    → 5 length ka empty array
new Array(5,6)  → [5,6]*/


// Understanding how to Accessing Elements in Array

    // let arr = [1,2,3,4,5]
    // console.log(arr[3])


    
// Function on Arrays -[push, pop , shift,unshift, indexof, array destructuring ,filter, some,
                        // map ,reduce ,spread operator, slice, reverse , sort, join, toString]


//------------Push                    
// let arr = [1,2,3,4,5,6]
// arr.push(5)
// console.log(arr) // Array ke END mein new value add karna. ✅ [1, 2, 3, 4, 5, 6, 5]

// ------------POP
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.pop() // last wala remove ho jaye da is me 9 remove hua 
// console.log(arr) 

//------------Shift
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.shift() // starting ki 1st value ko remove kar deta hai 
// console.log(arr) 

//------------UnShift
// let arr = [1,2,3,4,5,6,7,8,9]
// arr.unshift(0) // starting ki 1st me value ko add kar deta hai 
// console.log(arr) 

// //------------indexof
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.indexOf(5) )  // Array ka index value batata hai 

//------------array destructuring
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a,,b]=arr;

//------------filter // ye new array banata hai or filter lagata hai is eg main ye 3 se chote value ko print kar rha (condtion ka use hota hai)
// let arr = [1,2,3,4,]
// let arr2 = arr.filter(function(val){
//     return val<3
// })
// console.log(arr2)

//------------sum
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a,,b]=arr;

// Iterating over Arrays using -[For loop , forEach-ye shirf array par chalta hai ]

// let arr = [1,2,3,4]
// for(let i = 0; i<4; i++){
//     console.log(arr[i])
// }
// let arr = [1,2,3,4]
// arr.forEach(function(val){
//     console.log(val)
// })


// -Understanding what are Object in JS 
// [key-value pair]


// let obj ={
// //  KEY    VALUE
//     name :"aakash",
//     age :25,
//     email:"aakash@gmail.com"
// }

// let obj2 =new Object();

// Creating Object, Accessing Properties, Deleting Property and Nested objects

// let obj = {
//     name :"aakash"
// }
// Accessing 
// console.log(obj[`name`]) // ye 2 tarika hai Access karne kaa
// console.log(obj.name)

//Deleting
// delete obj.name
// console.log(obj.name)

// // Nested Object 
//     let obj={
//         name:"aakash",
//         socials:{
//             instagram:"_aakash7781",
//             facebook:"aakash",
//         }
//     }
//     console.log(obj.socials)

// Recognise How Objects Are Stored, Traverse Keys of an Object, Array as Object. 

// Recognise How Objects Are Stored,
// {
//     name:"aakash"
//     age:27
// }
