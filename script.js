let counter = 0;
let wafflesImageWidth = 100;

function giveWaffle() {
    counter++;
    updateWafflesCounter();
}
function donateWaffle() {
    counter--;
    updateWafflesCounter();
}
function updateWafflesCounter() {
    document.getElementById("waffles-counter").innerText = counter;
}
function makeWafflesImageBigger() {
    if (wafflesImageWidth >= 250) {
        return;
    }
    wafflesImageWidth += 50;
    document.getElementById("waffles-image").width = wafflesImageWidth;
}
setInterval(() => {
    counter += 2;
    updateWafflesCounter();
}, 1000);
