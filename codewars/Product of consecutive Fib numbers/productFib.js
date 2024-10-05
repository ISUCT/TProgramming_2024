function productFib(prod){
  
  let a = 0;
  let b = 1;
  
  while (a * b < prod) {

    let next = a + b;
    a = b;
    b = next;
  }
 
  return [a, b, a * b == prod];
}