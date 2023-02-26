/*function cState() {
    var rocket = document.getElementById('rocket');
    rocket.classList.toggle('flying');
}*/

var timer = null;
var cdNumber = 10;

var cState = function (state) {
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    cdNumber = 10;
    document.getElementById('cd').innerHTML = cdNumber;

    if (state == 2) {
        timer = setInterval (function () {
            cdNumber = cdNumber-1;
            document.getElementById('cd').innerHTML = cdNumber;
            if (cdNumber <= -1) {
                cState(3);
            };
        }, 600);
    } else if (state == 3) {
        var success = setTimeout(function()
        {
            var randomNumber = Math.round(Math.random()*10);
            console.log(randomNumber);
            if (randomNumber > 5) {
                cState(4);
            } else{
                cState(5);
            }
        }, 5000);
    };
}
