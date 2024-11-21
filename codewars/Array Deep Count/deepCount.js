function deepCount(array) {
    let k = 0;
    const countElements = arr => {
     k += arr.length;
     for (let i of arr) {
       if (Array.isArray(i) ) {
         countElements(i);
       }
     }
   }
   countElements(array);
   return k;
 }