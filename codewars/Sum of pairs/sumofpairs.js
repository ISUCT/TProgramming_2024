function sumPairs(ints, s) {
    let saw = {};
    for (let i = 0; i < ints.length; i++){
    let comp = s - ints[i];
      if(comp in saw){
        return[comp, ints[i]];
      }
      saw [ints[i]] = i;
    }
    return undefined;
  }