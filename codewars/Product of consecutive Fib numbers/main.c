typedef unsigned long long ull;

ull arr[3];

unsigned long long* productFib(ull prod) {
  ull a = 1, b = 1;
  while (a * b < prod) {
    ull tmp = b;
    b = a + b;
    a = tmp;
  }
  
  arr[0] = a;
  arr[1] = b;
  arr[2] = a * b == prod;
  
  return arr;
}