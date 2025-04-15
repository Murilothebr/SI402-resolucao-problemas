function primeirosPrimos(n: number) {
  var primeiros = [2, 3, 5, 7];

  if (n <= primeiros.length) return primeiros.slice(0, n);

  for (let i = 4, y = 11; i < n; y += 2) {
    if (isPrimo2(y)) {
      primeiros.push(y);
      i++;
    }
  }

  return primeiros;
}

function isPrimo2(n: number) {
  if (n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
    return false;
  }

  var half = Math.sqrt(n);

  for (let i = 9; i < half; i += 2) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

const aa = primeirosPrimos(1000000);
console.log(aa.join(", "));
