function towerBuilder(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
      const stars = (i * 2) + 1; // Количество звездочек на каждой строке
      const spaces = nFloors - i - 1; // Количество пробелов по краям
      let row = "";
      for (let j = 0; j < spaces; j++) {
        row += " ";
      }
      for (let j = 0; j < stars; j++) {
        row += "*";
      }
      for (let j = 0; j < spaces; j++) {
        row += " ";
      }
      tower.push(row);
    }
    return tower;
  }