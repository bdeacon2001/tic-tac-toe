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
	
	// Checking if Player won or not
		if ((box1 == box2) && (box1 == box3) && (box1 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box1} wins`;
		}
		else if ((box1 == box5) && (box1 == box9) && (box1 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box1} wins`;
		}
		else if ((box1 == box4) && (box1 == box7) && (box1 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box1} wins`;
		}
		else if ((box2 == box5) && (box2 == box8) && (box2 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box2} wins`;
		}
		else if ((box3 == box9) && (box3 == box6) && (box3 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box3} wins`;
		}
		else if ((box3 == box5) && (box3 == box7) && (box3 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box3} wins`;
		}
		else if ((box4 == box5) && (box4 == box6) && (box4 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box4} wins`;
		}
		else if ((box7 == box8) && (box7 == box9) && (box7 != '')) {
			document.getElementById('playerturn')
				.innerHTML = `${box7} wins`;
		}
		
		// Checking about Tie
		else if ((box1 == 'X' || box1 == 'O') && (box2 == 'X'
			|| box2 == 'O') && (box3 == 'X' || box3 == 'O') &&
			(box4 == 'X' || box4 == 'O') && (box5 == 'X' ||
			box5 == 'O') && (box6 == 'X' || box6 == 'O') &&
			(box7 == 'X' || box7 == 'O') && (box8 == 'X' ||
			box8 == 'O') && (box9 == 'X' || box9 == 'O')) {
				document.getElementById('playerturn')
					.innerHTML = "Match Tie";
		}
	}
	
play1 = () => {
	let b1 = document.getElementById("b1audio");
    b1.play();
}
play2 = () => {
	let b2 = document.getElementById("b2audio");
    b2.play();
}
play3 = () => {
	let b3 = document.getElementById("b3audio");
    b3.play();
}
play4 = () => {
	let b4 = document.getElementById("b4audio");
    b4.play();
}
play5 = () => {
	let b5 = document.getElementById("b5audio");
    b5.play();
}
play6 = () => {
	let b6 = document.getElementById("b6audio");
    b6.play();
}
play7 = () => {
	let b7 = document.getElementById("b7audio");
    b7.play();
}
play8 = () => {
	let b8 = document.getElementById("b8audio");
    b8.play();
}
play9 = () => {
	let b9 = document.getElementById("b9audio");
    b9.play();
}

// Function to reset game
const reset = () => {
	location.reload();
	for (let i = 1; i <= 9; i++) {
		document.querySelector(`b${i}`);
	}
}

// functions check turn of the player
// and put value X or O
let turnCounter = 0;

checkTurn = () => {
	if (turnCounter % 2 == 0) {
		event.target.value = "X";
		event.target.disabled = true;
		document.getElementById('playerturn').innerHTML = "O Turn";
		turnCounter++;
	} else {
		event.target.value = "O";
		event.target.disabled = true;
		document.getElementById('playerturn').innerHTML = "X Turn";
		turnCounter++;
	}
}


