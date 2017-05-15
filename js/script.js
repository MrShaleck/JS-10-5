
var buttons = document.getElementsByClassName('button');

var countOfButtons = buttons.lenght;
console.log(countOfButtons);

for ( var i = 0 ; i < countOfButtons ; i++ ) {
    console.log(i);
    console.log(buttons);
    var myElement = document.getElementsByClassName('button');
    var myText = (myElement.innerText);
    console.log(myText);
}
// console.log(buttons);



console.log(buttons);
console.log(myText);