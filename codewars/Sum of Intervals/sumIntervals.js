function sumIntervals(intervals) {
  
  if (intervals.length === 0) return 0;
  
  if (intervals.length === 0) return 0;

  // Сортируем интервалы по их начальной точке
  intervals.sort((a, b) => a[0] - b[0]);

  let totalSum = 0;
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
      let nextInterval = intervals[i];

        // Если текущий интервал перекрывается с следующим, объединяем их
      if (currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
            // Если нет перекрытия, добавляем длину текущего интервала
          totalSum += currentInterval[1] - currentInterval[0];
          currentInterval = nextInterval;
      }
  }

  totalSum += currentInterval[1] - currentInterval[0];

  return totalSum;
}