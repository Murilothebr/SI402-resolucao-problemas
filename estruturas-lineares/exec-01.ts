export default class Exec01 {
  private chars: { [key: string]: string } = {};
  private str: string;

  constructor(str: string) {
    this.chars["}"] = "{";
    this.chars["["] = "]";
    this.chars["("] = ")";

    this.str = str;
  }

  public isBalanceado() {
    var charStr: string[] = this.str.split("");

    var opens = [];
    var closes = [];

    for (let i = 0; i < charStr.length; i++) {
      if (Object.keys(this.chars).includes(charStr[i])) {
        opens.push(charStr[i]);
      } else if (Object.values(this.chars).includes(charStr[i])) {
        closes.push(charStr[i]);
      }
    }

    console.log(opens);
    console.log(closes);

    if (opens.length != closes.length) {
      return false;
    }

    for (let i = 0, j = opens.length - 1; i < opens.length; i++, j--) {
      var opened = opens[j];
      var closed = closes[i];

      var respectiveClose = this.chars[opened];

      console.log("opened : ", opened);
      console.log("closed : ", closed);
      console.log("respectiveClose : ", respectiveClose);

      if (closed != respectiveClose) {
        return false;
      }
    }

    return true;
  }
}

var a = new Exec01("{a * [c – b * (e + f)]} – 2");
console.log(a.isBalanceado());
