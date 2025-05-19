class ListaAleatoria {

  private lista: number[];
  constructor(qtd: number) {

    this.lista = [];
    for (let i = 0; i < qtd; i++) {
      const numeroAleatorio = Math.floor(Math.random() * 100);
      this.lista.push(numeroAleatorio);
    }
  }
  removerMenoresQue(valor: number): void {

    this.lista = this.lista.filter(num => num >= valor);

  }



  maisProximoDaMedia(): number | null {

    if (this.lista.length === 0) return null;



    const media = this.lista.reduce((acc, val) => acc + val, 0) / this.lista.length;



    let maisProximo = this.lista[0];

    let menorDiferenca = Math.abs(this.lista[0] - media);



    for (let i = 1; i < this.lista.length; i++) {

      const diferenca = Math.abs(this.lista[i] - media);

      if (diferenca < menorDiferenca) {

        menorDiferenca = diferenca;

        maisProximo = this.lista[i];

      }

    }



    return maisProximo;

  }



  reduzir(n: number): void {

    if (n <= 0) {

      this.lista = [];

    } else if (n < this.lista.length) {

      const novaLista = [];

      for (let i = 0; i < n; i++) {

        novaLista.push(this.lista[i]);

      }

      this.lista = novaLista;

    }

  }



  fatiar(inicio: number, fim: number): void {

    const novaLista: number[] = [];

    for (let i = 0; i < this.lista.length; i++) {

      if (i >= inicio && i < fim) {

        novaLista.push(this.lista[i]);

      }

    }

    this.lista = novaLista;

  }



  inverter(): void {

    const len = this.lista.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {

      const temp = this.lista[i];

      this.lista[i] = this.lista[len - 1 - i];

      this.lista[len - 1 - i] = temp;

    }

  }



  amplitude(): number | null {

    if (this.lista.length === 0) return null;



    let maior = this.lista[0];

    let menor = this.lista[0];



    for (let i = 1; i < this.lista.length; i++) {

      if (this.lista[i] > maior) {

        maior = this.lista[i];

      } else if (this.lista[i] < menor) {

        menor = this.lista[i];

      }

    }



    return maior - menor;

  }



  toString(): string {

    return `Lista: [${this.lista.join(", ")}]`;

  }

}



// ===================================

// 🧪 TESTES DOS MÉTODOS

// ===================================



// console.log("=== TESTE 1: CONSTRUTOR E toString() ===");

// const lista = new ListaAleatoria(10);

// console.log(lista.toString());



// console.log("\n=== TESTE 2: removerMenoresQue(50) ===");

// lista.removerMenoresQue(50);

// console.log("Após remover menores que 50:", lista.toString());



// console.log("\n=== TESTE 3: maisProximoDaMedia() ===");

// const proximoDaMedia = lista.maisProximoDaMedia();

// console.log("Mais próximo da média:", proximoDaMedia);



// console.log("\n=== TESTE 4: reduzir(3) ===");

// lista.reduzir(3);

// console.log("Após reduzir para 3 elementos:", lista.toString());



// console.log("\n=== TESTE 5: fatiar(1, 3) ===");

// lista.fatiar(1, 3);

// console.log("Após fatiar de 1 a 3 (exclusivo):", lista.toString());



// console.log("\n=== TESTE 6: inverter() ===");

// lista.inverter();

// console.log("Após inverter a lista:", lista.toString());



// console.log("\n=== TESTE 7: amplitude() ===");

// const amp = lista.amplitude();

// console.log("Amplitude (diferença entre maior e menor):", amp);
