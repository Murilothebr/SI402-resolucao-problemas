function isPrimo(a: number): boolean {
  if (a == 2) {
    return true;
  }

  if (a % 2 == 0) {
    return false;
  }

  for (let i = 2; i <= a / 2; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

const result2 = isPrimo(2);
console.log(result2);
