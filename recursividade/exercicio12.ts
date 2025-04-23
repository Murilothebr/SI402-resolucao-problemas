function exercicio12(arr: number[], target: number, index: number = 0): number
{
    if(index > arr.length)
    {
        return -1;
    }

    if(arr[index] == target)
    {
        return index;
    }

    return exercicio12(arr, target, index + 1);
}

const randomArray1: number[] = [34, 87, 12, 59, 23, 91, 4, 77, 39, 68, 15, 50, 99, 6, 84, 29, 63, 71, 45, 18];
var ab = exercicio12(randomArray1, 18);
console.log(ab);


