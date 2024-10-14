function flattenMap(map) {
  let m = [map]
  let a = []
  const ans = {}
  let node = null
  let parent = null
  let pkey = null
  
  while (Object.keys(map).length) {

    if (m.length) {
      node = m.pop()
    } else {
      node = map
    }
    
    const keys = Object.keys(node)
    const value = node[keys[0]]
    a.push(keys[0])
    
    if (value && value.toString() === "[object Object]") {
      parent = node
      pkey = keys[0]
      m.push(value)
    } else {
      ans[a.join("/")] = value
      a = []
      delete node[keys[0]]
      
      if (!Object.keys(node).length) {
        if (parent) {
          delete parent[pkey]
        }
      }
      m = []
      m.push(map)
    }
  }
  return ans
}