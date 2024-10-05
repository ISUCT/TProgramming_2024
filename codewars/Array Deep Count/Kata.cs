using System;

public class Kata
{
  public static int DeepCount(object a)
  {
    if(a is object[] arr) {
      int sum = 0;
      foreach(var r in arr)
        sum += DeepCount(r) + 1;
      return sum;
    }
    
    return 0;
  }
}