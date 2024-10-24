function flattenMap(input) {
    const result = {};
  
    function flatten(obj, prefix = '') {
      for (const key in obj) {
        const newKey = prefix ? `${prefix}/${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          flatten(obj[key], newKey);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  
    flatten(input);
    return result;
  }