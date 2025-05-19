export default class Exec {
  private n: number[];

  constructor(n: number[]) {
    this.n = n;
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public fillRandom(n: number) {
    var arr = this.n;

    for (let i = 0; i < n; i++) {
      var n = this.getRandomInt(0, 100);
      arr[i] = n;
    }
  }

  public toString(index: number = 0): string {
    if (index == this.n.length) {
      return "";
    }

    return this.n[index] + this.toString(index + 1);
  }
}

var a = new Exec([]);
a.fillRandom(10);
console.log(a.toString());
