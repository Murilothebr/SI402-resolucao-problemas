function primeiroMultiplo(a: number, b: number){ 
    var next = b + 1;

    if(next % a  == 0){
        return next;
    }

    return primeiroMultiplo(a, next);
}

var c = primeiroMultiplo(7, 33);
console.log(c);