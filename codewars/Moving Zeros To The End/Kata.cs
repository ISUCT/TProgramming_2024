public class Kata
{
  public static int[] MoveZeroes(int[] arr)
  {
    int x = arr.Length - 2;
    while(x >= 0) {
      if(arr[x] == 0 && arr[x + 1] != 0) {
        int tmp = arr[x];
        arr[x] = arr[x+1];
        arr[x+1] = tmp;
        if(x < arr.Length - 2)
          x++;
      }
      else
        x--;
    }
    
    return arr;
  }
}