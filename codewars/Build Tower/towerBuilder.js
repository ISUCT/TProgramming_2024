function towerBuilder(nFloors) {
  
  let result = [], stars, gaps, floor;
  
  for (let i = 1; i <= nFloors; i++){
    
    stars = '*'.repeat(2*i - 1);
    gaps = ' '.repeat(nFloors - i);
    floor = `${gaps}${stars}${gaps}`;
   
   result.push(floor); 
  }
  
  return result;
}