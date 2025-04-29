// Murilo Marcal & Igor Emanuel

export default class Message {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  public reverse() {
    return this.reverseHelper(this.text.length - 1);
  }

  private reverseHelper(top: number): string {
    if (top < 0) {
      return "";
    }

    return this.text[top] + this.reverseHelper(top - 1);
  }
}

console.log("teste 01");
var message = new Message("1234");
console.log(message.reverse());

console.log("---------------------------------------");

console.log("teste 02");
var message = new Message("12345");
console.log(message.reverse());

console.log("---------------------------------------");

console.log("teste 03");
var message = new Message("1234321");
console.log(message.reverse());

console.log("---------------------------------------");

console.log("teste 04");
var message = new Message("1");
console.log(message.reverse());