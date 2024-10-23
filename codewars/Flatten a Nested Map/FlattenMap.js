function flattenMap(obj) {
    const flattened = {};
  
    function flatten(obj, prefix = '') {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const newKey = prefix ? `${prefix}/${key}` : key;
          const value = obj[key];
          if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            flatten(value, newKey);
          } else {
            flattened[newKey] = value;
          }
        }
      }
    }
  
    flatten(obj);
    return flattened;
  }