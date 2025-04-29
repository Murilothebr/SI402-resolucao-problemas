export default class Exercicios2 {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public ordenar() {
    var arr = [this.a, this.b, this.c];

    var aux = 0;

    if (arr[0] > arr[1]) {
      aux = arr[0];
      arr[0] = arr[1];
      arr[1] = aux;
    }

    if (arr[1] > arr[2]) {
      aux = arr[1];
      arr[1] = arr[2];
      arr[2] = aux;
    }

    if (arr[0] > arr[1]) {
      aux = arr[0];
      arr[0] = arr[1];
      arr[1] = aux;
    }

    console.log(arr);
  }

  public maior() {
    var maior = this.a;

    if (this.b > maior) maior = this.b;

    if (this.c > maior) maior = this.c;

    console.log(maior);
  }
}

var a = new Exercicios2(7, 1, 10);

a.ordenar();
a.maior();
