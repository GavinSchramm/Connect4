// This is for the start screen
var isP1 = true; // This boolean variable is to keep track of who's turn it is, every move will flip it
var red = 0; // These color variables is to hold the values from the sliders
var green = 0;
var blue = 0;
var p1C = document.getElementById("p1ColorShow").style.backgroundColor; // These variables is to hold the three rgb colors
var p2C = document.getElementById("p1ColorShow").style.backgroundColor;
var c1 = false; // These two boolean values is to see if the player has changed the player's colors
var c2 = false;

function p1Color() {
    red = document.getElementById("redValue").innerHTML;
    green = document.getElementById("greenValue").innerHTML;
    blue = document.getElementById("blueValue").innerHTML;
    document.getElementById("p1ColorShow").style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
    p1C = document.getElementById("p1ColorShow").style.backgroundColor;
    c1 = true;
    if (c1) {
        if (c2) {
            document.getElementById("start").style.display = "flex";
        }
    }
}

function p2Color() {
    red = document.getElementById("redValue").innerHTML;
    green = document.getElementById("greenValue").innerHTML;
    blue = document.getElementById("blueValue").innerHTML;
    document.getElementById("p2ColorShow").style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
    p2C = document.getElementById("p1ColorShow").style.backgroundColor;
    c2 = true;
    if (c1) {
        if (c2) {
            document.getElementById("start").style.display = "flex";
        }
    }
}

function startGame() {
    alert(p1C);
    alert(p2C);
}

// The game it self