function towerBuilder(number_of_blocks){
    let pyrimide = [];
    let number_of_space = number_of_blocks - 1;
    let counting_stars = 1;
    for (let i = 0; i < number_of_blocks; i++){
        let floor_pyrimide = ' '.repeat(number_of_space) + "*".repeat(counting_stars) + ' '.repeat(number_of_space);
        pyrimide.push(floor_pyrimide);
        counting_stars += 2;
        number_of_space -=1;
    }
    return(pyrimide);
  }

  let pyrimide_floor = towerBuilder(5);

  let formattedPyrimide = '[\n  ' + pyrimide_floor.map(line => `"${line}"`).join(',\n  ') + '\n]';
  
  console.log(formattedPyrimide);