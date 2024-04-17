// Array
// var arr = ['Apple','Banana','Orange','kiwi'];
// console.log(arr);
// console.log(arr.length); //property
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// Array Methods

// Slice
// var arr2 = [12,34,56,1,8,9,21,2];
// var arr2Copy = arr2.slice(0,3);
// console.log(arr2Copy);
// console.log(arr2);

// pop()
// let arrPop = ['Cat','Dog','Elephant','Bitch','Rabbit','Lion'];
// let returPop =  arrPop.pop();
// console.log(arrPop);
// console.log(returPop);

// push()
// let arr2 = ['Cat','Dog','Elephant','Bitch','Rabbit','Lion'];
// console.log(arrPop2.length);
// let arrNewLen =  arr2.push('Snake');
// console.log(arr2);
// console.log(arrNewLen);

// shift()
// var arr3 = ['Cat','Dog','Elephant','Bitch','Rabbit','Lion'];
// var returShift =  arr3.shift();
// console.log(arr3);
// console.log(returShift);

// unshift()
// var arr4 = ['Cat','Dog','Elephant','Bitch','Rabbit','Lion'];
// var returNewLen2 =  arr4.unshift('Snake');
// console.log(arr4);
// console.log(returNewLen2);

//splice()
var arr5 = ['Cat','Dog','Elephant','Bitch','Rabbit','Lion'];
arr5.splice(1,2,'Ranbir Kapoor','Tiger','rr','jjj');
console.log(arr5);

//includes
var myName2 = 'Ahmed';
var nameList = ['Ahmed','Sameer','Moiz','Ashar'];
console.log(nameList.includes(myName2));
