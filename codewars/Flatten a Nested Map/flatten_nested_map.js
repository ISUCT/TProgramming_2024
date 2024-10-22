function flattenMap(map) {
    const result = {};
  
    function flatten(obj, parentKey = '') {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          const newKey = parentKey ? `${parentKey}/${key}` : key;
  
          if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            flatten(obj[key], newKey);
          } else {
            result[newKey] = obj[key];
          }
        }
      }
    }
  
    flatten(map);
    return result;
  }
  
  const input = {
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1, 2, 3]
    }
  };
  
  const output = flattenMap(input);
  console.log(output);