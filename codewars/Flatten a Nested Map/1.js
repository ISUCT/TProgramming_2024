function flattenMap(map) {
    const result = {};
  
    function recurse(current, propertyPath) {
      if (typeof current !== 'object' || current === null || Array.isArray(current)) {
        result[propertyPath] = current;
      } else {
        for (const key in current) {
          if (current.hasOwnProperty(key)) {
            const newPath = propertyPath ? `${propertyPath}/${key}` : key;
            recurse(current[key], newPath);
          }
        }
      }
    }
  
    recurse(map, '');
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
  
  const flattened = flattenMap(input);
  console.log(flattened);