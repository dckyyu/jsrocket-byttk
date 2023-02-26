// using toggle classlist
function doStuff() {
    var stuff = document.getElementById('stuff')
    stuff.classList.toggle('white');
}

// using if else classname for changing class
/*
var doStuff = function () {
    console.log('change happen');
    var currentClassName = document.getElementById('stuff').className;

    if (currentClassName == 'stuff') {
        document.getElementById('stuff').className = 'stuff white';
    } else {
        document.getElementById('stuff').className = 'stuff';
    }
}
*/


var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4'
    ],
    turnOn: function() {
        this.isTurnedOn = true;
    },
    fly: function() {
        alert('fly');
    },
    switchCar: function(isOn) {
        console.log('turn car ' +isOn);
        if (isOn == true) {
            this.isTurnedOn = true;
        } else{
            this.isTurnedOn = false;
        }
    }
}

console.log('hi there my dearest friends!')