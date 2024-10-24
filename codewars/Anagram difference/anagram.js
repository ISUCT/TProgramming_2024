function anagramDifference(first, second) {
    if (first === "" && second === "") {
      return 0;
    } else if (first === "" || second === "") {
      if (first === "") {
        return second.length;
      } else {
        return first.length;
      }
    }
    let сount = {};
    if (first !== "" && second !== "") {
      for (let letter of first) {
        сount[letter] = (сount[letter] ?? 0) + 1;
      }
  
      for (let letter of second) {
        if (сount[letter]) {
          сount[letter] -= 1;
        } else {
          сount[letter] = -1;
        }
      }
    }
    let remove = 0;
    for (let count of Object.values(сount)) {
      remove += Math.abs(count);
    }
    return remove;
  } 