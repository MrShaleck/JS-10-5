
var buttons = document.getElementsByClassName('button');

var countOfButtons = buttons.length;
console.log(countOfButtons);

for ( var i = 0 ; i < countOfButtons ; i++ ) {
    var myElement = buttons[i];
    console.log(myElement.innerText);
}
