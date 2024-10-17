function findMissingLetter(array)
{
  for (let i = 0; i < array.length - 1; i++) {
  
  const firstLetter = array[i].charCodeAt(0);
  const secondLetter = array[i + 1].charCodeAt(0);
    
  if (firstLetter !== secondLetter - 1) {
  return String.fromCharCode(secondLetter - 1);
      };
    };
};