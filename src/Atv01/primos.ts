// Murilo e Igor

class Primos {
    private n: number = 0;

    constructor(n: number) {
        console.log("Teste para n = ", n)
        
        this.n = n;
        this.primosMenores();
    }

    primosMenores(): number[] {
        const arr: number[] = [2];

        let num = 3;
        while (num < this.n) {
            let initIsPrimo = false;

            if (this.isPrimo(num)) {
                arr.push(num);
                initIsPrimo = true;
            }           

            var back = num;
            num += 2;

            if (initIsPrimo && num < this.n && this.isPrimo(num) && back > 7 ) {
                arr.push(num);
                num += 4;
            }
        }

        var lastIndex = arr.length - 1;
        console.log("ultimo primo: " + arr[lastIndex])
        console.log("")
        console.log("----------------------------------------------")
        console.log("")

        return arr;
    }

    isPrimo(n: number) {
        if (n <= 7) {
            return n == 3 || n == 5 || n == 7;
        }

        if (n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
            return false;
        }

        var limite = Math.sqrt(n);

        for (let i = 9; i < limite; i += 2) {
            if (n % i == 0) {   
                return false;
            }
        }

        return true;
    }       
}

var cem = new Primos(100);
var mil = new Primos(1_000);
var dezMil = new Primos(10_000);
var cemMil = new Primos(100_000);
var milhao = new Primos(1_000_000);
var dezMilhao = new Primos(10_000_000);



