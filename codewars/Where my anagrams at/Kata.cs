using System;
using System.Collections.Generic;

public static class Kata
{
  // Assume that we're using only ascii letters
  
  
  public static List<string> Anagrams(string word, List<string> words)
  {
    int[] word1Counts = new int[128];
    int[] word2Counts = new int[128];
    
    foreach(char c in word) word1Counts[(int)c]++;
    
    Console.WriteLine();
    
    List<string> results = new();
    
    foreach(var subword in words) {
      
      for(int x = 0; x < 128; ++x) word2Counts[x] = 0;
      foreach(var c in subword) word2Counts[(int)c]++;
      
      for(int x = 0; x < 128; ++x) if(word1Counts[x] != word2Counts[x]) goto NotAnagram;
      
      results.Add(subword);
NotAnagram:;
    }
    
    Console.WriteLine();
    
    return  results;
  }
}