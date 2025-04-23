function exercicio16(arr: number[], target: number, times: number = 0, index: number = 0): number
{
    if(index >= arr.length)
    {
        return times;
    }

    if(target == arr[index])
    {
        times++;
    }

    return exercicio15(arr, target, times, index + 1);
}

const randomArray5: number[] = [34, 87, 12, 59, 23, 23, 4, 77, 39, 68, 15, 23, 1, 6, 84, 29, 63, 71, 45, 18];
var ab = exercicio15(randomArray4, 23);
console.log(ab);


