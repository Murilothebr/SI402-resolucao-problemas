function exercicio8(lim: number, arr: number[] = [1, 1], index: number = 2): number[]
{
    if(index > lim)
    {
        return arr;
    }

    arr[index] = arr[index - 1] + arr[index - 2];
    return exercicio8(lim, arr, index += 1);
}

var a = exercicio8(20);
console.log(a);

