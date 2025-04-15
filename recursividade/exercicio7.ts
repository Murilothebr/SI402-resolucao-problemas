function exercicio7(n: number, index: number, sum: number)
{
    if(index == 0)
    {
        console.log(sum);
        return;
    }

    exercicio7(n, index - 1, sum *= n);
}

exercicio7(9, 4, 1);
