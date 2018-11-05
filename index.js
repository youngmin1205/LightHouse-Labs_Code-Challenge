const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

//challenge
//1
const countRows = function() {
  return GRID.length;
}

//2
const countColumns = function() {
  return GRID[0].length;
}

//3
const gridSize = function() {
  return `${countColumns()} x ${countRows()}`;
}

//4
const totalCells = function() {
  return countColumns() * countRows();
}

//5
const COLUMN_CHAR_START = 'A'.charCodeAt(0);

const letterToIndex = (letter) => {
  return letter.toUpperCase().charCodeAt(0) - COLUMN_CHAR_START;
};

const getIndices = (coordinate) => {
  const columnLetter = coordinate.slice(0,1);
  const rowNumber = coordinate.slice(1);

  return {
    columnIndex: letterToIndex(columnLetter),
    rowIndex: rowNumber - 1
  };
};

const convertColumn = function(coordinate) {
  const { columnIndex } = getIndices(coordinate);
  return columnIndex;
}

//6
//GRID[3][2] 'c4'  GRID [][columnIndex]
function lightCell(coordinates) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
  //string.split(separator, limit)
  //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let cordX = coordinates.split("")[0].toLowerCase();  //e.g A
  let cordY = coordinates.split("")[1] - 1; // e.g. 3
  let y = GRID[cordY]; //GRID[3]
  let x = alphabet.indexOf(cordX); 
  /*function myFunction() {
    var str = "Helloworld,welcome to the universe.";
    var n = str.indexOf("welcome");
    document.getElementById("demo").innerHTML = n;
}*/
  let answer = y[x];
  return answer;
}

lightCell('B4'); // " "

//7
const isRock = function(coordinates){
  return Boolean(lightCell(coordinate) == '^');
}

//8
const isCurrent = function(coordinate) {
    return Boolean(lightCell(coordinate) == '~');
}

