class Primos {
    private n: number = 0;

    constructor(n: number) {
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

var primos = new Primos(25);