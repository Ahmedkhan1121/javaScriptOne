// for(var i=1; i<=5; i++){
//     console.log(i);
// }
// for(var i =5; i>=1; i--){
//     console.log(i);
// }
//Nested Loop
for(var i=1; i<=5; i++){
    for(var j=1; j<=i; j++){
        document.write(j);
    }
    document.write('<br>')
}
// for(var i=1; i<=5; i++){
//     for(var j=1; j<=i; j++){
//         document.write(i);
//     }
//     document.write('<br>')
// }
for(var i=5; i>=1; i--){
    // console.log(i);
    for(var j=1; j<=i; j++){
        document.write(j)
    }
    document.write('<br>')
}
var star = '';
for(var i=1; i<=5; i++){
    star += '*';   // star = star +'*'
    document.write(star);
    document.write('<br>');
}