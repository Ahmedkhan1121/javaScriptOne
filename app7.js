//String
var myName = "'Hello World'";
console.log(myName);
var myName2 = '"Hello World"';
console.log(myName2.length); // string property
//String Methods
var fruit = 'mango';
var fruitUpd = fruit.toUpperCase(); // toUpperCase()
console.log(fruitUpd);
console.log(fruitUpd.toLowerCase()); // toLowerCase()
//concat()
var one = 'Ahmed';
var two = 'Raza';
var three = one.concat(' ',two); // one+two == concatenation
console.log(three);
//trim()
var name2 = '      Sameer     ';
var trimName = name2.trim();
console.log(trimName);
//slice()
var word = 'applebananaorangeguava';
console.log(word.length);
var wordCopy = word.slice(0,11);
console.log(wordCopy);

var date = '23-2-2024';
console.log(date.length);
var newDate = date.slice(5,9);
console.log(newDate);

var date1 ="ahmed birtday 21-6-2006"
var newDate1 = date1.slice(14,23)
console.log(newDate1);
//replace
var text = 'Visit Microsoft';
var text2 = text.replace(/miCrosoft/i,'Google');
console.log(text2);
// indexOf
var indexFirst = 'Please locate where locate occurs!';
var newIndexFirst = indexFirst.indexOf('locate');
console.log(newIndexFirst);
//lastIndexOf
var indexLast = 'Please locate where locate occurs!';
var newIndexLast = indexLast.lastIndexOf('locate');
console.log(newIndexLast);
