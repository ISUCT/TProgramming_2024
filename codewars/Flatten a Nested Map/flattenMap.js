function flattenMap(map, prefix = '') {
    const result = {};
  
    for (const key in map) {
      if (map.hasOwnProperty(key)) {
        const value = map[key];
        const newKey = prefix ? `${prefix}/${key}` : key;
  
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          const nested = flattenMap(value, newKey);
          Object.assign(result, nested);
        } else {
          result[newKey] = value;
        }
      }
    }
  
    return result;
  }