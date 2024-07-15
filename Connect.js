// These variables are for the start screen
var isP1 = true; // This boolean variable is to keep track of who's turn it is, every move will flip it
var red = 0; // These color variables is to hold the values from the sliders
var green = 0;
var blue = 0;
var p1C = document.getElementById("p1ColorShow").style.backgroundColor; // These variables is to hold the three rgb colors
var p2C = document.getElementById("p2ColorShow").style.backgroundColor;
var c1 = false; // These two boolean values is to see if the player has changed the player's colors
var c2 = false;

//These variables are for the gameboard screen
// The gameboard is six seperate arrays of 0's, I tried making a matrix but it kept returning an error so this is a work around
var row1 = [0,0,0,0,0,0,0];
var row2 = [0,0,0,0,0,0,0];
var row3 = [0,0,0,0,0,0,0];
var row4 = [0,0,0,0,0,0,0];
var row5 = [0,0,0,0,0,0,0];
var row6 = [0,0,0,0,0,0,0];

// Grabs the values from the hidden text boxes and makes it player's 1 color, once player 1 and player 2 buttons
// are pressed, then the start button appears, this is to avoid a bug I found so this is the solution
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

// Grabs the values from the hidden text boxes and makes it player's 2 color, once player 1 and player 2 buttons
// are pressed, then the start button appears, this is to avoid a bug I found so this is the solution
function p2Color() {
    red = document.getElementById("redValue").innerHTML;
    green = document.getElementById("greenValue").innerHTML;
    blue = document.getElementById("blueValue").innerHTML;
    document.getElementById("p2ColorShow").style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
    p2C = document.getElementById("p2ColorShow").style.backgroundColor;
    c2 = true;
    if (c1) {
        if (c2) {
            document.getElementById("start").style.display = "flex";
        }
    }
}

// Picks random values for the red, green and blue values and assigns it to the slider, then sets it color for player
// 1, then does that all again for player 2, and then shows the start button
function randomC() {
    document.getElementById("myRangeR").value = Math.floor(Math.random() * 256);
    document.getElementById("myRangeG").value = Math.floor(Math.random() * 256);
    document.getElementById("myRangeB").value = Math.floor(Math.random() * 256);
    document.getElementById("redValue").innerHTML = document.getElementById("myRangeR").value
    document.getElementById("greenValue").innerHTML = document.getElementById("myRangeG").value
    document.getElementById("blueValue").innerHTML = document.getElementById("myRangeB").value
    red = document.getElementById("redValue").innerHTML;
    green = document.getElementById("greenValue").innerHTML;
    blue = document.getElementById("blueValue").innerHTML;
    document.getElementById("p1ColorShow").style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
    p1C = document.getElementById("p1ColorShow").style.backgroundColor;
    c1 = true;

    document.getElementById("myRangeR").value = Math.floor(Math.random() * 256);
    document.getElementById("myRangeG").value = Math.floor(Math.random() * 256);
    document.getElementById("myRangeB").value = Math.floor(Math.random() * 256);
    document.getElementById("redValue").innerHTML = document.getElementById("myRangeR").value
    document.getElementById("greenValue").innerHTML = document.getElementById("myRangeG").value
    document.getElementById("blueValue").innerHTML = document.getElementById("myRangeB").value
    red = document.getElementById("redValue").innerHTML;
    green = document.getElementById("greenValue").innerHTML;
    blue = document.getElementById("blueValue").innerHTML;
    document.getElementById("p2ColorShow").style.backgroundColor = "rgb(" + red + "," + green + "," + blue +")";
    p2C = document.getElementById("p2ColorShow").style.backgroundColor;
    c2 = true;

    if (c1) {
        if (c2) {
            document.getElementById("start").style.display = "flex";
        }
    }
}

// Take the elements from the start page and hides them to then show the game screen elements
function startGame() {
    document.getElementById("leftSide").style.display = 'none';
    document.getElementById("slidecontainer").style.display = 'none';
    document.getElementById("myRangeR").style.display = 'none';
    document.getElementById("myRangeG").style.display = 'none';
    document.getElementById("myRangeB").style.display = 'none';
    document.getElementById("label").style.display = 'none';
    document.getElementById("p1Color").style.display = 'none';
    document.getElementById("p2Color").style.display = 'none';
    document.getElementById("rightSide").style.display = 'none';
    document.getElementById("start").style.display = 'none';
    document.getElementById("gameLeft").style.display = 'flex';
    document.getElementById("gameMiddle").style.display = 'flex';
    document.getElementById("gameRight").style.display = 'flex';
    document.getElementById("p1GameColor").style.backgroundColor = p1C;
    document.getElementById("p2GameColor").style.backgroundColor = p2C;
}

// The game it self

function placePiece(col) {
    alert(col);
}