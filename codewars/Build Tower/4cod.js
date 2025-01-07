function TowerMake(number_of_blocks){
    let pyrimidecanvas = [];
    let number_of_space = number_of_blocks - 1;
    let counting_stars = 1;
    for (let i = 0; i < number_of_blocks; i++){
        let floor_pyrimidecanvas = ' '.repeat(number_of_space) + "*".repeat(counting_stars) + ' '.repeat(number_of_space);
        pyrimidecanvas.push(floor_pyrimidecanvas);
        counting_stars += 2;
        number_of_space -=1;
    }
    return(pyrimidecanvas);
  }

  let pyrimidecanvas_floor = TowerMake(5);

  let formattedpyrimidecanvas = '[\n  ' + pyrimidecanvas_floor.map(line => `"${line}"`).join(',\n  ') + '\n]';
  
  console.log(formattedpyrimidecanvas);