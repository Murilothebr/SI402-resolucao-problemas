// Murilo

class QuestionBank {
  private questoes: string[] = [];

  constructor(questoes: string[]) {
    this.questoes = questoes;
  }

  newExam(n: number): string[] {
    if (n === 0) {
      return [];
    }

    if (n > 0) {
      return this.questoes;
    }

    const quantidade = n;
    if (quantidade > this.questoes.length) {
      return [];
    }

    const result = [];
    for (let i = this.questoes.length - 1; i >= 0; i--) {
      if ((this.questoes.length - i) % quantidade === 0) {
        result.push(this.questoes[i]);
      }
    }

    return result;
  }
}

const questoes = ["Acre", "Piaui", "Amapa", "Para", "Baia", "Ceara"];
const banco = new QuestionBank(questoes);
const banco1 = new QuestionBank(["Acre", "Piauí"]);

console.log(banco.newExam(0));
console.log(banco.newExam(1));
console.log(banco.newExam(-2));
console.log(banco1.newExam(-3));
