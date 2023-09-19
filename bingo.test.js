const main = require('./bingo.js');

test('Base case', () => {
  const input = `
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1
22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19
  `;
  expect(main(input)).toBe(true);
});

test('Diagonal Bingo', () => {
    var input = `22,2,14,18,19
22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

  expect(main(input)).toBe(true);
});

test('Reverse Diagonal Bingo', () => {
   var input = `0,4,14,10,1
22 13 17 11 0
8 2 23 4 24
21 9 14 16 7
6 10 3 18 5
1 12 20 15 19`;

  expect(main(input)).toBe(true);
});

test('Horiztontal Bingo', () => {
  var input = `22,2,14,18,19
22 13 17 11 0
2 8 23 4 24
14 21 9 16 7
18 10 3 18 5
19 12 20 15 19`;

  expect(main(input)).toBe(true);
});

test('Vertical Bingo', () => {
  var input = `22,2,14,18,19
22 13 17 11 0
2 8 23 4 24
14 21 9 16 7
18 10 3 18 5
19 12 20 15 19`;

  expect(main(input)).toBe(true);
});
