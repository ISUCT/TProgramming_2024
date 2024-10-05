public class Number
{
  public static int DigitalRoot(long n)
  {
    long sum;
    do {
    sum = 0;
    while(n != 0) {
      sum += n % 10;
      n /= 10;
    }
    n = sum;
    } while(n > 9); 
    return (int)sum;
  }
}