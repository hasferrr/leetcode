int nthUglyNumber(int n) {
  int uglyNumber[n];
  uglyNumber[0] = 1;

  int ugly2 = 2;
  int ugly3 = 3;
  int ugly5 = 5;

  int index2 = 1;
  int index3 = 1;
  int index5 = 1;

  for (int i = 1; i < n; i++) {
    uglyNumber[i] = ugly2 < ugly3
      ? (ugly5 < ugly2 ? ugly5 : ugly2)
      : (ugly5 < ugly3 ? ugly5 : ugly3);

    if (uglyNumber[i] == ugly2) {
      ugly2 = uglyNumber[index2] * 2;
      index2++;
    }
    if (uglyNumber[i] == ugly3) {
      ugly3 = uglyNumber[index3] * 3;
      index3++;
    }
    if (uglyNumber[i] == ugly5) {
      ugly5 = uglyNumber[index5] * 5;
      index5++;
    }
  }

  return uglyNumber[n - 1];
}
