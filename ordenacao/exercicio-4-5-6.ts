export default class Crescente {
  private arr1: number[];

  constructor(arr: number[]) {
    this.arr1 = arr;
  }

  public print() {
    console.log(this.arr1);
  }

  public isSorted() {
    var index = 0;
    var arr = this.arr1;

    while (index < arr.length) {
      if (arr[index] > arr[index + 1]) {
        return false;
      }

      index++;
    }

    return true;
  }

  public shuffle() {
    var arr = [...this.arr1];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    console.log(arr);
  }

  public bubbleSort() {
    var arr = [...this.arr1];
    var swapped = false;

    do {
      swapped = false;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          swapped = true;
        }
      }
    } while (swapped);

    console.log(arr);
  }

  public insertionSort() {
    var arr = [...this.arr1];

    for (let i = 1; i < arr.length; i++) {
      var key = arr[i];
      var j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
    }

    console.log(arr);
  }

  public binarySearch(target: number) {
    var arr = [...this.arr1];
    this.insertionSort();

    var left = 0;
    var right = arr.length - 1;

    while (right >= left) {
      var half = Math.floor((right + left) / 2);

      if (arr[half] == target) {
        return half;
      }

      if (arr[half] < target) {
        left = half - 1;
      } else {
        right = half + 1;
      }
    }

    return -1;
  }
}

const randomNumbers: number[] = [
  37, 12, 89, 5, 64, 78, 23, 45, 90, 18, 3, 66, 29, 71, 56, 81, 14, 38, 95, 7,
];

var a = new Crescente(randomNumbers);
a.insertionSort();
