export default class Exercicios {
  private a: number;
  private b: number;

  public constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public exercicio3(bot: number = this.a) {
    if (bot > this.b) {
      return;
    }

    console.log(bot);
    this.exercicio3(bot + 1);
  }

  public exercicio4(index: number = this.b): number {
    if (index < this.a) {
      return 0;
    }

    return index + this.exercicio4(index - 1);
  }

  public exercicio5(): number {
    if (this.a > this.b) {
        let _ = this.a;
        this.a = this.b;
        this.b = _;
    }

    return this.somaIntervalo(this.b);
  }

  private somaIntervalo(index: number): number {
    if (index < this.a) {
      return 0;
    }
    return index + this.somaIntervalo(index - 1);
  }
}

var exec = new Exercicios(1, 10);

//exec.exercicio3();
console.log(exec.exercicio4());

console.log();
