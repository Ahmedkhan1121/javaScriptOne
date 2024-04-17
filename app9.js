// Loop through Array
// var arr = ['Apple','Banana','Orange'];
// console.log(arr);
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// };

// 2

// var arr1 =['Ahmed','moiz','ashar','sameer'];
// console.log(arr1);
// for(var i=0; i<arr1.length; i++){
//     console.log(arr1[i]);
// }

// 3
// forEach
// var arr2 = ['Apple','Pineapple','Guava','Mango','Banana','Cherry'];
// arr2.forEach((e,i,a) => {
//     document.write(e+'<br>');
// })

// var arr3 =['mango','apple','orange','cherry',];
// arr3.forEach((e,i,a) => {
//     document.write(e+"<br>")
//     document.write(i+"<br>")
//     // document.write(a+"<br>")
// })

// map halat change karne hutu map use huta he 
// var numArr = [1,2,3,4,5];
// let newNumArr = numArr.map((e,i,a) => {
//     return e-1;
// })
// console.log(newNumArr);

// var numArr1 =[1,2,3,4,5,6,7]
// let newNumArr1 = numArr1.map((e,i,a)=>{
//     return e**3;
// })
// console.log(newNumArr1);

// newNumArr1.map((e,i,a)=>{
//     document.write(e+'<br>')
// })

// filter
// var filtArr = [15,25,45,55,75,44,95,32];
// var newFiltArr = filtArr.filter((e,i,a) => {
//     return e>50;
// })
// console.log(newFiltArr);

// var filtFruit = ['Apple','Banana','Orange','Guava','Pineapple','Kiwi','Lychee','Cherry'];
// var newFilterFruit1 = filtFruit.filter((e,i,a)=>{
//     return i>3
// })
// console.log(newFilterFruit1);

// reduce
// var  reduceArr = [1,2,3,4,5,6,7,8,9,10];
// var newReduceArr = reduceArr.reduce((init,curr) => {
//     return init+curr;
// },0);
// console.log(newReduceArr);
// 2  *
// var  reduceArr1 = [1,2,3,4,5,6,7,8,9,10];
// var newReduceArr1 = reduceArr1.reduce((init,curr) => {
//     return init*curr;
// },1);
// console.log(newReduceArr1);
//  3 -
// var  reduceArr2 = [1,2,3,4,5,6,7,8,9,10];
// var newReduceArr2 = reduceArr2.reduce((init,curr) => {
//     return init/curr;
// },1);
// console.log(newReduceArr2);

// 4 -
// var  reduceArr3 = [1,2,3,4,5,6,7,8,9,10];
// var newReduceArr3 = reduceArr3.reduce((init,curr) => {
//     return -init+curr;
// },0);
// console.log(newReduceArr3);

// let reduceArr4 = ['Lorem','Ipsum'];
// let newReduceArr4 = reduceArr4.reduce((init,curr) => {
//     return init+curr;
// },'');
// console.log(newReduceArr4);
