snail = function(array) {
  if(array[0].length == 0) {
    return [];
  }

  let res = [];
  
  let curTile = [0, 0];
  let xEdges = [0, array.length - 1];
  let yEdges = [0, array.length - 1];
  let direction = [1, 0];
  let count = 0;
  while(true) {
    res.push(array[curTile[1]][curTile[0]]);

    if(xEdges[0] == xEdges[1] && yEdges[0] == yEdges[1]) {
      return res;
    }

    if(curTile[0] == xEdges[1] && curTile[1] == yEdges[0] && direction[0] == 1 && direction[1] == 0) {
      direction = [0, 1];
      yEdges[0]++;
    }
    else if(curTile[0] == xEdges[1] && curTile[1] == yEdges[1] && direction[0] == 0 && direction[1] == 1) {
      direction = [-1, 0];
      xEdges[1]--;
    }
    else if(curTile[0] == xEdges[0] && curTile[1] == yEdges[1] && direction[0] == -1 && direction[1] == 0) {
      direction = [0, -1];
      yEdges[1]--;
    }
    else if(curTile[0] == xEdges[0] && curTile[1] == yEdges[0] && direction[0] == 0 && direction[1] == -1) {
      direction = [1, 0];
      xEdges[0]++;
    }
    
    curTile[0] += direction[0];
    curTile[1] += direction[1];
  }
}