
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(arguments.length==0) return [];
    if(matrix.length==0) return [];
     
    let len = matrix.length;
    let linearMatrix = new Array();
  
    for(let i=0;i<len;i++){
      lenIn = matrix[i].length;
      if(i%2==0){
        for(let j=0;j<lenIn;j++){
          linearMatrix.push(matrix[i][j])
        }
      } else {
        for(let j=lenIn-1;j>-1;j--){
          linearMatrix.push(matrix[i][j]);
        }      
      }
    }
    return linearMatrix;
  }
