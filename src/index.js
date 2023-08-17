
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if(arguments.length < 1) {
    return arr
  } else {
    for (let i = 0; i <= matrix.length - 1; i++) {
      if (i % 2 !== 0) {
        matrix[i].reverse()
        for (let j = 0; j <= matrix[i].length - 1; j++){
          arr.push(matrix[i][j])
        }
      } else {
        for (let j = 0; j <= matrix[i].length - 1; j++){
          arr.push(matrix[i][j])
        }
      }
    }
    return arr;
  }
}