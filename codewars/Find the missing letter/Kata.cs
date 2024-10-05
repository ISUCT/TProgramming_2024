public class Kata
{
  public static char FindMissingLetter(char[] array)
  {
    char symbolToWait = array[0];
    foreach(var currentSymbol in array) {
      if(symbolToWait != currentSymbol)
        return symbolToWait;
      
      symbolToWait++;
    }
    return '-';
  }
}