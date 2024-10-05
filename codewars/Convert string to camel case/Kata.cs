using System;
using System.Text;

public class Kata
{
  public static string ToCamelCase(string str)
  {
    StringBuilder sb = new(str.Length);
    bool shouldMakeCamel = false;
    for(int x = 0; x < str.Length; ++x) {
      if(str[x] == '_' || str[x] == '-')
        shouldMakeCamel = true;
      else if(shouldMakeCamel) {
        shouldMakeCamel = false;
        sb.Append(char.ToUpper(str[x]));
      }
      else
        sb.Append(str[x]);
        
    }
    return sb.ToString();
  }
}