// Murilo e Igor

export default class Park {
  private line: number[];

  constructor(line: number[]) {
    this.line = line;
  }

  public getSortedBubble() {
    var swapped = false;

    do {
      swapped = false;

      for (let i = 0; i < this.line.length; i++) {
        var next = i + 1;

        while (this.line[next] == -1) {
          next += 1;
        }

        if (this.line[next] < this.line[i]) {
          [this.line[i], this.line[next]] = [this.line[next], this.line[i]];

          swapped = true;
        }
      }
    } while (swapped);

    return this.line;
  }
}

var arr1 = [-1, 185, -1, 180, -1, 195, -1, -1, -1];
var a = new Park(arr1);
console.log(a.getSortedBubble());
