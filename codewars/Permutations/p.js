function permutations(str) {
    let result = new Set(); 
  
    const permute = (prefix, remaining) => {
      if (remaining.length === 0) {
        result.add(prefix); 
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        permute(
          prefix + remaining[i],
          remaining.slice(0, i) + remaining.slice(i + 1)
        );
      }
    };
  
    permute("", str);
  
    return Array.from(result); 
  }