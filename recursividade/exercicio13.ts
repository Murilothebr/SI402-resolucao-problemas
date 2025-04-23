function exercicio13(arr: number[], biggest: number = Number.MIN_VALUE, index: number = 0): number
{
    if(index > arr.length)
    {
        return biggest;
    }

    if(arr[index] > biggest)
    {
        biggest = arr[index];
    }

    return exercicio13(arr, biggest, index + 1);
}

const randomArray2: number[] = [34, 87, 12, 59, 23, 91, 4, 77, 39, 68, 15, 50, 1, 6, 84, 29, 63, 71, 45, 101];
var ab = exercicio13(randomArray2, 0);
console.log(ab);


