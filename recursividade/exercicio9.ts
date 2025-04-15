function exercicio9(lim: number, arr: number[] = [1, 1, 2], index: number = 3): number[]
{
    if(index > lim)
    {
        return arr;
    }

    arr[index] = arr[index - 1] + arr[index - 2] + arr[index - 3];
    return exercicio9(lim, arr, index += 1);
}

var a = exercicio9(30);
console.log(a);

