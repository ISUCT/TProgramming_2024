
// Flattens an hierarchical map into a single level
function flattenMap(map) {
  let result = {}
  function flattenSubCoroutine(name, submap) {
    if(typeof submap == 'object' && !Array.isArray(submap) && submap !== null) {
      for(const [k,v] of Object.entries(submap)) {
        let nestedName
        if(name)
          nestedName = name + '/' + k
        else
          nestedName = k
        flattenSubCoroutine(nestedName, v)
      }
    }
    else
      result[name] = submap
  }
  
  flattenSubCoroutine('', map)
  return result
}