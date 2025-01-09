function flattenMap(obj) {
    const flattened = {};
  
    function recurse(obj, path) {
      for (const key in obj) {
        const newPath = path ? `${path}/${key}` : key;
        const value = obj[key];
  
        if (typeof value === 'object' && value !== null) {
          if (Array.isArray(value)) {
            flattened[newPath] = value;
          } else {
            recurse(value, newPath);
          }
        } else {
          flattened[newPath] = value;
        }
      }
    }
  
    recurse(obj, '');
    return flattened;
  }