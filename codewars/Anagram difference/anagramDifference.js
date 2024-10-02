function anagramDifference(w1,w2){
  
    if (typeof w1 === 'string') {
        w1 = Array.from(w1); //преобразование строки в массив
    }
    if (typeof w2 === 'string') {
        w2 = Array.from(w2);
    }
    
    let lnW1 = w1.length;
    let lnW2 = w2.length;
    let lenAnagram = 0;
  
    //Поиск общих символов

    for (let i = 0; i < w1.length; i++) {
        let index = w2.indexOf(w1[i]); 
        if (index !== -1) {
            lenAnagram += 1;
            w2.splice(index, 1); // Удаляем найденный элемент из w2
        }
    }
    
    return lnW1 - lenAnagram + lnW2 - lenAnagram;
}