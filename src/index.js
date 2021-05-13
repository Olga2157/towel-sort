module.exports = function towelSort(matrix) {
  let res = [];
  if (!matrix) {
      return res;
  }
  for (let i=0; i<matrix.length; i++) {
      let curRow = matrix[i];
      // for odd row do reverse row
      if (i % 2 !== 0) {
          curRow.reverse();
      }
      res = res.concat(curRow);
  }
  return res;
}
