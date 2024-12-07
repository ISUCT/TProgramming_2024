public class Kata
{
  public static string[] TowerBuilder(int nFloors)
  {
    string[] building = new string[nFloors];
    int offset = 0;
    int length = (nFloors - 1) * 2 + 1;
    char[] floor = new char[length];
    for(int y = nFloors - 1; y >= 0; --y) {
      for(int x = 0; x < length; ++x) {
        if(x < offset || x >= length - offset)
          floor[x] = ' ';
        else
          floor[x] = '*';
      }
      building[y] = new(floor);
      ++offset;
    }
    
    return building;
  }
}