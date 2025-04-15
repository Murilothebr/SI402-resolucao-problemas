function exercicio7(n: number, newN: number, sum: number)
{
    if(newN == 1)
    {
        console.log(sum);
        return;
    }

    exercicio7(n, newN - 1, newN * sum);
}

exercicio7(7, 7, 1);
