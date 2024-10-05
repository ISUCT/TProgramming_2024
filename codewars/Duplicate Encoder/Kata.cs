using System.Collections.Generic;

public class Kata
{
  public static string DuplicateEncode(string word)
  {
    char[] subword = new char[word.Length];
    Dictionary<char, int> table = new();
    
    for(int x = 0; x < word.Length; ++x) {
      char c = char.ToLower(word[x]);
        if(table.TryGetValue(c, out int index)) {
          subword[x] = ')';
          subword[index] = ')';
        }
      else {
        subword[x] = '(';
        table[c] = x;
      }
    }
    
    return new string(subword);
  }
}