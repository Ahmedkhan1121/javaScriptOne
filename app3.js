let prom = prompt('Enter a Number');
console.log(typeof prom);
// if(prom == 2){
//     console.log('Yes is Equal to 2');
// }else{
//     console.log('Yes it is not Equal to 2');

//  }
// console.log(5%2);
// if (prom%2 == 0) {
//     console.log('even number');
    
// } else {
//     console.log("odd number" );
    
// }
// if (prom == 3) {
//     console.log('Equal to 2');
// }else if(prom == 4) {
//     console.log('Equal to 4');  
// }
//  else if (prom == 6){
//     console.log("equal to 6 ");
//  }
// else{
//     console.log('Not Equal');}

//logical operator
//  && and
// || or
// ! not
// if(prom>=80 && prom<=100){
//     console.log('A-one');
// }else if(prom>= 70 && prom<80){
//     console.log("A");
// }
// else if(prom>=60 && prom<70){
//     console.log('B');
// }
// else if(prom>= 50 && prom<60){
//     console.log('C');
// }
// else if (prom>=40  && prom<50)
// {
//     console.log('D');
// }
// else if(prom>=33 && prom<40){
//     console.log('E');
// }
// else{
//     console.log("fail");
// }

var ourPercentage = (prom*100)/550
if(prom== ''){
    alert('Please Enter a Number')
}else{
    console.log(ourPercentage.toFixed(2));
}