class Balanced {
  private expression: string[];

  constructor(expression: string[]) {
    this.expression = expression;
  }

  isBalanced(): boolean {
    let stack: string[] = [];

    for (let i = 0; i < this.expression.length; i++) {
      let char = this.expression[i];

      if (char === "{" || char === "[" || char === "(") {
        stack.push(char);
      } else if (char === "}" || char === "]" || char === ")") {
        if (stack.length === 0) {
          return false;
        }

        let last = stack.pop();

        if (
          (char === "}" && last !== "{") ||
          (char === "]" && last !== "[") ||
          (char === ")" && last !== "(")
        ) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}

let d = new Balanced(["{", "}"]);
console.log(d.isBalanced()); // true

let b = new Balanced(["{", "[", "]", "}"]);
console.log(b.isBalanced()); // true

let o = new Balanced(["{", "(", "]"]);
console.log(o.isBalanced()); // false
