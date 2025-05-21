// Murilo Marcal e Igor Emanuel

export default class Domino {
  private jogo: Peca[] = [];

  public startGame(esquerda: number, direita: number) {
    if (direita != esquerda && this.jogo.length > 0) {
      return;
    }

    this.jogo[0] = new Peca(esquerda, direita);
  }

  public addFirst(esquerda: number, direita: number) {
    if (!this.canAdd(esquerda, direita)) {
      return;
    }

    this.jogo = [new Peca(esquerda, direita), ...this.jogo];
  }

  public addLast(esquerda: number, direita: number) {
    if (!this.canAdd(esquerda, direita)) {
      return;
    }

    this.jogo.push(new Peca(esquerda, direita));
  }

  private canAdd(esquerda: number, direita: number): boolean {
    if (this.jogo.length < 1) {
      return false;
    }

    if (esquerda > 6 || esquerda < 0 || direita > 6 || direita < 0) {
      return false;
    }

    if (esquerda != this.jogo[0].direita && direita != this.jogo[0].esquerda) {
      return false;
    }

    if (
      this.jogo.some(
        (x) =>
          (x.direita == direita && x.esquerda == esquerda) ||
          (x.direita == esquerda && x.esquerda == direita)
      )
    ) {
      return false;
    }

    return true;
  }

  public getTable() {
    var str = "";
    this.jogo.forEach((peca) => (str += `[${peca.esquerda}:${peca.direita}] `));
    return str;
  }
}

class Peca {
  esquerda: number;
  direita: number;

  constructor(esquerda: number, direita: number) {
    this.esquerda = esquerda;
    this.direita = direita;
  }
}
