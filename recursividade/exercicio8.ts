function recFib(lim: number, arr: number[] = [1, 1], index: number = 2): number[]
{
    if(index > lim)
    {
        return arr;
    }

    arr[index] = arr[index - 1] + arr[index - 2];
;
    return recFib(lim, arr, index += 1);
}

var a = recFib(20);
console.log(a);

