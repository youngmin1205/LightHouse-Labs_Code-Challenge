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

const countRows = function() {
  return GRID.length;
}

const countColumns = function() {
  return GRID[0].length;
}

const gridSize = function() {
  return `${countColumns()} x ${countRows()}`;
}

const totalCells = function() {
  return countColumns() * countRows();
}

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