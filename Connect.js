// These variables are for the start screen
var red = 0; // These color variables is to hold the values from the sliders
var green = 0;
var blue = 0;
var p1C = document.getElementById("p1ColorShow").style.backgroundColor; // These variables is to hold the three rgb colors
var p2C = document.getElementById("p2ColorShow").style.backgroundColor;
var c1 = false; // These two boolean values is to see if the player has changed the player's colors
var c2 = false;

//These variables are for the gameboard screen
var gameStarted = false;
var isP1 = true; // This boolean variable is to keep track of who's turn it is, every move will flip it
var isBoardMade = false;

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
    startGame = true;
    row1 = [0,0,0,0,0,0,0];
    row2 = [0,0,0,0,0,0,0];
    row3 = [0,0,0,0,0,0,0];
    row4 = [0,0,0,0,0,0,0];
    row5 = [0,0,0,0,0,0,0];
    row6 = [0,0,0,0,0,0,0];
}

// The game it self
// The gameboard is six seperate arrays of 0's, I tried making a matrix but it kept returning an error so this is a work around and I had such a hard time trying to get it to work, but this works, initalize it now and when you start the game, it fills the board with 0's
var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var row6 = [];
var pColor;
var player;

function placePiece(col) {
    var cell = "";
    if (!isP1) {
        pColor = p1C;
        player = 1
        isP1 = true;
        document.getElementById("player1Title").innerHTML = "Player 1"
        document.getElementById("player2Title").innerHTML = "Player 2 Turn"
    } else {
        pColor = p2C;
        player = 2;
        isP1 = false;
        document.getElementById("player1Title").innerHTML = "Player 1 Turn"
        document.getElementById("player2Title").innerHTML = "Player 2"
    }

    if (row6[col-1] == 0) {
        cell = "row" + 6 + "col" + col;
        document.getElementById(cell).style.backgroundColor = pColor;
        row6[col-1] = player;
    } else if (row5[col-1] == 0) {
        cell = "row" + 5 + "col" + col;
        document.getElementById(cell).style.backgroundColor = pColor;
        row5[col-1] = player;
    } else if (row4[col-1] == 0) {
        cell = "row" + 4 + "col" + col;
        document.getElementById(cell).style.backgroundColor = pColor;
        row4[col-1] = player;
    } else if (row3[col-1] == 0) {
        cell = "row" + 3 + "col" + col;
        document.getElementById(cell).style.backgroundColor = pColor;
        row3[col-1] = player;
    } else if (row2[col-1] == 0) {
        cell = "row" + 2 + "col" + col;
        document.getElementById(cell).style.backgroundColor = pColor;
        row2[col-1] = player;
    } else if (row1[col-1] == 0) {
        cell = "row" + 1 + "col" + col;
        document.getElementById(cell).style.backgroundColor = pColor;
        row1[col-1] = player;
        cell = "col" + col + "But";
        document.getElementById(cell).style.display = "none";
    }

    acrossWin(1);
    downWin(1);
    diagWin(1);
    revDiagWin(1);
    acrossWin(2);
    downWin(2);
    diagWin(2);
    revDiagWin(2);
    noWinner();
}

// Checks if 4 pieces are across
function acrossWin(player) {
    for (var i = 0; i < 4; i++){
        if (row1[i] == player) {
            if (row1[i+1] == player) {
                if (row1[i+2] == player) {
                    if (row1[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row2[i] == player) {
            if (row2[i+1] == player) {
                if (row2[i+2] == player) {
                    if (row2[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row3[i] == player) {
            if (row3[i+1] == player) {
                if (row3[i+2] == player) {
                    if (row3[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row4[i] == player) {
            if (row4[i+1] == player) {
                if (row4[i+2] == player) {
                    if (row4[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row5[i] == player) {
            if (row5[i+1] == player) {
                if (row5[i+2] == player) {
                    if (row5[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row6[i] == player) {
            if (row6[i+1] == player) {
                if (row6[i+2] == player) {
                    if (row6[i+3] == player) {
                        afterGame(player)
                    }
                }
            }
        }
    }
}

// Checks if 4 pieces are down
function downWin(player) {
    for (var i = 0; i < 7; i++){
        if (row1[i] == player) {
            if (row2[i] == player) {
                if (row3[i] == player) {
                    if (row4[i] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row2[i] == player) {
            if (row3[i] == player) {
                if (row4[i] == player) {
                    if (row5[i] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row3[i] == player) {
            if (row4[i] == player) {
                if (row5[i] == player) {
                    if (row6[i] == player) {
                        afterGame(player);
                    }
                }
            }
        }
    }
}

// Checks if 4 pieces are in a \ position, (ex. top left to bottom right)
function diagWin(player) {
    for (var i = 0; i < 4; i++){
        if (row1[i] == player) {
            if (row2[i+1] == player) {
                if (row3[i+2] == player) {
                    if (row4[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row2[i] == player) {
            if (row3[i+1] == player) {
                if (row4[i+2] == player) {
                    if (row5[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row3[i] == player) {
            if (row4[i+1] == player) {
                if (row5[i+2] == player) {
                    if (row6[i+3] == player) {
                        afterGame(player);
                    }
                }
            }
        }
    }
}

// Checks if 4 pieces are in a / position, (ex. top right to bottom left)
function revDiagWin(player) {
    for (var i = 6; i > 2; i--){
        if (row1[i] == player) {
            if (row2[i-1] == player) {
                if (row3[i-2] == player) {
                    if (row4[i-3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row2[i] == player) {
            if (row3[i-1] == player) {
                if (row4[i-2] == player) {
                    if (row5[i-3] == player) {
                        afterGame(player);
                    }
                }
            }
        }

        if (row3[i] == player) {
            if (row4[i-1] == player) {
                if (row5[i-2] == player) {
                    if (row6[i-3] == player) {
                        afterGame(player);
                    }
                }
            }
        }
    }
}

function noWinner(){
    if (row1[0] != 0) {
        if (row1[1] != 0) {
            if (row1[2] != 0) {
                if (row1[3] != 0) {
                    if (row1[4] != 0) {
                        if (row1[5] != 0) {
                            if (row1[6] != 0) {
                                alert("No Winner");
                                document.getElementById("player1Title").innerHTML = "Player 1"
                                document.getElementById("player2Title").innerHTML = "Player 2"
                            }
                        }
                    }
                }
            }
        }
    }
}

function afterGame(player) {
    document.getElementById("col1But").style.display = "none";
    document.getElementById("col2But").style.display = "none";
    document.getElementById("col3But").style.display = "none";
    document.getElementById("col4But").style.display = "none";
    document.getElementById("col5But").style.display = "none";
    document.getElementById("col6But").style.display = "none";
    document.getElementById("col7But").style.display = "none";
    document.getElementById("player1Title").innerHTML = "Player 1"
    document.getElementById("player2Title").innerHTML = "Player 2"
    if (player == 1){
        alert("Player 1 Won!");
    } else {
        alert("Player 2 Won!")
    }
}