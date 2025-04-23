function exercicio14(arr: number[], sum: number = 0, index: number = 0): number
{
    if(index >= arr.length)
    {
        return sum;
    }

    sum += arr[index];

    return exercicio14(arr, sum, index + 1);
}

function somaRecursivaIndexada(arr: number[], index: number = 0): number {
    if (index >= arr.length) {
        return 0;
    }

    return arr[index] + somaRecursivaIndexada(arr, index + 1);
}

const randomArray3: number[] = [34, 87, 12, 59, 23, 91, 4, 77, 39, 68, 15, 50, 1, 6, 84, 29, 63, 71, 45, 18];
var ab = exercicio14(randomArray3);
console.log(ab);


