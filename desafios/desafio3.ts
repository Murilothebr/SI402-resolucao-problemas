// Murilo - e só xD

class Draw {
  private readonly names: string[];
  private winner: string | null = null;

  constructor(names: string[]) {
    this.names = [...names];
  }

  private getDuplicates(arr: string[]): string[] {
    const countDict: { [key: string]: number } = {};
    let i = 0;

    while (i < arr.length) {
      const name = arr[i];
      countDict[name] = (countDict[name] || 0) + 1;
      i++;
    }

    const duplicates: string[] = [];
    for (const name in countDict) {
      if (countDict[name] > 1) {
        duplicates.push(name);
      }
    }

    return duplicates;
  }

  private removeDuplicates(arr: string[]): string[] {
    const seen: { [key: string]: boolean } = {};
    const uniqueArr: string[] = [];

    for (let i = 0; i < arr.length; i++) {
      const name = arr[i];
      if (!seen[name]) {
        seen[name] = true;
        uniqueArr.push(name);
      }
    }

    return uniqueArr;
  }

  public getInvalid(): string[] {
    const duplicates = this.getDuplicates(this.names);
    return this.removeDuplicates(duplicates);
  }

  public getValid(): string[] {
    const invalid = this.getInvalid();
    const uniqueNames = this.removeDuplicates(this.names);
    return uniqueNames.filter((name) => !invalid.includes(name));
  }

  public getWinner(): string {
    if (this.winner) {
      return this.winner;
    }

    const validEntries = this.getValid();

    const randomIndex = Math.floor(Math.random() * validEntries.length);
    this.winner = validEntries[randomIndex];

    return this.winner;
  }
}

const draw1 = new Draw([
  "sheldon",
  "leonard",
  "rajesh",
  "howard",
  "amy",
  "penny",
]);
console.log("Exemplo 1:");
console.log("valid:", draw1.getValid());
console.log("invalid:", draw1.getInvalid());
console.log("vencedor:", draw1.getWinner());

console.log("----------------------------------------");

const draw2 = new Draw([
  "sheldon",
  "leonard",
  "penny",
  "howard",
  "amy",
  "penny",
]);
console.log("\nExemplo 2:");
console.log("valid:", draw2.getValid());
console.log("invalid:", draw2.getInvalid());
console.log("vencedor:", draw2.getWinner());

console.log("----------------------------------------");

const draw3 = new Draw([
  "howard",
  "leonard",
  "penny",
  "howard",
  "amy",
  "penny",
]);
console.log("\nExemplo 3:");
console.log("valid:", draw3.getValid());
console.log("invalid:", draw3.getInvalid());
console.log("vencedor:", draw3.getWinner());
