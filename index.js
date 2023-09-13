var testInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

var testInput2 = `22,2,14,18,19
22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

var testInput3 = `22,2,14,18,19
22 13 17 11 0
2 8 23 4 24
14 21 9 16 7
18 10 3 18 5
19 12 20 15 19`;

var testInput4 = `0,4,14,10,1
22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

const crossOutBoard = (board, numbers) => {
	//make a board of zeros
	const newBoard = board.map(row => row.map(cell => 0));

	//cross out the numbers
	numbers.forEach(number => {
		board.forEach((row, i) => {
			row.forEach((cell, j) => {
				if (cell === number) {
					newBoard[i][j] = 1;
				}
			});
		});
	});

	return newBoard;
};

const isHorizontalBingo = (board) => {
	return board.some(row => row.every(cell => cell === 1));
};

const isVerticalBingo = (board) => {
	const verticalBoard = board.map((row, i) => board.map(row => row[i]));
	return isHorizontalBingo(verticalBoard);
};

const isDiagonalBingo = (board) => {
	const diagonalBoard = board.map((row, i) => row[i]);
	if (diagonalBoard.every(cell => cell === 1)) {
		return true;
	}
	const diagonalBoard2 = board.map((row, i) => row[board.length - 1 - i]);
	if (diagonalBoard2.every(cell => cell === 1)) {
		return true;
	}

	return false;

};

const isBingo = (board) => {
	return isHorizontalBingo(board) || isVerticalBingo(board) || isDiagonalBingo(board);
}

const main = (input) => {

	const lines = input.split('\n');
	const [numbers, ...board] = lines;
	const calledNumbersArray = numbers.split(',').map(Number);
	const bingoBoard = board.map(line => line.split(' ').map(Number));

	const crossedOutBoard = crossOutBoard(bingoBoard, calledNumbersArray);

	return isBingo(crossedOutBoard)
};

console.log(main(testInput));
console.log(main(testInput2));
console.log(main(testInput3));
console.log(main(testInput4));
