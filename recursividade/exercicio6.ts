function exercicio6(n: number, newN: number, sum: number)
{
    if(newN == 1)
    {
        console.log(sum);
        return;
    }

    exercicio6(n, newN - 1, newN * sum);
}

exercicio6(7, 7, 1);
