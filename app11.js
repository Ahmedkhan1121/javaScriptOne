// hoisting:   javascrite ke  run hune sa pale javascripte ke function or variable ka run hu jana hoisting khelata he/

// function hoisting
hos();
function hos(){
    console.log('Hello World');         
   
};
// jab browser pr jta ha to 
// function hos(){
//     console.log('Hello World');
// };    
// hos();
var hosRet = hosReturn();
console.log(hosRet);
function hosReturn(){
    return 'Hello World2';
}
// jab browser pr jta ha to 
// function hosReturn(){
//     return 'Hello World2';
// }
// var hosRet = hosReturn();
// console.log(hosRet);

//Variable Hoisting
console.log(a);
var a=10;
// console.log(a);
