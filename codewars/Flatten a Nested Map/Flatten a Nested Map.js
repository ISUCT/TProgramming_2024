// Flattens an hierarchical map into a single level
function flattenMap(map) {
  let res = {};
  for(let key in map) {
    if(typeof map[key] === 'object' && !Array.isArray(map[key]) && map[key] !== null) {
      let flatMap = flattenMap(map[key]);
      for(let i = 0; i < Object.keys(flatMap).length; i++) {
        res[key + "/" + Object.keys(flatMap)[i]] = Object.values(flatMap)[i];
      }
      continue;
    }
    res[key] = map[key];
  }

  return res;
}