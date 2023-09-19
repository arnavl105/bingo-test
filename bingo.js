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
	const numbers = lines[0];
	const boards = lines.slice(1).join('\n').split('\n\n').map(line => line.split('\n'));		
	const results = boards.map((board, i) => {
	  const calledNumbersArray = numbers.split(',').map(Number);
	  const bingoBoard = board.map(line => line.split(' ').map(Number));
	  const crossedOutBoard = crossOutBoard(bingoBoard, calledNumbersArray);

	  return isBingo(crossedOutBoard) 
      });

  return results;

};

module.exports = main;
