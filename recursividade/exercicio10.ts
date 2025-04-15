function exercicio10(lim: number, arr: number[] = [1, 1, 2, 4], index: number = 4): number[]
{
    if(index > lim)
    {
        return arr;
    }

    arr[index] = arr[index - 1] + arr[index - 2] + arr[index - 3] + arr[index - 4];
    return exercicio10(lim, arr, index += 1);
}

var a = exercicio10(30);
console.log(a);

