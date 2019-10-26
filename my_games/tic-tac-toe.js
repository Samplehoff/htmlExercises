var content = document.getElementById('content');
var player = document.getElementById('player');
var ticTacToe = [
    ["-", "-", "-"], // row 1
    ["-", "-", "-"], // row 2
    ["-", "-", "-"], // row 3
]


var isPlayerXTurn = false;
var playerTurn = "";

/////////Functions///////////

function buttonClicked(myEvent) {
    //console.log(myEvent);
    let clickedButton = myEvent.target;
    let clickedButtonId = clickedButton.id;

    let rowIndex = clickedButtonId[0];
    let columnIndex = clickedButtonId[2];
    // update state
    if (ticTacToe[rowIndex][columnIndex]=="-") {
        if (isPlayerXTurn) {
            ticTacToe[rowIndex][columnIndex] = "X";
            isPlayerXTurn = false;
            playerTurn = "O's";
            console.log(player)
        } else { // it is "O's turn"
            ticTacToe[rowIndex][columnIndex] = "O";
            isPlayerXTurn = true;
            playerTurn = "X's";
            console.log(player)
        }



        renderCell(rowIndex, columnIndex);
        //getCellContent(rowIndex,columnIndex);
        player.innerHTML = `It's Player ${playerTurn} turn!`
    }
    checkWinner()

    //console.log(clickedButtonId);
}

function checkWinner() {
    if (ticTacToe[0][0]==="X" && ticTacToe[0][1]==="X" && ticTacToe[0][2]==="X") {
        alert("X Wins!")
    } else if (ticTacToe[0][0]==="O" && ticTacToe[0][1]==="O" && ticTacToe[0][2]==="O") {
        alert("O Wins!")
    }
    if (ticTacToe[1][0]==="X" && ticTacToe[1][1]==="X" && ticTacToe[1][2]==="X") {
        alert("X Wins!")
    } else if (ticTacToe[1][0]==="O" && ticTacToe[1][1]==="O" && ticTacToe[1][2]==="O") {
        alert("O Wins!")
    }
    if (ticTacToe[2][0]==="X" && ticTacToe[2][1]==="X" && ticTacToe[2][2]==="X") {
        alert("X Wins!")
    } else if (ticTacToe[2][0]==="O" && ticTacToe[2][1]==="O" && ticTacToe[2][2]==="O") {
        alert("O Wins!")
    }
    if (ticTacToe[0][0]==="X" && ticTacToe[1][1]==="X" && ticTacToe[2][2]==="X") {
        alert("X Wins!")
    } else if (ticTacToe[0][0]==="O" && ticTacToe[1][1]==="O" && ticTacToe[2][2]==="O") {
        alert("O Wins!")
    }
    
    console.log("check for winner");
}

content.innerHTML = renderGame(ticTacToe);
//player.innerHTML = `It's Player ${playerTurn} turn!`
console.log(playerTurn)

////////render functions///////////

function renderCell(row, column) {
    let id = `${row},${column}`;
    let button = document.getElementById(id);
    button.innerHTML = ticTacToe[row][column];


    //console.log(button);
}


    








function renderGame(game) {
    // Change this render function to use the "game" parameter



    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            
            <div class="w-50 text-center">
                <button id="0,0" onClick="buttonClicked(event)">${game[0][0]}</button>
                <button id="0,1" onClick="buttonClicked(event)">${game[0][1]}</button>
                <button id="0,2" onClick="buttonClicked(event)">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="1,0" onClick="buttonClicked(event)">${game[1][0]}</button>
                <button id="1,1" onClick="buttonClicked(event)">${game[1][1]}</button>
                <button id="1,2" onClick="buttonClicked(event)">${game[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id="2,0" onClick="buttonClicked(event)">${game[2][0]}</button>
                <button id="2,1" onClick="buttonClicked(event)">${game[2][1]}</button>
                <button id="2,2" onClick="buttonClicked(event)">${game[2][2]}</button>
            </div>
        </div>
    `
}