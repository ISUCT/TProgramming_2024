function duplicateEncode(word){
    var counter = {};
    var letters = word.toLowerCase().split('');
  
    letters.forEach(function(letter) {
      counter[letter] = (counter[letter] || 0) + 1;
    });
  
    return letters.map(function(letter) {
      return counter[letter] === 1 ? '(' : ')';
    }).join('');
  }