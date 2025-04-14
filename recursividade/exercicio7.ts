function exercicio7(n: number, newN: number, sum: number)
{
    if(newN == 1)
    {
        console.log(sum);
        return;
    }


    let calc = newN * sum;

    console.log(newN + " * " + sum + " = " + calc)

    exercicio7(n, newN - 1, calc);
}

exercicio7(7, 7, 1);
