export const shuffleArray =<T>(array: T[]): T[] => {
    const shuffled = [...array];
    let currentIndex = array.length;
    let temporaryValue: T;
    let randomIndex: number;
  
    // Пока есть элементы для перемешивания
    while (currentIndex !== 0) {
      // Выбираем оставшийся элемент
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Меняем местами текущий элемент и случайно выбранный
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
  
    return shuffled;
}
