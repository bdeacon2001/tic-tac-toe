// Function called whenever user tab on any box
ticTacToe = () => {

	// Setting DOM to all boxes or input field
	let box1, box2, box3, box4, box5, box6, box7, box8, box9;
	box1 = document.getElementById("b1").value;
	box2 = document.getElementById("b2").value;
	box3 = document.getElementById("b3").value;
	box4 = document.getElementById("b4").value;
	box5 = document.getElementById("b5").value;
	box6 = document.getElementById("b6").value;
	box7 = document.getElementById("b7").value;
	box8 = document.getElementById("b8").value;
	box9 = document.getElementById("b9").value;

	// Checking if Player X won or not
	// then disabled all
	if ((box1 == 'X' || box1 == 'X') && (box2 == 'X' ||
		box2 == 'X') && (box3 == 'X' || box3 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box1 == 'X' || box1 == 'X') && (box4 == 'X' ||
		box4 == 'X') && (box7 == 'X' || box7 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box7 == 'X' || box7 == 'X') && (box8 == 'X' ||
		box8 == 'X') && (box9 == 'X' || box9 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}
	else if ((box3 == 'X' || box3 == 'X') && (box6 == 'X' ||
		box6 == 'X') && (box9 == 'X' || box9 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((box1 == 'X' || box1 == 'X') && (box5 == 'X' ||
		box5 == 'X') && (box9 == 'X' || box9 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((box3 == 'X' || box3 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box7 == 'X' || box7 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box2 == 'X' || box2 == 'X') && (box5 == 'X' ||
		box5 == 'X') && (box8 == 'X' || box8 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box4 == 'X' || box4 == 'X') && (box5 == 'X' ||
		box5 == 'X') && (box6 == 'X' || box6 == 'X')) {
		document.getElementById('playerturn')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking off Player O win
	else if ((box1 == 'O' || box1 == 'O') && (box2 == 'O' ||
		box2 == 'O') && (box3 == 'O' || box3 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box1 == 'O' || box1 == 'O') && (box4 == 'O' ||
		box4 == 'O') && (box7 == 'O' || box7 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box7 == 'O' || box7 == 'O') && (box8 == 'O' ||
		box8 == 'O') && (box9 == 'O' || box9 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
	}
	else if ((box3 == 'O' || box3 == 'O') && (box6 == 'O' ||
		box6 == 'O') && (box9 == 'O' || box9 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((box1 == 'O' || box1 == 'O') && (box5 == 'O' ||
		box5 == 'O') && (box9 == 'O' || box9 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
	}
	else if ((box3 == 'O' || box3 == 'O') && (box5 == 'O' ||
		box5 == 'O') && (box7 == 'O' || box7 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box2 == 'O' || box2 == 'O') && (box5 == 'O' ||
		box5 == 'O') && (box8 == 'O' || box8 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b9").disabled = true;
	}
	else if ((box4 == 'O' || box4 == 'O') && (box5 == 'O' ||
		box5 == 'O') && (box6 == 'O' || box6 == 'O')) {
		document.getElementById('playerturn')
			.innerHTML = "Player O won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
	}

	// Checking of Player O finish
	// Checking about Tie
	else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
        b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
        b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
            document.getElementById('playerturn')
                .innerHTML = "Match Tie";
    }
    else {
 
        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('playerturn')
                .innerHTML = "Player X Turn";
        }
        else {
            document.getElementById('playerturn')
                .innerHTML = "Player O Turn";
        }
    }
}

// Function to reset game
reset = () => {
	location.reload();
	document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// functions check turn of the player
// and put value X or O
flag = 1;
checkTurn1 = () => {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "O";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

checkTurn2 = () => {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "O";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

checkTurn3 = () => {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "O";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

checkTurn4 = () => {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "O";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

checkTurn5 = () => {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "O";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

checkTurn6 = () => {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "O";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

checkTurn7 = () => {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "O";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

checkTurn8 = () => {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "O";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

checkTurn9 = () => {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "O";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
