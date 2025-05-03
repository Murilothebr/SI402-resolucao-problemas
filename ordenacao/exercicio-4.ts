export default class Crescente {
  private arr1: number[];

  constructor(arr: number[]) {
    this.arr1 = arr;
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

  public bubbleSort() {
    var index = 0;
    var arr = this.arr1;

    while (true) {
      if (this.isSorted()) return arr;

      var next = index + 1;

      if (arr[index] > arr[next]) {
        var aux = arr[index];
        arr[index] = arr[next];
        arr[next] = aux;
      }

      index += 1;

      if(index == arr.length - 1)
      {
        index = 0;
      }
    }
  }
}

const randomNumbers: number[] = [
  37, 12, 89, 5, 64, 78, 23, 45, 90, 18, 3, 66, 29, 71, 56, 81, 14, 38, 95, 7,
];

var a = new Crescente(randomNumbers);
console.log(a.bubbleSort());
