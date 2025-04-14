function contagem(n: number, index: number)
{
    if(index > n)
    {
        return;
    }

    console.log(index);
    contagem(n, index + 1);
}

contagem(10, 0);
