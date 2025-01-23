function flattenMap(map) {
  
  function iter(part, keys) {
    // Проверка, является ли это объектом типа Map
    if (part instanceof Map) {
      for (let [k, v] of part) {
        if (v !== null && !Array.isArray(v) && typeof v === 'object') {
          iter(v, keys.concat(k));
        } else {
            flat[keys.concat(k).join('/')] = v;
          }
      }
    } else {
      
            Object.keys(part).forEach(function (k) {
              if (part[k] !== null && !Array.isArray(part[k]) && typeof part[k] === 'object') {
                iter(part[k], keys.concat(k));
              } else {
                  flat[keys.concat(k).join('/')] = part[k];
              }
            });
      
      }
  }

    const flat = {};  // Объект для результата
    iter(map, []);   // Запуск итерации с пустым массивом ключей
    return flat;
}