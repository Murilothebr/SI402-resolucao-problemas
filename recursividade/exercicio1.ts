function mensagem(n: number, index: number)
{
    if(index > n)
    {
        return;
    }

    console.log("teste : ", index);
    mensagem(n, index + 1);
}

mensagem(10, 0);
